<script setup>
defineProps({
  title: { type: String, default: '' },
  id: { type: String, required: true },
  type: { type: String, default: 'text' },
});

const model = defineModel({
  type: [String, Number],
  default: '',
});

// Отключаем наследование на корневой div, чтобы атрибуты летели в input
defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <div class="field">
    <label v-if="title" :for="id" class="field__label">
      {{ title }}
    </label>
    <input
      :id="id"
      :type="type"
      v-bind="$attrs"
      v-model="model"
      class="field__input"
      placeholder=" "
      autocomplete="off"
    />
  </div>
</template>

<style scoped lang="scss">
.field {
  --field-color-label: #ffffff;
  --field-color-label-active: #ffffff;
  --field-color-border: #ffffff;
  --field-color-active: #ff9800;
  --field-color-focus-bcg: #ffffff;

  position: relative;

  // обращаемся к label только когда плейсхолдер не должен отображаться
  &:has(.field__input:focus),
  &:has(.field__input:not(:placeholder-shown)) {
    .field__label {
      color: var(--field-color-label-active);
      scale: 0.7;
      translate: -30px -45px;
    }
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 17px;
    color: var(--field-color-label);
    translate: 0 -50%;
  }

  &__input {
    --field-input-padding-x: 16px;
    --field-search-input-icon-size: 16px;

    width: 100%;
    height: 44px;
    padding-inline: var(--field-input-padding-x);
    background-color: transparent;
    border: 1px solid var(--field-color-border);
    border-radius: 8px;

    &:hover,
    &:focus {
      color: var(--field-color-active);
    }

    &:focus {
      background-color: var(--field-color-focus-bcg);
      outline: none;
    }

    &[type='search'] {
      &:placeholder-shown {
        padding-right: calc(var(--field-input-padding-x) * 2 + var(--field-search-input-icon-size));
        background-image: url('./icon-search_black.svg');
        background-position: calc(100% - var(--field-input-padding-x)) 50%;
        background-size: var(--field-search-input-icon-size);
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
