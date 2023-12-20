<template>
  <div class="place-card">
    <div class="place-card__info1">
      <p class="place-card__name">{{ name }}</p>
      <div class="place-card__section">
        <p>{{ area }}</p>
      </div>
    </div>
    <div class="place-card__info2">
      <p class="place-card__price">{{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePrettyAmount } from '@/composables/usePrettyAmount';
  import type { ParkingOne } from '@/types/estate/parking';

  interface Props {
    item: ParkingOne,
    type: 'parking' | 'place',
  };

  const props = defineProps<Props>();

  const { amount } = usePrettyAmount();

  const name = computed(() => {
    const title = props.type === 'parking' ? 'Машиноместо' : 'Кладовка';
    return `${title} №${props.item.number}`;
  });

  const area = computed(() => {
    return `${props.item.area_total} м²`;
  });

  const price = computed(() => {
    return `${amount(props.item.price_total)}`;
  });
</script>

<style scoped lang="scss">
  .place-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
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

    &__name {
      @apply tw-text-lg tw-text-text00;
    }

    &__section {
      display: flex;
      gap: 6px;
      font-size: 14px;
      line-height: 24px;
      @apply tw-text-text02;
    }

    &__price {
      @apply tw-text-text00 tw-text-xl;
    }

    &__name {
      margin-bottom: 8px;
    }
  }
</style>
