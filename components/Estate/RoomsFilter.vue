<template>
  <div
    class="estate-rooms-btn"
    :class="{ 'estate-rooms-btn--disabled': disabled }"
    :disabled="disabled"
  >
    <label class="estate-rooms-btn__label">{{ label }}</label>
    <div class="estate-rooms-btn__btns">
      <button
        type="button"
        class="estate-rooms-btn__btn"
        :class="[
          `estate-rooms-btn__btn--${theme}`,
          { 'estate-rooms-btn__btn--active': isActive(btn) },
        ]"
        v-for="btn in roomsBtns"
        @click="onClick(btn)"
      >
        {{ btn.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  type Value = number | null;

  interface Props {
    label: string,
    disabled?: boolean,
    theme?: 'gray' | 'white',
    room_factor_studio: Value,
    room_factor_one_classic: Value,
    room_factor_two_smart: Value,
    room_factor_two_classic: Value,
    room_factor_three_smart: Value,
    room_factor_three_classic: Value,
  }

  interface Emits {
    (name: 'update:room_factor_studio', value: Value): void,
    (name: 'update:room_factor_one_classic', value: Value): void,
    (name: 'update:room_factor_two_smart', value: Value): void,
    (name: 'update:room_factor_two_classic', value: Value): void,
    (name: 'update:room_factor_three_smart', value: Value): void,
    (name: 'update:room_factor_three_classic', value: Value): void,
  }

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
    theme: 'white',
    label: 'Количество комнат',
  });

  const emit = defineEmits<Emits>();

  const roomsBtns = [
    { label: 'С', value: 'room_factor_studio' as const },
    { label: '1', value: 'room_factor_one_classic' as const },
    { label: '2С', value: 'room_factor_two_smart' as const },
    { label: '2', value: 'room_factor_two_classic' as const },
    { label: '3С', value: 'room_factor_three_smart' as const },
    { label: '3', value: 'room_factor_three_classic' as const },
  ];

  function onClick(btn: typeof roomsBtns[number]) {
    const current = props[btn.value];
    const event = `update:${btn.value}` as any;
    const value: Value = current === null ? 1 : null;
    emit(event, value);
  }

  function isActive(btn: typeof roomsBtns[number]) {
    return props[btn.value] === 1;
  }
</script>
<style scoped lang="scss">
  .estate-rooms-btn {
    &--disabled {
      opacity: 0.3 !important;
      pointer-events: none !important;
    }

    &__label {
      letter-spacing: -0.14px;
      @apply tw-text-text02 tw-text-sm tw-font-normal tw-block tw-mb-2;
    }

    &__error {
      @apply tw-mt-2 tw-text-error tw-text-xs tw-font-normal;
    }

    &__btns {
      display: flex;
      column-gap: 8px;
    }

    &__btn {
      padding: 16px;
      transition: background-color 200ms;
      @apply tw-text-base tw-text-black tw-rounded-lg tw-w-full tw-text-center;

      &--white {
        @apply tw-bg-white;
      }

      &--gray {
        @apply tw-bg-base00;
      }

      &:hover {
        @apply tw-bg-secondary-hover;
      }

      &:active {
        @apply tw-bg-secondary-press;
      }

      &--active {
        @apply tw-bg-primary tw-text-white;

        &:hover {
          @apply tw-bg-primary-hover;
        }

        &:active {
          @apply tw-bg-primary-press;
        }
      }
    }
  }
</style>
