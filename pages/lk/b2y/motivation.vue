<template>
  <section class="page-card">
    <div class="section__top">
      <h2 class="section__title">Мотивация</h2>
    </div>
    <MotivationList type="b2y" />
  </section>
</template>

<script setup lang="ts">
  import MotivationList from '@/lk-modules/motivation-list/index.vue';

  definePageMeta({
    layout: 'lk-b2y',
    middleware: ['auth'],
  })

  useSeoMeta({
    title: 'ЖК ЛК агентства | Мотивация',
  });
</script>
