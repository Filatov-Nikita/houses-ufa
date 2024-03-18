<template>
  <div class="section">
    <div class="wrapper">
      <ComplexMainFilter />
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Как купить</h2>
      </div>
      <EstatePurchaseMethods />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ComplexMainFilter from '@/other-modules/complex-main-filter/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import { data } from '@/seo/pages/complexes';

  useSeoMeta({
    title: data.title,
    description: data.description,
  });
</script>
