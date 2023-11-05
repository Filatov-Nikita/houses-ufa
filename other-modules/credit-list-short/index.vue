<template>
  <div class="credit-list-short">
    <Item
      v-for="item in items"
      :key="item.id"
      class="credit-list-short__item"
      :item="item"
      :img="imgIds[item.id]"
      @click="showProg(item.id)"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from './components/Item.vue';
  import { useCreditPrograms } from '@/stores/credit-programs';
  import { useCreditProgramCalc } from '@/other-modules/credit-program-calc/store';

  const creditStore = useCreditPrograms();
  const creditCalc = useCreditProgramCalc();

  if(creditStore.creditProgs === null) {
    await useLazyAsyncData(() => creditStore.show());
  }

  const allItems = computed(() => creditStore.creditProgs?.data ?? []);
  const items = computed(() => allItems.value.slice(0, 2));

  const imgIds: Record<number, string> = {
    1: '/images/credit-progs/free.png',
    2: '/images/credit-progs/family.png',
  };

  function showProg(id: number) {
    creditCalc.groupId = id;
    creditCalc.show();
  }
</script>

<style scoped lang="scss">
.credit-list-short {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  &__item {
    width: calc(50% - 20px);
    margin: 10px;
  }
}
</style>
