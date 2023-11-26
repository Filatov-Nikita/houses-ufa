<template>
  <div class="credit-list">
    <template v-for="items in grid">
      <Item
        class="credit-list__item credit-list__item--full"
        :item="items[0]"
        :img="imgIds[items[0].id]"
        @click="changeProg(items[0].id)"
      />
      <Item
        v-if="items[1]"
        class="credit-list__item credit-list__item--half"
        :item="items[1]"
        :img="imgIds[items[1].id]"
        short
        @click="changeProg(items[1].id)"
      />
      <Item
        v-if="items[2]"
        class="credit-list__item credit-list__item--half"
        :item="items[2]"
        :img="imgIds[items[2].id]"
        short
        @click="changeProg(items[2].id)"
      />
    </template>
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

  const items = computed(() => creditStore.creditProgs?.data ?? []);

  const imgIds: Record<number, string> = {
    1: '/images/credit-progs/free.png',
    2: '/images/credit-progs/family.png',
  };

  const grid = computed(() => {
    const res = [];
    let count = 0;
    while(count < items.value.length) {
      const chunk = [];
      for(let i = count; i <= count + 3; i++) {
        if(items.value[i] !== undefined) {
          chunk.push(items.value[i]);
        }
      }
      res.push(chunk);
      count+= 3;
    }

    return res;
  });

  function scrollToCalc() {
    const el = document.querySelector('.credit-calc');
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

  function changeProg(id: number) {
    creditCalc.groupId = id;
    creditCalc.show();
    scrollToCalc();
  }
</script>

<style scoped lang="scss">
.credit-list {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  &__item {
    &--full {
      width: calc(100% - 20px);
      margin: 10px;
    }

    &--half {
      width: calc(50% - 20px);
      margin: 10px;

      @include md {
        width: calc(100% - 20px);
      }
    }
  }
}
</style>
