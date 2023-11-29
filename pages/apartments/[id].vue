<template>
  <div class="section">
    <div class="wrapper">
      <FlatCard />
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Ипотека</h2>
      </div>
      <CreditCalc />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Похожие квартиры в других комплексах</h2>
      </div>
      <FlatSimilar />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>

<script setup lang="ts">
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import CreditCalc from '@/other-modules/credit-program-calc/index.vue';
  import FlatCard from '@/other-modules/flat-card/index.vue';
  import FlatSimilar from '@/other-modules/flat-similar/index.vue';
</script>
