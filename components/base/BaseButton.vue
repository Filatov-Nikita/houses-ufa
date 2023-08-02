<template>
  <component
    :is="tag.name"
    v-bind="tag.props"
    :disabled="disabled"
    class="base-button"
    :class="[ `base-button--${theme}`, { 'base-button--disabled': disabled } ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
  import { RouteLocationRaw } from 'vue-router';

  interface Props {
    theme?: 'green' | 'gray',
    disabled?: boolean,
    to?: RouteLocationRaw,
    type?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'green',
    disabled: false,
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
    padding: 17px 24px;
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
  }
</style>
