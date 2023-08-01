<template>
  <div class="switch">
    <div class="switch__content">
      <input
        id="switch-1"
        type="checkbox"
        :checked="checked"
        @change="$emit('update:checked', !checked)"
      />
      <label for="switch-1"></label>
    </div>
  </div>
</template>
<script setup lang="ts">
const switchProps = defineProps<{
  checked: boolean
}>()

const switchEmits = defineEmits(['update:checked'])
</script>
<style lang="scss" scoped>
.switch {
  input {
    display: none;
  }
  &__content {
    width: 48px;
    label {
      display: flex;
      align-items: center;
      width: 100%;
      height: 24px;
      background: theme('colors.white');
      position: relative;
      cursor: pointer;
      border: 1px solid theme('colors.base01');
      border-radius: 0.75rem;

      &::after {
        content: '';
        position: absolute;
        left: 6px;
        width: 12px;
        height: 12px;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        background: theme('colors.base02');
        transition: all 0.2s ease;
      }
      &::before {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background: theme('colors.primary');
        opacity: 0;
        transition: all 0.2s ease;
      }
    }
  }
  & input:checked {
    & ~ label {
      &::before {
        opacity: 1;
      }
      &::after {
        background: theme('colors.white');
        width: 16px;
        height: 16px;
        left: calc(100% - 16px - 4px);
      }
    }
  }
}
</style>
