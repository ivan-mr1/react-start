<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  options: { type: Array, default: () => [] },
  label: { type: String, default: 'Select' },
});

const model = defineModel({
  type: [String, Number, null],
  default: null,
});

const isOpen = ref(false);
const selectRef = ref(null);

const currentLabel = computed(
  () => props.options.find((o) => o.value === model.value)?.label || props.label,
);

const close = (e) => {
  if (selectRef.value && !selectRef.value.contains(e.target)) isOpen.value = false;
};

onMounted(() => document.addEventListener('click', close));
onUnmounted(() => document.removeEventListener('click', close));
</script>

<template>
  <div ref="selectRef" class="select" :class="{ 'is-open': isOpen }">
    <div class="select__field" @click="isOpen = !isOpen">
      <span class="select__value">{{ currentLabel }}</span>
      <svg class="select__icon" viewBox="0 0 20 20" width="20" height="20">
        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" fill="none" stroke-width="1.5" />
      </svg>
    </div>

    <transition name="select-fade">
      <ul v-if="isOpen" class="select__list">
        <li
          v-for="opt in options"
          :key="opt.value"
          class="select__item"
          :class="{ 'is-active': opt.value === model }"
          @click="
            model = opt.value;
            isOpen = false;
          "
        >
          {{ opt.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.select {
  position: relative;
  font-family: inherit;
  min-width: 80px;

  &__field {
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 0 5px;
    border: 1px solid var(--select-border);
    border-radius: 8px;
    background: var(--select-bg);
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      border-color: #f60;
    }
    .is-open & {
      border-color: #f60;
      box-shadow: 0 0 0 1px #f60;
    }
  }

  &__value {
    font-size: 14px;
    color: var(--select-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__icon {
    flex-shrink: 0;
    color: var(--select-text);
    transition: transform 0.3s;
    .is-open & {
      transform: rotate(180deg);
      color: #f60;
    }
  }

  &__list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    min-width: 100%;
    background: var(--select-bg);
    border: 1px solid var(--select-border);
    border-radius: 8px;
    box-shadow: 0 4px 12px var(--select-shadow);
    z-index: 50;
    padding: 4px 0;
    margin: 0;
    list-style: none;
  }

  &__item {
    padding: 8px 12px;
    font-size: 14px;
    color: var(--select-text);
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: var(--select-hover-bg);
    }
    &.is-active {
      background: var(--select-active-bg);
      color: #f60;
      font-weight: 600;
    }
  }
}

.select-fade-enter-active,
.select-fade-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.select-fade-enter-from,
.select-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
