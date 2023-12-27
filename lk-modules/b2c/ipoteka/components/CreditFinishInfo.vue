<template>
  <section class="credit-finish-info">
    <h2 class="credit-finish-info__title">Ипотечные программы</h2>
    <p class="credit-finish-info__subtitle">*Поясняющий текст о том, что заявка подаётся не в банки, а менеджеру ЖК*</p>
    <div class="credit-finish-info__grid">
      <div class="credit-finish-info__params">
        <div class="credit-finish-info__param">
          <p class="credit-finish-info__label">Стоимость квартиры, ₽</p>
          <p class="credit-finish-info__value">{{ $amount(store.params.cost) }}</p>
        </div>
        <div class="credit-finish-info__param">
          <p class="credit-finish-info__label">Первоначальный взнос, ₽</p>
          <p class="credit-finish-info__value">{{ $amount(store.params.initialPay) }}</p>
        </div>
        <div class="credit-finish-info__param">
          <p class="credit-finish-info__label">Срок кредита</p>
          <p class="credit-finish-info__value">{{ store.params.period }} лет</p>
        </div>
      </div>
      <div class="credit-finish-info__programs">
        <div class="credit-finish-info__items">
          <OfferItem
            class="credit-finish-info__item"
            v-for="item in store.selectedOffers"
            :key="item.id"
            :item="item"
            :initialPay="store.params.initialPay"
            :period="store.params.period"
            :sum="store.params.cost"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useCreditProgramCalc } from '@/lk-modules/credit-program-list/store';
  import OfferItem from './OfferItem.vue';

  const store = useCreditProgramCalc();
</script>

<style scoped lang="scss">
  .credit-finish-info {
    &__title {
      font-size: 24px;
      line-height: 1.3;
      margin-bottom: 16px;
      @apply tw-text-text01;
    }

    &__subtitle {
      font-size: 14px;
      margin-bottom: 24px;
      @apply tw-text-text02;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__params {
      width: calc(100% / 12 * 3 - 20px);
      margin: 10px;
    }

    &__param {
      & + & {
        margin-top: 24px;
      }
    }

    &__programs {
      width: calc(100% / 12 * 9 - 20px);
      margin: 10px;
    }

    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__value {
      font-size: 16px;
      line-height: 1.5;
      @apply tw-text-text00;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      margin: -6px;
    }

    &__item {
      width: calc(50% - 12px);
      margin: 6px;
    }
  }
</style>
