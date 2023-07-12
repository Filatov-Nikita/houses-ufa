import { defineStore } from 'pinia';
import { Theme } from 'components/base/types/base-button/theme';

export const useConfigStore = defineStore('configStore', {
  state: () => ({
    buttonThemes: getButtonThemes(),

  }),
});

function getButtonThemes(): Record<string, Theme> {
  const defaultSizes = {
    textSize: 'tw-text-base',
    lineHeight: 'tw-leading-none',
    padding: 'tw-px-8 tw-py-4'
  };

  return {
    primary: {
      bgColor: 'tw-bg-primary',
      hover: 'hover:bg-primary-hover',
      press: 'active:bg-primary-press',
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
      textColor: 'tw-text-dark',
      disabled: 'disabled:tw-opacity-50',
      rounded: 'tw-rounded-lg',
      sizes: {
        default: defaultSizes
      }
    }
  };
}
