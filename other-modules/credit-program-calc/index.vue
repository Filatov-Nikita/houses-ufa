<template>
  <div class="credit-calc">
    <Params class="credit-calc__left" />
    <div class="credit-calc__right">
      <ItemList />
    </div>
    <div v-if="loading" class="inner-loading">Загрузка...</div>
  </div>
</template>

<script setup lang="ts">
  import Params from './components/Params.vue';
  import ItemList from './components/ItemList.vue';
  import { useCreditPrograms } from '@/stores/credit-programs';
  import { useCreditProgramCalc } from './store';

  const creditStore = useCreditPrograms();
  const creditCalcStore = useCreditProgramCalc();

  const loading = computed(() => creditStore.loading || creditCalcStore.loading);

  if(creditStore.creditProgs === null) {
    await useLazyAsyncData(() => {
      return creditStore.show();
    });
  }

  if(creditCalcStore.groupId === null) {
    creditCalcStore.groupId = creditStore.creditProgs?.data[0].id ?? null;
  }

  await useLazyAsyncData(() => {
    return creditCalcStore.show();
  });

  watch(() => creditCalcStore.groupId, (val) => {
    if(val) {
      creditCalcStore.show();
    }
  });
</script>

<style scoped lang="scss">
  .credit-calc {
    border-radius: 16px;
    padding: 40px;
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
    position: relative;
    @apply tw-bg-white;

    &__left {
      width: calc(100% / 12 * 4 - 20px);
      margin: 10px;
    }

    &__right {
      width: calc(100% / 12 * 8 - 20px);
      margin: 10px;
      height: 650px;
      overflow: auto;
      padding: 10px;
      position: relative;

      &--scroll-off {
        overflow: hidden;
      }
    }
  }

  .inner-loading {
    position: absolute;
    inset: 0;
    z-index: 9000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    @apply tw-bg-white/80 tw-text-text01 tw-text-xl;
  }
</style>
