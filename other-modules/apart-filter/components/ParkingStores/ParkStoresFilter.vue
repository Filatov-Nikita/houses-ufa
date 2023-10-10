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

  function load() {
    switch(current.value) {
      case 'parking': return showParkings();
      case 'stores': return showStores();
    }
  }

  useAsyncData(() => load());
  watch(current, () => load());
</script>
