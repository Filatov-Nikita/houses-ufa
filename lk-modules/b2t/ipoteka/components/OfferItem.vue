<template>
  <div class="bank-prog-mini-item">
    <div class="bank-prog-mini-item__header">
      <div class="bank-prog-mini-item__icon-block">
        <img v-if="item.bank.image" class="bank-prog-mini-item__icon" :src="item.bank.image.url" />
        <BaseIcon v-else class="bank-prog-mini-item__icon" name="building" color="tw-fill-primary" />
      </div>
      <div class="bank-prog-mini-item__name">{{ item.bank.name }}</div>
    </div>
    <div class="bank-prog-mini-item__items">
      <div class="bank-prog-mini-item__item bank-prog-mini-item__item--name">
        <div class="bank-prog-mini-item__label">Программа</div>
        <div class="bank-prog-mini-item__value">{{ item.group.name }}</div>
      </div>
      <div class="bank-prog-mini-item__item bank-prog-mini-item__item--name">
        <div class="bank-prog-mini-item__label">Платёж в месяц</div>
        <div class="bank-prog-mini-item__value">
          {{ sum === 0 ? '-' : $amount(payMonth) }}
        </div>
      </div>
      <div class="bank-prog-mini-item__item bank-prog-mini-item__item--name">
        <div class="bank-prog-mini-item__label">Ставка</div>
        <div class="bank-prog-mini-item__value">{{ item.percent }} %</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Offer } from '@/types/credit';
  import { calcMonthlyPay } from '@/helpers/credit';

  const props = defineProps<{
    item: Offer,
    initialPay: number,
    sum: number,
    period: number,
  }>();

  const payMonth = computed(() => calcMonthlyPay(
    props.sum,
    props.initialPay,
    props.period,
    +props.item.percent,
  ));
</script>

<style scoped lang="scss">
  .bank-prog-mini-item {
    border-radius: 16px;
    border: 1px solid theme('colors.border00');
    padding: 16px;
    text-align: left;
    display: block;
    @apply tw-bg-white tw-text-text00;

    &__header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 16px;
    }

    &__icon-block {
      width: 32px;
      height: 32px;
      padding: 4px;
      border-radius: 8px;
      @apply tw-bg-base00;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }

    &__name {
      @apply tw-text-base;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }

    &__item {
      flex-grow: 1;

      &--name, &--pay {
        max-width: 120px;
      }

      &--perc {
        max-width: 45px;
      }
    }

    &__label {
      margin-bottom: 4px;
      @apply tw-text-sm tw-text-text02;
    }

    &__value {
      @apply tw-text-text00 tw-text-base;
    }
  }
</style>
