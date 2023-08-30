<template>
  <div class="tw-relative" :class="{ 'tw-opacity-50': disabled }" v-click-outside="close">
    <div class="base-select-block" @click="toggle">
      <label class="base-select-block__label">{{ label }}</label>
      <div class="base-select-block__input" :class="[ `base-select-block__input--${theme}`, { 'base-select-block__input--error': errorMessage } ]">
        <div class="tw-grow">
          <component :is="displayComp" v-bind="displayProps" :toggle="toggle" :value="value" :handleChange="handleChange" />
        </div>
        <div class="base-select-block__icon" :class="{ 'base-select-block__icon--up': showed }">
          <svg class="tw-w-full tw-h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
            <path d="M20.0306 9.53104L12.5306 17.031C12.461 17.1008 12.3782 17.1561 12.2872 17.1938C12.1961 17.2316 12.0986 17.251 12 17.251C11.9014 17.251 11.8038 17.2316 11.7128 17.1938C11.6217 17.1561 11.539 17.1008 11.4694 17.031L3.96936 9.53104C3.82863 9.39031 3.74957 9.19944 3.74957 9.00042C3.74957 8.80139 3.82863 8.61052 3.96936 8.46979C4.1101 8.32906 4.30097 8.25 4.49999 8.25C4.69901 8.25 4.88988 8.32906 5.03061 8.46979L12 15.4401L18.9694 8.46979C19.039 8.40011 19.1218 8.34483 19.2128 8.30712C19.3039 8.26941 19.4014 8.25 19.5 8.25C19.5985 8.25 19.6961 8.26941 19.7872 8.30712C19.8782 8.34483 19.9609 8.40011 20.0306 8.46979C20.1003 8.53947 20.1556 8.6222 20.1933 8.71324C20.231 8.80429 20.2504 8.90187 20.2504 9.00042C20.2504 9.09896 20.231 9.19654 20.1933 9.28759C20.1556 9.37863 20.1003 9.46136 20.0306 9.53104Z" fill="#8F8F8F"/>
          </svg>
        </div>
      </div>
      <transition
        leave-active-class="animate__animated anim-300ms animate__fadeOutUp"
        enter-active-class="animate__animated anim-300ms animate__shakeX"
      >
        <div class="base-select-block__error-msg" v-if="errorMessage">
          {{ errorMessage }}
        </div>
      </transition>
    </div>

    <transition
      leave-active-class="animate__animated anim-300ms animate__selectDown"
      enter-active-class="animate__animated anim-300ms animate__selectUp"
    >
      <div v-if="showed" class="base-dropdown-block">
        <component :is="dropdownComp" v-bind="dropDownProps" :toggle="toggle" :value="value" :handleChange="handleChange" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';
  import DefaultDropdown from '@/components/base/BaseSelect/dropdowns/DefaultDropdown.vue';
  import DefaultDisplay from '@/components/base/BaseSelect/displays/DefaultDisplay.vue';

  interface Props {
    label: string,
    name: string,
    rules?: string,
    disabled?: boolean,
    theme?: 'white' | 'gray',
    modelValue?: any,
    displayComp?: any,
    dropdownComp?: any,
    dropDownProps?: any,
    displayProps?: any,
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'gray',
    disabled: false,
    displayComp: DefaultDisplay,
    dropdownComp: DefaultDropdown,
    dropDownProps: {},
    displayProps: {},
  });

  const { value, errorMessage, handleChange } = useField(props.name, props.rules, {
    label: props.label,
    syncVModel: true
  });

  const showed = ref(false);

  function toggle() {
    if(props.disabled) return;
    showed.value = !showed.value;
  }

  function close() {
    showed.value = false;
  }
</script>

<style scoped lang="scss">
  .base-select-block {
    &__label {
      letter-spacing: -0.14px;
      @apply tw-text-sm tw-font-normal tw-text-text02 tw-mb-2 tw-block;
    }

    &__input {
      border-radius: 8px;
      min-height: 56px;
      transition: background-color 300ms;
      border-width: 1px;
      border-style: solid;
      @apply tw-px-4 tw-py-3 tw-flex tw-items-center tw-gap-4 tw-cursor-pointer;

      &--gray {
        @apply tw-bg-base00 tw-border-base00;

        &:hover {
          @apply tw-bg-base01;
        }
      }

      &--white {
        @apply tw-bg-white tw-border-white;

        &:hover {
          @apply tw-bg-base01;
        }
      }

      &--error {
        @apply tw-border-error;
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
      transition: transform 300ms;

      &--up {
        transform: rotate(180deg);
      }
    }

    &__error-msg {
      @apply tw-mt-2 tw-text-error tw-text-xs tw-font-normal;
    }
  }

  .base-dropdown-block {
    min-width: 100%;
    height: 350px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07);
    border-radius: 8px 8px 8px 8px;
    z-index: 100;
    top: calc(100% + 8px);
    padding: 8px;
    overflow-y: scroll;
    @apply tw-absolute tw-bg-white;
  }

  @keyframes selectUp {
    from {
      opacity: 0;
      transform: translate3d(0, -16px, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .animate__selectUp {
    animation-name: selectUp;
  }

  @keyframes selectDown {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(0, -16px, 0);
    }
  }
  .animate__selectDown {
    animation-name: selectDown;
  }
</style>
