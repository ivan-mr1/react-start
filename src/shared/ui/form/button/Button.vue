<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
  goto: { type: String, default: null },
});

const isLink = computed(() => !!props.href);
</script>

<template>
  <component
    :is="isLink ? 'a' : 'button'"
    class="btn"
    :class="{ 'is-disabled': disabled }"
    :href="isLink ? (disabled ? null : href) : null"
    :type="!isLink ? type : null"
    :disabled="!isLink ? disabled : null"
    :aria-disabled="disabled ? 'true' : null"
    :data-goto="goto"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
@use '@helpers' as *;

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: var(--transition);
  padding-block: rem(10);
  padding-inline: rem(20);
  font-weight: 500;
  color: var(--color-white);
  background-color: transparent;
  border: 1px solid var(--color-white);
  border-radius: var(--border-radius);
  text-decoration: none;

  &:active:not(.is-disabled) {
    scale: 0.95;
  }

  @include hover {
    &:not(.is-disabled) {
      opacity: 0.7;
    }
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
}
</style>
