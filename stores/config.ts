import { defineStore } from 'pinia';
import { Theme as ButtonTheme } from 'components/base/types/base-button/theme';
import { Theme as InputTheme } from 'components/base/types/base-input/theme';

export const useConfigStore = defineStore('configStore', {
  state: () => ({
    buttonThemes: getButtonThemes(),
    inputThemes: getInputThemes(),
  }),
});

function getButtonThemes(): Record<string, ButtonTheme> {
  const defaultSizes = {
    textSize: 'tw-text-base',
    lineHeight: 'tw-leading-none',
    padding: 'tw-px-8 tw-py-4'
  };

  return {
    primary: {
      bgColor: 'tw-bg-primary',
      hover: 'hover:tw-bg-primary-hover',
      press: 'active:tw-bg-primary-press',
      textColor: 'tw-text-white',
      disabled: 'disabled:tw-opacity-50',
      rounded: 'tw-rounded-lg',
      sizes: {
        default: defaultSizes
      }
    },
    secondary: {
      bgColor: 'tw-bg-secondary',
      hover: 'hover:tw-bg-secondary-hover',
      press: 'active:tw-bg-secondary-press',
      textColor: 'tw-text-text00',
      disabled: 'disabled:tw-opacity-50',
      rounded: 'tw-rounded-lg',
      sizes: {
        default: defaultSizes
      }
    },
  };
}


function getInputThemes(): Record<string, InputTheme> {
  return {
    white: {
      default: 'input',
      bgColor: 'tw-bg-white',
      textColor: 'tw-text-text02',
      hover: 'hover:tw-bg-base01',
      borderColor: 'tw-border-white',
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
    },
    gray: {
      default: 'input',
      bgColor: 'tw-bg-base01',
      textColor: 'tw-text-text02',
      borderColor: 'tw-border-base01',
      hover: '',
      focus: {
        bgColor: '',
        textColor: '',
      },
      filled: {
        bgColor: '',
        textColor: '',
      },
      error: {
        borderColor: 'tw-border-error'
      }
    }
  };
}
