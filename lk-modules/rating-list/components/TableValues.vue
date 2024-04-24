<template>
  <div class="rating-table lk-table">
    <div class="rating-table__head lk-table__head">
      <div class="lk-table__th">Место</div>
      <div class="lk-table__th">{{ currentTab === 'agent' ? 'Агент' : 'Агентство' }}</div>
      <div class="lk-table__th">Клиенты/Интересы</div>
      <div class="lk-table__th">Кол-во сделок</div>
      <div class="lk-table__th">Сумма оплат, ₽ </div>
    </div>
    <p class="lk-table__empty" v-if="items.length === 0">
      Нет записей
    </p>
    <div class="lk-table__body" v-else>
      <div class="lk-table__row rating-table__row" v-for="(item, index) in items" :key="`${currentTab} ${item.id}`">
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
  import type { StatType } from '../composables/useParams';
  import type { RowAgency } from '../types/agency';
  import type { RowAgent } from '../types/agent';

  const props = defineProps<{
    currentTab: StatType,
    agencyItems: RowAgency[],
    agentItems: RowAgent[],
  }>();

  interface Row {
    id: number,
    fullname: string,
    interes: number,
    count: number,
    total: number,
  }

  const items = computed<Row[]>(() => {
    return props.currentTab === 'agency' ?
      props.agencyItems.map(getAgencyRowData) :
      props.agentItems.map(getAgentRowData);
  });


  function getAgencyRowData(row: RowAgency) {
    return {
      id: row.id,
      fullname: row.agency.legal_name,
      interes: row.hauls_count,
      count: row.total_paid_count,
      total: row.total_paid_cost_in_kopecks / 100,
    }
  }

  function getAgentRowData(row: RowAgent) {
    return {
      id: row.id,
      fullname: row.agent.full_name,
      interes: row.hauls_count,
      count: row.total_paid_count,
      total: row.total_paid_cost_in_kopecks / 100,
    }
  }
</script>

<style scoped lang="scss">
  .rating-table {
    min-width: 900px;

    &__head {
      grid-template-columns: minmax(60px, 8%) minmax(150px, 27%) minmax(110px, 20%) minmax(110px, 20%) minmax(250px, 25%);
    }

    &__row {
      grid-template-columns: minmax(60px, 8%) minmax(150px, 27%) minmax(110px, 20%) minmax(110px, 20%) minmax(250px, 25%);
    }
  }
</style>
