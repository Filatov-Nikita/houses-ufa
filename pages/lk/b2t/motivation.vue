<template>
  <section class="page-card">
    <div class="section__top">
      <h2 class="section__title">Мотивация</h2>
    </div>
    <MotivationStrategiesList />
  </section>
</template>

<script setup lang="ts">
  import MotivationStrategiesList from '@/lk-modules/motivation-strategies-list/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  })

  useSeoMeta({
    title: 'ЖК ЛК агента | Мотивация',
  });
</script>
