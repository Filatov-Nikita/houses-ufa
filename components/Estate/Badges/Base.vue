<template>
  <div class="estate-adv">
    <BaseIcon class="tw-w-4 tw-h-4 tw-text-primary" :name="icon" />
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    label: string,
    icon: string,
  }>();
</script>

<style scoped lang="scss">
.estate-adv {
  border-radius: 8px;
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  @apply tw-bg-base00;

  span {
    font-size: 14px;
    line-height: 24px;
  }
}
</style>
