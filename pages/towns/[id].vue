<template>
  <div class="section">
    <div class="wrapper">
      <TownCard />
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <CreditCalc object-type="town" :object-id="+$route.params.id" />
    </div>
  </section>
  <!-- ломает ssr -->
  <section v-if="!townCard.isEmptyPlace && townCard.data" class="section">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Похожие дома в этом посёлке</h2>
      </div>
      <TownSimilar />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>

<script setup lang="ts">
  import TownCard from '@/other-modules/town-card/index.vue';
  import CreditCalc from '@/other-modules/credit-program-calc/index.vue';
  import TownSimilar from '@/other-modules/town-similar/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import { useTownCard } from '@/other-modules/town-card/store/index';

  const townCard = useTownCard();
</script>

<style scoped lang="scss">

</style>
