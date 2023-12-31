<template>
  <div class="credit-calc">
    <div class="credit-calc__grid">
      <Params class="credit-calc__left" />
      <div class="credit-calc__right">
        <ItemList />
      </div>
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

  async function show() {
    if(creditStore.creditProgs === null) {
      await creditStore.show();
    }

    if(creditCalcStore.groupId === null) {
      creditCalcStore.groupId = creditStore.creditProgs?.data[0].id ?? null;
      await creditCalcStore.show();
    }
  }

  await useLazyAsyncData(() => {
    return show();
  });

  watch(() => creditCalcStore.groupId, (val) => {
    if(val && creditCalcStore.creditOffers !== null) {
      creditCalcStore.show();
      creditCalcStore.offerIds = [];
    }
  });
</script>

<style scoped lang="scss">
  .credit-calc {
    border-radius: 16px;
    position: relative;
    @apply tw-bg-white;

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__left {
      width: calc(100% / 12 * 4 - 20px);
      margin: 10px;

      @include lg {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include md {
        width: calc(100% - 20px);
      }
    }

    &__right {
      width: calc(100% / 12 * 8 - 20px);
      margin: 10px;
      height: 650px;
      overflow: auto;
      padding-right: 10px;
      position: relative;

      @include lg {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include md {
        width: calc(100% - 20px);
      }

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
