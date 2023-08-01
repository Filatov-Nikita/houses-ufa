<template>
  <div class="base-input" :class="{ disabled }">
    <label :for="name" :class="labelClasses">{{ label }}</label>
    <input
      :id="name"
      :class="inputClasses"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      v-model="value"
    >
    <div v-if="caption" :class="captionClassess">{{ caption }}</div>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';
  import { useConfigStore } from '@/store/config';
  import type { Theme } from './types/base-input/theme';

  interface Props {
    name: string,
    rules?: string,
    label: string,
    caption?: string,
    modelValue?: any,
    placeholder?: string,
    type?: string,
    disabled?: boolean,
    theme?: string | Theme,
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'gray',
    type: 'text',
    disabled: false
  });

  const configStore = useConfigStore();

  const themes = computed<Record<string, Theme>>(() => {
    return configStore.inputThemes;
  });

  const defaultTheme: Theme = {
    default: 'input',
    bgColor: 'tw-bg-white',
    hover: 'hover:tw-bg-base01',
    borderColor: 'tw-border-white',
    textColor: 'tw-text-text02',
    focus: {
      bgColor: 'focus:tw-bg-base01',
      textColor: 'focus:tw-text-text02',
    },
    filled: {
      bgColor: 'tw-bg-white',
      textColor: 'tw-text-text02',
    },
    error: {
      borderColor: 'tw-border-error'
    }
  };

  const currentTheme = computed<Theme>(() => {
    let theme = defaultTheme;
    if(typeof props.theme === 'string') {
      if(props.theme in themes.value) theme = themes.value[props.theme]
    };

    return theme;
  });

  const { value, errorMessage } = useField(props.name, props.rules, {
    label: props.label,
    syncVModel: true
  });

  const inputClasses = computed(() => {
    let classes = [];
    if(!value.value) {
      classes.push(currentTheme.value.bgColor);
      classes.push(currentTheme.value.textColor);
      classes.push(currentTheme.value.focus.bgColor);
      classes.push(currentTheme.value.focus.textColor);
    } else {
      classes.push(currentTheme.value.filled.bgColor || currentTheme.value.bgColor);
      classes.push(currentTheme.value.filled.textColor || currentTheme.value.textColor);
    }

    return [
      currentTheme.value.default,
      currentTheme.value.hover,
      classes.join(' '),
      {
        [ currentTheme.value.borderColor ]: !errorMessage.value,
        [ currentTheme.value.error.borderColor ]: errorMessage.value,
      }
    ]
  });

  const caption = computed(() => {
    return errorMessage.value ?? props.caption;
  });

  const captionClassess = computed(() => {
    return [
      'tw-text-xs',
      'tw-absolute',
      'tw-leading-none',
      'tw-bottom-1',
      {
        'tw-text-error': errorMessage.value,
        'tw-text-text02': !errorMessage.value,
      }
    ];
  });

  const labelClasses = [
    'tw-block',
    'tw-w-full',
    'tw-text-text02',
    'tw-text-sm',
    'tw-leading-none',
    'tw-mb-2',
  ];
</script>
<style scoped>
.base-input {
  position: relative;
  padding-bottom: 24px;
}

.disabled {
  opacity: 0.5;
}

.input {
  outline: none;
  @apply tw-block tw-w-full tw-rounded-lg tw-py-3 tw-px-4 tw-h-[56px] tw-text-base tw-border tw-border-solid tw-transition tw-duration-200;
}

.input::placeholder {
  @apply tw-text-text02;
}
</style>
