<template>
  <div class="section">
    <div class="wrapper">
      <TownCard />
    </div>
  </div>

  <LandProjectList v-if="townCard.isEmptyPlace && townCard.data" :town-id="townId" />

  <section class="section">
    <div class="wrapper">
      <CreditCalc object-type="town" :object-id="townId" />
    </div>
  </section>
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
  import LandProjectList from '@/other-modules/land-project-list/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import { useTownCard } from '@/other-modules/town-card/store/index';

  useCanonical();

  const route = useRoute();
  const townCard = useTownCard();

  townCard.setTownId(+route.params.id);

  const townId = computed(() => +route.params.id);

  await useLazyAsyncData(() => townCard.show());

  onUnmounted(() => {
    townCard.data = null;
    townCard.townId = null;
  });
</script>

<style scoped lang="scss">

</style>
