<template>
  <div class="bank-prog-items">
    <Item
      class="bank-prog-items__item"
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import { useCreditProgramCalc } from '../store';

  const creditCalc = useCreditProgramCalc();

  const items = computed(() => {
    return creditCalc.creditOffers?.data ?? [];
  });
</script>

<style scoped lang="scss">
.bank-prog-items {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  &__item {
    width: calc(50% - 20px);
    margin: 10px;

    @include lg {
      width: calc(100% - 20px);
    }
  }
}
</style>
