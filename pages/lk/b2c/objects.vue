<template>
  <div class="lk-objects">
    <h1 class="lk-objects__title">Мои объекты</h1>
    <ObjectList />
  </div>
</template>

<script setup lang="ts">
  import ObjectList from '@/lk-modules/b2c/object-list/index.vue';

  definePageMeta({
    layout: 'lk-client',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'Мои объекты',
  });
</script>

<style scoped lang="scss">
  .lk-objects {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 16px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;

      @include sm {
        font-size: 24px;
        line-height: 1.3;
      }
    }
  }
</style>
