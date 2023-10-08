<template>
  <LayoutFilter>
    <template #left>
      <Params />
    </template>
    <div>
      <HeadFilter />
    </div>
  </LayoutFilter>
</template>

<script setup lang="ts">
  import LayoutFilter from '../LayoutFilter.vue';
  import Params from './Params.vue';
  import HeadFilter from './HeadFilter.vue';
  import { useFilterStorehouse } from '../../store/filter-storehouse';
  import { useFilterParking } from '../../store/filter-parking';
  import { useFilterHead } from '../../store/filter-head';

  const { showStores } = useFilterStorehouse();
  const { showParkings } = useFilterParking();
  const filterHeadStore = useFilterHead();

  const current = computed(() => filterHeadStore.currentParkStoreFilter);

  watch(current, (val) => {
    switch(val) {
      case 'parking': showParkings(); break;
      case 'stores': showStores(); break;
    }
  }, { immediate: true });
</script>
