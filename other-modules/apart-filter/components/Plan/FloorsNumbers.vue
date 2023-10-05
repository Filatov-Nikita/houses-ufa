<template>
  <div class="numbers-list">
    <div
      class="numbers-list__number"
      v-for="number in numbers"
    >
      {{ number }}
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ numbers: number[] }>();
</script>
<style scoped lang="scss">
  .numbers-list {
    &__number {
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      font-size: 16px;
      @apply tw-text-text02;

      & + & {
        margin-top: 6px;
      }
    }
  }
</style>
