<template>
  <button :class="rootClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
  import type { Theme, Size } from './types/base-button/theme';
  import { useConfigStore } from '@/stores/config';

  interface Props {
    theme?: string | Theme,
    size?: string,
    fullWidth?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'primary',
    size: 'default',
    fullWidth: false,
  });

  const configStore = useConfigStore();

  const defaultTheme: Theme = {
    bgColor: 'tw-bg-primary',
    hover: 'hover:tw-bg-primary-hover',
    press: 'active:tw-bg-primary-press',
    textColor: 'tw-text-white',
    disabled: 'disabled:tw-opacity-50',
    rounded: 'tw-rounded-lg',
    sizes: {
      default: {
        textSize: 'tw-text-base',
        lineHeight: 'tw-leading-none',
        padding: 'tw-px-8 tw-py-4'
      }
    }
  };

  const themes = computed<Record<string, Theme>>(() => {
    return configStore.buttonThemes;
  });

  const currentTheme = computed<Theme>(() => {
    let theme = defaultTheme;
    if(typeof props.theme === 'string') {
      if(props.theme in themes.value) theme = themes.value[props.theme]
    };
    return theme;
  });

  const currentSize = computed<Size>(() => {
    const sizes = currentTheme.value.sizes;
    if(props.size in sizes) return sizes[props.size];
    return defaultTheme.sizes.default;
  });

  const rootClasses = computed(() => {
    const {
      bgColor, hover, press, disabled, textColor, rounded,
    } = currentTheme.value;

    const { textSize, lineHeight, padding } = currentSize.value;

    return [
      bgColor,
      hover,
      press,
      disabled,
      textColor,
      rounded,
      padding,
      lineHeight,
      textSize,
      { 'tw-w-full tw-block': props.fullWidth },
    ];
  });
</script>
<style scoped>

</style>
