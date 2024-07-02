<template>
  <div class="order-day-list">
    <div class="order-day-list__label">Выберите день</div>
    <BaseSkeleton v-if="loading" class="tw-h-[200px] tw-rounded-2xl"></BaseSkeleton>
    <div v-else class="order-day-list__items">
      <button
        type="button"
        class="order-day-list__item day-item"
        v-for="day in labels"
        :class="{ 'day-item--active': day.value === model }"
        @click="model = day.value"
      >
        <div class="day-item__day">{{ day.dayWithMonth }}</div>
        <div class="day-item__weekday">{{ day.weekDay }}</div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { OrderDay } from '../store/timeSlots';

  const props = defineProps<{
    orderDays: OrderDay[] | null,
    loading: boolean,
  }>();

  const model = defineModel<string | null>();

  const labels = computed(() => {
    if(!props.orderDays) return [];
    return props.orderDays.map(day => getLabel(day.date));
  });

  function getLabel(day: string) {
    const [
      weekDay,
      dayWithMonth,
    ] = new Date(day).toLocaleString('ru-RU', {
      day: 'numeric',
      weekday: 'short',
      month: 'long',
    }).split(', ');

    return {
      value: day,
      dayWithMonth,
      weekDay,
    }
  }
</script>

<style scoped lang="scss">
  .order-day-list {
    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      margin: -4px;
    }
  }

  .day-item {
    text-align: center;
    border-radius: 8px;
    padding: 12px;
    margin: 4px;
    width: calc(100% / 6 - 8px);
    @apply tw-bg-base00;

    @include md {
      width: calc(100% / 4 - 8px);
    }

    @include sm {
      width: calc(50% - 8px);
    }

    &--active {
      @apply tw-bg-primary;
    }

    &--active &__day, &--active &__weekday {
      @apply tw-text-white;
    }

    &__day {
      @apply tw-text-text00 tw-text-base;
    }

    &__weekday {
      @apply tw-text-text02 tw-text-sm;
    }
  }
</style>
