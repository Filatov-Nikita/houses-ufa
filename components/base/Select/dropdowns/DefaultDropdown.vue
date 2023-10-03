<template>
  <div class="dropdown-default">
    <div
      v-for="option in options"
      class="dropdown-default__option"
      :class="{ 'dropdown-default__option--active': isActive(option, value) }"
      @click="onClick(option)"
    >
      {{ getLabel(option) }}
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    value: any,
    handleChange: Function,
    toggle: () => void,
    options: Array<any>,
    getLabel?: (opt: any) => string,
    setValue?: (opt: any) => void,
    isActive?: (opt: any, v: any) => boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    setValue: (opt: any) => opt,
    getLabel: (v: any) => v?.label,
    isActive: (opt: any, v: any) => opt?.value === v?.value,
  });

  function onClick(option: any) {
    props.handleChange(props.setValue(option));
    props.toggle();
  }
</script>
<style scoped lang="scss">
  .dropdown-default {
    &__option {
      padding: 8px 16px;
      transition: background-color 300ms;
      @apply tw-text-text00 tw-text-base tw-font-normal tw-cursor-pointer tw-rounded-lg;

      &--active, &:hover {
        @apply tw-bg-base00;
      }
    }
  }
</style>
