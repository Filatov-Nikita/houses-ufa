<template>
  <component
    :is="tag.name"
    v-bind="tag.props"
    :disabled="disabled"
    class="base-button"
    :class="[ `base-button--${theme}`, paddingClasses, { 'base-button--disabled': disabled } ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router';

  interface Props {
    theme?: 'green' | 'gray' | 'white' | 'transparent',
    disabled?: boolean,
    to?: RouteLocationRaw,
    type?: string,
    paddingClasses?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'green',
    disabled: false,
    paddingClasses: 'tw-px-6 tw-py-4',
    type:'button'
  });

  const isExternalLink = computed(() => {
    if(typeof props.to === 'string') {
      return /^https?:\/\//.test(props.to);
    }

    return false;
  });

  const tag = computed(() => {
    if(isExternalLink.value) {
      return {
        name: 'a',
        props: { href: props.to }
      }
    } else if(props.to) {
      return {
        name: 'router-link',
        props: {
          to: props.to
        }
      }
    } else {
      return { name: 'button', props: { type: props.type ?? 'submit' } };
    }
  });
</script>
<style scoped lang="scss">
  .base-button {
    display: inline-block;
    border-radius: 8px;
    transition: background-color 200ms;
    text-align: center;

    &--disabled {
      opacity: 0.5;
    }

    &--green {
      @apply tw-bg-primary tw-text-white;

      &:not([disabled]) {
        &:hover {
          @apply tw-bg-primary-hover;
        }

        &:active {
          @apply tw-bg-primary-press;
        }
      }
    }

    &--gray {
      @apply tw-bg-secondary tw-text-text00;

      &:not([disabled]) {
        &:hover {
          @apply tw-bg-secondary-hover;
        }

        &:active {
          @apply tw-bg-secondary-press;
        }
      }
    }

    &--white {
      @apply tw-bg-white tw-text-text00;
    }
    &--transparent {
      @apply tw-text-text00;
      background: transparent;
    }
  }
</style>
