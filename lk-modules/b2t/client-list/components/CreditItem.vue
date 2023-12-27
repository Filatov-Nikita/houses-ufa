<template>
  <div class="info-block">
    <div class="info-block__grid" @click="showed = !showed">
      <button class="info-block__toggle" :class="{ 'info-block__toggle--showed': showed }">
        <BaseIcon class="tw-w-6 tw-h-6" name="down" />
      </button>
      <div class="info-block__left">
        <p class="info-block__date">{{ $formatDate(item.created_at) }}</p>
        <p>Заявка на ипотеку № {{ item.id }}</p>
      </div>
      <div class="info-block__right">
        <p class="info-block__caption">
          <BaseIcon class="info-block__caption-icon" name="clock" color="tw-fill-primary" />
          <span>{{ item.status.title }}</span>
        </p>
      </div>
    </div>
    <div v-if="showed" class="info-detailed">
      <div class="info-detailed__text-items">
        <div class="info-detailed__text-item">
          <p class="info-detailed__label">Первоначальный взнос</p>
          <p class="info-detailed__value">{{ $amount(item.mortgage_initial_fee) }}</p>
        </div>
        <div class="info-detailed__text-item">
          <p class="info-detailed__label">Срок</p>
          <p class="info-detailed__value">{{ item.period_in_years }}</p>
        </div>
        <div v-if="item.object_type !== 'estate'" class="info-detailed__text-item">
          <p class="info-detailed__label">Сумма кредита</p>
          <p class="info-detailed__value">{{ $amount(item.credit_amount) }}</p>
        </div>
      </div>

      <div class="info-detailed__offers">
        <OfferItem
          class="info-detailed__offer"
          v-for="offer in item.offers"
          :key="offer.id"
          :item="offer"
          :initial-pay="+item.mortgage_initial_fee"
          :sum="+item.credit_amount"
          :period="item.period_in_years"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { CreditItem } from '../types';
  import OfferItem from '@/lk-modules/b2t/ipoteka/components/OfferItem.vue';

  defineProps<{
    item: CreditItem,
  }>();

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .info-block {
    border-radius: 16px;
    padding: 16px 24px;
    position: relative;
    @apply tw-bg-base00;

    &__toggle {
      position: absolute;
      right: 24px;
      top: 16px;
      width: 32px;
      height: 32px;
      padding: 4px;
      @apply tw-text-icon;

      &--showed {
        transform: rotate(180deg);
      }
    }

    &__date {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 4px;
      @apply tw-text-text02;
    }

    &__grid {
      max-width: 1000px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 24px;
      cursor: pointer;
    }

    &__right {
      align-self: flex-end;
      padding-right: 40px;
    }

    &__caption {
      border-radius: 8px;
      padding: 4px 8px;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      gap: 10px;
      @apply tw-bg-white tw-text-text00;

      &-icon {
        width: 16px;
        height: 16px;
      }
    }
  }

  .info-detailed {
    padding-top: 16px;

    &__text-items {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-bottom: 16px;
    }

    &__label {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 4px;
      @apply tw-text-text02;
    }

    &__value {
      @apply tw-text-base tw-text-text01;
    }

    &__offers {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
    }

    &__offer {
      width: calc(50% - 16px);
      margin: 8px;
    }
  }
</style>
