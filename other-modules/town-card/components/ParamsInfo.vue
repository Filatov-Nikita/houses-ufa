<template>
  <div class="town-info">
    <div class="town-info__badges" v-if="data?.status">
      <div class="town-info__badge">{{ statusLabel[data?.status] }}</div>
    </div>
    <div class="town-info__name">
      <h1>{{ title }}</h1>
      <p class="town-info__subtitle">{{ subtitle }}</p>
    </div>
    <div class="town-info__badges">
      <EstateBadgesPreFinishing />
    </div>
    <div class="params-block">
      <div class="params-block__one">
        <p class="params-block__key">Тип</p>
        <p class="params-block__value">{{ data?.layout.type.title }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Площадь дома</p>
        <p class="params-block__value">{{ data?.layout.area_cottage }} м²</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Площадь участка</p>
        <p class="params-block__value">{{ data?.area_land }} сот.</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Этажность</p>
        <p class="params-block__value">{{ data?.layout.number_of_floors }}</p>
      </div>
    </div>

    <div class="town-info__actions">
      <BaseButton class="town-info__action">
        Забронировать
      </BaseButton>
      <BaseButton class="town-info__action" theme="gray" @click="showedConsult = true">
        Получить консультацию
      </BaseButton>
    </div>
    <ConsultForm v-model:showed="showedConsult" />
  </div>
</template>

<script setup lang="ts">
  import { useTownCard } from '../store';
  import ConsultForm from '@/other-modules/consult-form/index.vue';

  const statusLabel: Record<string, string> = {
    'for_sale': 'Свободен',
    'sold': 'Продан',
    'booked': 'Забронирован',
  };

  const showedConsult = ref(false);
  const townCard = useTownCard();

  const data = computed(() => townCard.data?.data);
  const title = computed(() => {
    return `${data.value?.layout.name} №${data.value?.number}`;
  });

  const subtitle = computed(() => {
    return `${data.value?.town.name}, ${data.value?.town.location}`;
  });
</script>

<style scoped lang="scss">
  .town-info {
    padding: 0 40px;

    &__badges {
      margin-bottom: 32px;
    }

    &__badge {
      padding: 8px 12px;
      border-radius: 8px;
      @apply tw-bg-base00 tw-text-base tw-text-text00;
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
      }
    }

    &__subtitle {
      margin-top: 8px;
      @apply tw-text-text01 tw-text-base;
    }

    &__actions {
      margin-top: 32px;
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