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

  const props = defineProps<{
    objectType?: 'flat' | 'town',
    objectId?: string | number,
  }>();

  const creditStore = useCreditPrograms();
  const creditCalcStore = useCreditProgramCalc();

  creditCalcStore.objectId = props.objectId;
  creditCalcStore.objectType = props.objectType;

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
    }
  });
</script>

<style scoped lang="scss">
  .credit-calc {
    border-radius: 16px;
    padding: 40px;
    position: relative;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__left {
      width: calc(100% / 12 * 4 - 20px);
      margin: 10px;

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
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

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
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
