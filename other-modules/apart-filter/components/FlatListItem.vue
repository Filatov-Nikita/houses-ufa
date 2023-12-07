<template>
  <NuxtLink :to="to" class="flat-list-item">
    <div class="flat-list-item__img-wrap">
      <div class="flat-list-item__img">
        <img :src="flat.plan_image_url" loading="lazy" :alt="name" />
      </div>
    </div>
    <div class="flat-list-item__info1">
      <p class="flat-list-item__name">{{ name }}</p>
      <div class="flat-list-item__section">
        <p>{{ storeyLabel }}</p>
        <div class="flat-list-item__dot"></div>
        <p>{{ literLabel }}</p>
      </div>
      <p class="flat-list-item__house">{{ complexName }}</p>
      <div class="flat-list-item__adv">
        <BaseIcon class="tw-w-4 tw-h-4 tw-text-primary" name="paint_brush_board" />
        <span>Предчистовая отделка</span>
      </div>
    </div>
    <div class="flat-list-item__info2">
      <p class="flat-list-item__price">{{ priceLabel }}</p>
      <p class="flat-list-item__credit">
        В ипотеку — <span>от {{ monthPay }}</span>
      </p>
      <p class="flat-list-item__credit">
        Первоначальный взнос — <span>от {{ initialPay }}</span>
      </p>
      <div class="flat-list-item__btns">
        <button class="flat-list-item__order">Забронировать</button>
        <button class="flat-list-item__action">
          <BaseIcon name="heart" />
        </button>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import { usePrettyAmount } from '../../../composables/usePrettyAmount';
  import { Flat } from '../store/filter-list/composables/useFlats';
  import { getRoomsCount } from '@/plugins/rooms-count';

  interface Props {
    flat: Flat
  };

  const props = defineProps<Props>();

  const to = computed(() => `/apartments/${props.flat.id}`);

  const { amount, pretty } = usePrettyAmount();
  const flat = toRef(props, 'flat');

  const name = computed(() => `${getRoomsCount(flat.value.room_factor)}-комнатная, ${flat.value.area_total} м²`);
  const storeyLabel = computed(() => `${flat.value.floor_number} этаж из ${flat.value.entrance.top_floor_number}`);
  const literLabel = computed(() => `Литер ${flat.value.house.letter}`);
  const priceLabel = computed(() => amount(flat.value.price_total));
  const initialPay = computed(() => amount(flat.value.mortgage_initial_fee));
  const monthPay = computed(() => pretty(flat.value.mortgage_monthly_payment, '₽ / мес'));
  const complexName = computed(() => flat.value.complex.name);
</script>

<style scoped lang="scss">
  .flat-list-item {
    display: grid;
    grid-template-columns: 152px 1fr 1fr;
    column-gap: 32px;
    row-gap: 16px;

    @include lg {
      grid-template-columns: 1fr 1fr;
      column-gap: 0px;
    }

    @include md {
      grid-template-columns: 100%;
      row-gap: 24px;
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
      width: 152px;
      height: 152px;
      border-radius: 16px;
      padding: 24px;
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

    &__house {
      @apply tw-text-text01;
    }

    &__house, &__section, &__credit {
      font-size: 14px;
      line-height: 24px;
    }

    &__order, &__action, &__adv {
      border-radius: 8px;
      @apply tw-bg-base00;
    }

    &__order, &__action {
      &:hover {
        @apply tw-bg-secondary-hover;
      }

      &:active {
        @apply tw-bg-secondary-press;
      }
    }

    &__adv {
      padding: 4px 8px;
      display: inline-flex;
      align-items: center;
      gap: 10px;

      span {
        font-size: 14px;
        line-height: 24px;
      }
    }

    &__order {
      padding: 8px 12px;
      @apply tw-text-base tw-text-text00;
    }

    &__action {
      padding: 8px;
      width: 40px;
      height: 40px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    &__price {
      @apply tw-text-text00 tw-text-xl;
    }

    &__credit {
      @apply tw-text-text02;

      span {
        @apply tw-text-text01;
      }
    }

    &__house, &__credit + &__credit {
      margin-top: 4px;
    }

    &__adv, &__btns {
      margin-top: 24px;

      @include lg {
        margin-top: 20px;
      }
    }

    &__btns {
      display: inline-flex;
      gap: 8px;
    }

    &__name, &__price {
      margin-bottom: 8px;
    }
  }
</style>
