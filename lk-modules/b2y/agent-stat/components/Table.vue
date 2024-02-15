<template>
  <div class="tender-table">
    <div class="tender-table__head">
      <div class="tender-table__th">Место</div>
      <div class="tender-table__th">Агент</div>
      <div class="tender-table__th">Клиенты/Интересы</div>
      <div class="tender-table__th">Кол-во сделок</div>
      <div class="tender-table__th">Сумма оплат, ₽ </div>
    </div>
    <p class="tender-table__empty" v-if="sortedData.length === 0">
      Нет записей
    </p>
    <div class="tender-table__body" v-else>
      <div class="tender-table__row" v-for="(item, index) in sortedData" :key="item.id">
        <div class="tender-table__td tender-table__number">{{ index + 1 }}</div>
        <div class="tender-table__td">{{ item.fullname }}</div>
        <div class="tender-table__td">{{ $formatValue(item.interes) }}</div>
        <div class="tender-table__td">{{ $formatValue(item.count) }}</div>
        <div class="tender-table__td">{{ $amount(item.total) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { AgentStatOne } from '../types';

  const props = defineProps<{
    items: AgentStatOne[],
  }>();

  const data = computed(() => {
    return props.items.map(item => {
      let total = item.bookings_paid_cost_in_kopecks + item.mortgage_claims_paid_cost_in_kopecks;
      total = Math.floor(total / 100);

      return {
        id: item.id,
        fullname: item.agent_full_name,
        interes: item.bookings_new_count + item.mortgage_claims_new_count,
        count: item.bookings_paid_count + item.mortgage_claims_paid_count,
        total,
      }
    });
  });

  const sortedData = computed(() => {
      return [ ...data.value ].sort((a, b) => {
        return b.total - a.total;
      });
    });
</script>

<style scoped lang="scss">
  .tender-table {
    min-width: 900px;

    &__head {
      padding: 16px 24px;
      border-radius: 8px;
      display: grid;
      grid-template-columns: minmax(60px, 8%) minmax(150px, 27%) minmax(110px, 20%) minmax(110px, 20%) minmax(250px, 25%);
      gap: 20px;
      @apply tw-bg-base00 tw-text-text02 tw-text-sm;
    }

    &__empty {
      padding: 30px 16px;
      text-align: center;
    }

    &__row {
      padding: 20px 24px;
      border-radius: 8px;
      width: 100%;
      display: grid;
      grid-template-columns: minmax(60px, 8%) minmax(150px, 27%) minmax(110px, 20%) minmax(110px, 20%) minmax(250px, 25%);
      gap: 20px;

      & + & {
        border-top: 1px;
        border-style: solid;
        @apply tw-border-border00;
      }
    }

    &__td, &__th {
      @include sm {
        @apply tw-text-sm;
      }
    }

    &__number {
      align-self: flex-start;
    }
  }
</style>
