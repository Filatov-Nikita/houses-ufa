<template>
  <div class="page-card">
    <div class="section__top">
      <h1 class="section__title">Рейтинги</h1>
    </div>
    <RatingList type="b2y" />
  </div>
</template>

<script setup lang="ts">
  import RatingList from '@/lk-modules/rating-list/index.vue';

  definePageMeta({
    layout: 'lk-b2y',
    middleware: ['auth'],
  });
</script>
