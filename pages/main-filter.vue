<template>
  <MainFilter class="section" />
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
  import MainFilter from '@/other-modules/main-filter/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import { useRoute } from 'vue-router';
  import { data } from '@/seo/pages/main-filter';

  useHead({
    meta: [
      {
        name: 'robots',
        content: 'noindex',
      }
    ]
  })

  useCanonical({ preserveParams: ['page'] });

  const route = useRoute();

  const seo = getSeo();

  useSeoMeta({
    title: seo.title,
    description: seo.description,
  });

  function getSeo() {
    const type = route.query.filterType as string;
    switch(type) {
      case 'towns': return data.towns;
      case 'flats': return data.flats;
      case 'out-city-flats': return data['out-city-flats'];
    }
    return data.flats;
  }
</script>
