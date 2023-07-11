<template>
  <button :class="rootClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
  interface Theme {
    bgColor: string,
    hover: string,
    press: string,
    textColor: string,
    disabled: string,
    rounded: string
  }

  interface Size {
    fontSize: 'tw-text-base',
    lineHeight: 'tw-text-base',
  }

  interface Props {
    theme: string | Theme,
    size: string | Size
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'primary'
  });

  const defaultThemes: Record<string, Theme> = {
    primary: {
      bgColor: 'tw-bg-primary',
      hover: 'hover:bg-primary-hover',
      press: 'active:bg-primary-press',
      textColor: 'tw-text-white',
      disabled: 'disabled:tw-opacity-50',
      rounded: 'tw-rounded-sm',
    },
    secondary: {
      bgColor: 'tw-bg-secondary',
      hover: 'hover:bg-secondary-hover',
      press: 'active:bg-secondary-press',
      textColor: 'tw-text-dark',
      disabled: 'disabled:tw-opacity-50',
      rounded: 'tw-rounded-sm',
    }
  };

  const currentTheme = computed<Theme>(() => {
    let theme = defaultThemes['primary'];
    if(typeof props.theme === 'string') {
      if(props.theme in defaultThemes) theme = defaultThemes[props.theme]
    };
    return theme;
  });

  const rootClasses = computed(() => {
    const { bgColor, hover, press, disabled, textColor, rounded } = currentTheme.value;
    return `${bgColor} ${hover} ${press} ${disabled} ${textColor} ${rounded}`;
  });
</script>
<style scoped>

</style>
