<template>
  <div class="bank-prog-item">
    <div class="bank-prog-item__header">
      <div class="bank-prog-item__icon-block">
        <img v-if="item.bank.image" class="bank-prog-item__icon" :src="item.bank.image.url" />
        <BaseIcon v-else class="bank-prog-item__icon" name="building" color="tw-fill-primary" />
      </div>
      <div class="bank-prog-item__name">{{ item.bank.name }}</div>
    </div>
    <div class="bank-prog-item__perc-block">
      <div class="bank-prog-item__label">Ставка</div>
      <div class="bank-prog-item__perc">{{ item.percent }}%</div>
      <div class="bank-prog-item__price-from">
        <span class="tw-text-text02">от</span> {{ $formatValue(payMonth, '₽/мес') }}
      </div>
    </div>
    <div>
      <div class="bank-prog-item__label">Программа</div>
      <div class="bank-prog-item__prog-name">{{ item.group.name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Offer } from '@/types/credit';
  import { useCreditProgramCalc } from '../store';

  const creditCalc = useCreditProgramCalc();

  interface Props {
    item: Offer,
  }

  const props = defineProps<Props>();

  const payMonth = computed(() => {
    const params = creditCalc.params;
    const s = params.cost - params.initialPay;
    const n = params.period * 12;
    const i = +props.item.percent / 12 / 100;
    const p = s * (i * Math.pow(1 + i, n) / (Math.pow(1 + i, n) - 1));
    return p.toFixed(2);
  });
</script>

<style scoped lang="scss">
  .bank-prog-item {
    border-radius: 16px;
    border: 1px solid theme('colors.border00');
    padding: 24px;
    text-align: left;
    @apply tw-bg-white tw-text-text00;

    &__header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    &__icon-block {
      width: 48px;
      height: 48px;
      padding: 12px;
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

    &__perc-block {
      margin-bottom: 16px;
    }

    &__price-from {
      margin-top: 8px;
      @apply tw-text-lg;

      @include sm {
        @apply tw-text-base;
      }
    }

    &__label {
      @apply tw-text-text02 tw-text-sm;
    }

    &__perc {
      font-size: 32px;
      line-height: 1.25;
      margin-top: 8px;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__prog-name {
      margin-top: 4px;
      @apply tw-text-xl;

      @include sm {
        font-size: 20px;
        line-height: 32px;
      }
    }
  }
</style>
