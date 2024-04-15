<template>
  <div class="section">
    <div class="wrapper">
      <ProjectMainFilter />
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
  import ProjectMainFilter from '@/other-modules/project-main-filter/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';

  useCanonical({ preserveParams: [ 'town_id', 'page' ] });

  await usePageSeo('towns/index.json');
</script>
