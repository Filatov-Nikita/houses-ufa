<template>
  <div class="stat-items">
    <Item class="stat-items__item" label="Сумма продаж" :value="total" theme="green" />
    <Item class="stat-items__item" label="Количество сделок" :value="getValue('total_paid_count')" theme="gray" />
    <Item class="stat-items__item" label="Количество клиентов" :value="getValue('hauls_count')" theme="gray" />
    <Item class="stat-items__item" label="Количество звявок на бронь" :value="getValue('bookings_paid_count')" theme="gray" />
    <Item class="stat-items__item" label="Количество заявок на ипотеку" :value="getValue('mortgage_claims_paid_count')" theme="gray" />
  </div>
</template>

<script setup lang="ts">
  import { Stat } from '../types';
  import Item from './Item.vue';

  const props = defineProps<{
    data: Stat | null,
  }>();

  const _amount = usePrettyAmount().amount;

  const total = computed(() => {
    if(!props.data) return '-';
    return _amount(props.data.total_paid_cost_in_kopecks / 100);
  });

  function getValue(key: Exclude<keyof Stat, 'agency'>) {
    if(!props.data) return '-';
    return props.data[key];
  }
</script>

<style scoped lang="scss">
  .stat-items {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      margin: 10px;
      width: calc(100% / 12 * 4 - 20px);
    }
  }
</style>
