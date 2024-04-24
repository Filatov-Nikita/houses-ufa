<template>
  <section class="tw-pt-8 page-card">
    <div class="card-wrapper">
      <div class="section__top">
        <h2 class="section__title">Объекты застройщика «Жилой квартал»</h2>
      </div>
      <EstateGridList flexible theme="gray" />
    </div>
  </section>
</template>
<script setup lang="ts">
import EstateGridList from '@/other-modules/estate-list-grid/index.vue';

definePageMeta({
  layout: 'lk-b2y',
  middleware: ['auth'],
})

useSeoMeta({
  title: 'ЖК ЛК агенства | Объекты',
});
</script>
