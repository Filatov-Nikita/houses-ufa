<template>
  <transition
    leave-active-class="animate__animated anim-500ms animate__fadeOut"
    enter-active-class="animate__animated anim-500ms animate__fadeIn"
  >
    <div v-if="showed" class="base-banner" :class="[ `base-banner--${type}-${theme}` ]">
      <div class="base-banner__content">
        <div class="base-banner__icon-wrap" :class="[ `base-banner__icon-wrap--${type}-${theme}` ]">
          <div class="base-banner__icon">
            <BaseIcon fit :name="icon" />
          </div>
        </div>
        <div class="base-banner__text">
          <slot />
        </div>
      </div>

      <div class="base-banner__actions">
        <BaseButton :theme="btnTheme" @click="emit('action')">
          {{ actionLabel }}
        </BaseButton>
        <BaseButton
          padding-classes="tw-p-4 lg:tw-p-3"
          :theme="btnTheme"
          @click="emit('close')"
        >
          <BaseIcon class="tw-w-6 tw-h-6" name="close" />
        </BaseButton>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  interface Props {
    type?: 'success' | 'warning' | 'error',
    theme?: string,
    icon?: string,
    showed?: boolean,
    actionLabel: string
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'white',
    icon: 'fire',
    type: 'success',
    showed: true
  });

  const emit = defineEmits<{
    (event: 'close'): void,
    (event: 'action'): void,
  }>();

  const btnTheme = computed(() => {
    return props.theme === 'colored' ? 'white' : 'gray';
  });
</script>

<style scoped lang="scss">
  .base-banner {
    padding: 16px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    @screen lg {
      gap: 24px;
      padding: 16px 24px;
    }

    &--success-white, &--warning-white, &--error-white {
      @apply tw-bg-white tw-border-white;
    }

    &--success-colored {
      border-color: #5AC76E;
      background-color: #F1F8F4;
    }

    &--warning-colored {
      border-color: #E3D65F;
      background-color: #FEF7EA;;
    }

    &--error-colored {
      border-color: #D84C4C;
      background-color: #FAECEC;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }

    &__content {
      display: flex;
      flex-basis: 100%;
      gap: 24px;

      @screen lg {
        align-items: center;
        flex-basis: 660px;
      }
    }

    &__actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin-left: auto;

      @screen lg {
        flex-grow: 1;
        align-items: center;
      }
    }

    &__icon-wrap {
      min-width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;

      &--success-white {
        background-color: #E3FFEF;
        color: #4FBA78;
      }

      &--warning-white {
        background-color: #FEF5E5;
        color: #FEBF22;
      }

      &--error-white {
        background-color: #FFECEC;
        color: #F13F36;
      }

      &--success-colored {
        background-color: #4FBA78;
        @apply tw-text-white;
      }

      &--warning-colored {
        background-color: #FEBF22;
        @apply tw-text-white;
      }

      &--error-colored {
        background-color: #F13F36;
        @apply tw-text-white;
      }
    }
  }
</style>
