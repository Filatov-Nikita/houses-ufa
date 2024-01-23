<template>
  <div class="flat-card">
    <div class="flat-card__img-wrap">
      <div class="flat-card__img">
        <img :src="flat.plan_image_url" loading="lazy" :alt="name" />
      </div>
    </div>
    <div class="flat-card__info1">
      <p class="flat-card__name">{{ name }}</p>
      <div class="flat-card__section">
        <p>{{ storeyLabel }}</p>
        <div class="flat-card__dot"></div>
        <p>{{ literLabel }}</p>
        <div class="flat-card__dot"></div>
        <p>{{ complexName }}</p>
      </div>
    </div>
    <div class="flat-card__info2">
      <p class="flat-card__price">{{ priceLabel }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePrettyAmount } from '@/composables/usePrettyAmount';
  import { getRoomsCount } from '@/plugins/rooms-count';
  import type { Flat } from '@/types/estate/flat';

  interface Props {
    flat: Flat
  };

  const props = defineProps<Props>();

  const { amount, pretty } = usePrettyAmount();
  const flat = toRef(props, 'flat');

  const name = computed(() => `${getRoomsCount(flat.value.room_factor)}-комнатная, ${flat.value.area_total} м²`);
  const storeyLabel = computed(() => `${flat.value.floor_number} этаж`);
  const literLabel = computed(() => `Литер ${flat.value.house.letter}`);
  const priceLabel = computed(() => amount(flat.value.price_total));
  const initialPay = computed(() => amount(flat.value.mortgage_initial_fee));
  const monthPay = computed(() => pretty(flat.value.mortgage_monthly_payment, '₽ / мес'));
  const complexName = computed(() => flat.value.complex.name);
</script>

<style scoped lang="scss">
  .flat-card {
    display: grid;
    grid-template-columns: 56px 1fr 0.5fr;
    column-gap: 16px;
    row-gap: 16px;

    @include lg {
      grid-template-columns: 1fr 1fr;
      column-gap: 0px;
    }

    @include md {
      grid-template-columns: 100%;
      row-gap: 16px;
    }

    &__info1 {
      @include lg {
        grid-column: 1 / 2;
      }
    }

    &__info2 {
      text-align: right;

      @include lg {
        grid-column: 2 / 3;
      }

      @include md {
        grid-column: 1 / 2;
        text-align: left;
      }
    }

    &__img-wrap {
      @include lg {
        grid-column: 1 / 3;
      }

      @include md {
        grid-column: 1 / 2;
      }
    }

    &__img {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      padding: 4px;
      @apply tw-bg-base00;

      @include lg {
        width: 120px;
        height: 120px;
        padding: 12px;
      }

      @include md {
        width: 100%;
        max-width: 210px;
        height: 210px;
        padding: 16px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &__name {
      @apply tw-text-lg tw-text-text00;
    }

    &__section {
      display: flex;
      gap: 6px;
      @apply tw-text-text02;
    }

    &__dot {
      vertical-align: middle;
      &::before {
        content: '·';
      }
    }

    &__section {
      font-size: 14px;
      line-height: 24px;
    }

    &__price {
      font-size: 20px;
      line-height: 1.6;
      @apply tw-text-text00;
    }

    &__name {
      margin-bottom: 4px;
    }
  }
</style>
