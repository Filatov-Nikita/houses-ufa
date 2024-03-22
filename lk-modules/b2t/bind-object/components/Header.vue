<template>
  <div class="main-filter-header">
    <div class="main-filter-header__toolbar">
      <h1 class="main-filter-header__h1">Подобрать жильё</h1>
    </div>
    <Params />
  </div>
</template>

<script setup lang="ts">
  import Params from './Params.vue';
</script>

<style scoped lang="scss">
  .main-filter-header {
    border-radius: 16px;
    @apply tw-bg-white;

    &__h1 {
      font-size: 32px;
      line-height: 1.375;
      @apply tw-text-text00;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 48px;

      @include sm {
        gap: 16px;
        margin-bottom: 24px;
      }
    }
  }
</style>
