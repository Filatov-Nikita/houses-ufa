<template>
  <div class="flat-info">
    <div class="flat-info__name">
      <h1>{{ title }}</h1>
      <p class="flat-info__subtitle">{{ subtitle }}</p>
    </div>
    <div class="flat-info__badges">
      <EstateBadgesBase
        v-if="finishingType"
        class="estate-card-bottom__badges"
        icon="paint_brush_board"
        :label="finishingType"
      />
      <p class="flat-info__price-perm2" v-if="data?.price_per_m2">
        {{ $formatValue(data.price_per_m2, '₽ / м²') }}
      </p>
    </div>
    <div class="params-block">
      <div class="params-block__one">
        <p class="params-block__key">Комнатность</p>
        <p class="params-block__value">{{ data?.number_of_rooms }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Этаж</p>
        <p class="params-block__value">{{ data?.floor_number }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Квартира №</p>
        <p class="params-block__value">{{ data?.number }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Литер</p>
        <p class="params-block__value">{{ data?.house.letter }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Срок ввода</p>
        <p class="params-block__value">
          {{ data?.entrance.completion_quarter }} кв. {{ data?.entrance.completion_year }}
        </p>
      </div>
    </div>
    <div class="flat-info__price-block">
      <p class="flat-info__price" v-if="data?.price_total">
        {{ $amount(data.price_total) }}
      </p>
      <p class="flat-info__credit" v-if="data?.mortgage_monthly_payment">
        В ипотеку от
        <span class="tw-text-primary">
          {{ $formatValue(data.mortgage_monthly_payment, '₽ / мес') }}
        </span>
      </p>
    </div>
    <div class="flat-info__actions">
      <BaseButton class="flat-info__action" @click="showedConsult = true">
        Забронировать
      </BaseButton>
      <BaseButton class="flat-info__action" theme="gray" @click="showedConsult = true">
        Получить консультацию
      </BaseButton>
    </div>
    <ConsultForm v-model:showed="showedConsult" />
  </div>
</template>

<script setup lang="ts">
  import { useFlatCard } from '../store';
  import ConsultForm from '@/other-modules/consult-form/index.vue';

  const showedConsult = ref(false);
  const flatCard = useFlatCard();

  const data = computed(() => flatCard.data?.data);
  const title = computed(() => {
    return `${data.value?.number_of_rooms}-комнатная, ${data.value?.area_total} м²`
  });

  const subtitle = computed(() => {
    return `${data.value?.complex.name}, ${data.value?.complex.location}`;
  });

  const finishingType = computed(() => {
    return data.value?.complex.finishing_type.title;
  });
</script>

<style scoped lang="scss">
  .flat-info {
    padding: 0 40px;

    @include lg {
      padding: 0 24px;
    }

    @include sm {
      padding: 0px;
    }

    &__action {
      width: 100%;

      & + & {
        margin-top: 16px;
      }
    }

    &__badges {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
    }

    &__name {
      margin-bottom: 24px;

      h1 {
        font-size: 32px;
        line-height: 1.25;
        @apply tw-text-text00;

        @include lg {
          @apply tw-text-2xl;
        }
      }
    }

    &__subtitle {
      margin-top: 8px;
      @apply tw-text-text01 tw-text-base;
    }

    &__actions {
      margin-top: 32px;

      @include sm {
        margin-top: 24px;
      }
    }

    &__price-perm2 {
      @apply tw-text-text02 tw-text-base;
    }

    &__price-block {
      margin-top: 32px;
    }

    &__price {
      font-size: 32px;
      line-height: 1.25;

      @include lg {
        @apply tw-text-2xl;
      }
    }

    &__credit {
      margin-top: 8px;
      @apply tw-text-text02 tw-text-base;
    }
  }

  .params-block {
    &__one + &__one {
      margin-top: 16px;
    }

    &__one {
      display: flex;
      @apply tw-text-base;
    }

    &__key, &__value {
      width: 50%;
    }

    &__key {
      @apply tw-text-text00;
    }

    &__value {
      text-align: right;
      @apply tw-text-text02;
    }
  }
</style>
