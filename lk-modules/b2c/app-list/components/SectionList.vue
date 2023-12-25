<template>
  <div class="section-list">
    <h1 class="section-list__title">Мои заявки</h1>
    <div class="section-list__items">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .section-list {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;
    }
  }
</style>
