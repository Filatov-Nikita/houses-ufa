<template>
  <div class="tender-table lk-table">
    <div class="tender-table__head lk-table__head">
      <div class="lk-table__th">Место</div>
      <div class="lk-table__th">Агент</div>
      <div class="lk-table__th">Клиенты/Интересы</div>
      <div class="lk-table__th">Кол-во сделок</div>
      <div class="lk-table__th">Сумма оплат, ₽ </div>
    </div>
    <p class="lk-table__empty" v-if="sortedData.length === 0">
      Нет записей
    </p>
    <div class="lk-table__body" v-else>
      <div class="lk-table__row tender-table__row" v-for="(item, index) in sortedData" :key="item.id">
        <div class="lk-table__td lk-table__number">{{ index + 1 }}</div>
        <div class="lk-table__td">{{ item.fullname }}</div>
        <div class="lk-table__td">{{ $formatValue(item.interes) }}</div>
        <div class="lk-table__td">{{ $formatValue(item.count) }}</div>
        <div class="lk-table__td">{{ $amount(item.total) }}</div>
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
      return {
        id: item.id,
        fullname: item.agent.full_name,
        interes: item.hauls_count,
        count: item.total_paid_count,
        total: item.total_paid_cost_in_kopecks / 100,
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
      grid-template-columns: minmax(60px, 8%) minmax(150px, 27%) minmax(110px, 20%) minmax(110px, 20%) minmax(250px, 25%);
    }

    &__row {
      grid-template-columns: minmax(60px, 8%) minmax(150px, 27%) minmax(110px, 20%) minmax(110px, 20%) minmax(250px, 25%);
    }
  }
</style>
