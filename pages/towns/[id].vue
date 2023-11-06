<template>
  <div>
    <div class="wrapper">
      <TownCard />
    </div>
  </div>
  <section>
    <div class="wrapper">
      <CreditCalc />
    </div>
  </section>
  <section>
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>

<script setup lang="ts">
  import TownCard from '@/other-modules/town-card/index.vue';
  import CreditCalc from '@/other-modules/credit-program-calc/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
</script>

<style scoped lang="scss">

</style>
