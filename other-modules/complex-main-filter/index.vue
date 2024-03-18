<template>
  <Header @clear-filter="filter.clear">
    <Params
      v-model:complex_id="filter.params.complex_id"
      v-model:area_total_min="filter.params.area_total_min"
      v-model:area_total_max="filter.params.area_total_max"
      v-model:price_min="filter.params.price_min"
      v-model:price_max="filter.params.price_max"
      v-model:price_type="filter.params.price_type"
      v-model:is_in_promotion_only="filter.params.is_in_promotion_only"
      v-model:room_factor_one_classic="filter.params.room_factor_one_classic"
      v-model:room_factor_studio="filter.params.room_factor_studio"
      v-model:room_factor_three_classic="filter.params.room_factor_three_classic"
      v-model:room_factor_three_smart="filter.params.room_factor_three_smart"
      v-model:room_factor_two_classic="filter.params.room_factor_two_classic"
      v-model:room_factor_two_smart="filter.params.room_factor_two_smart"
      :objects="complexStore.complexes?.data ?? []"
      @show="refresh"
    />
  </Header>
  <Toolbar
    class="tw-my-8"
    :showed-count="showedCount"
    v-model:order_by_direction="filter.params.order_by_direction"
    v-model:order_by_field="filter.params.order_by_field"
  />
  <FlatList
    :flats="flats?.data ?? null"
    :loading="loading"
  >
    <template #pagination>
      <LoadMoreBtn
        v-if="!pagination.isLast.value && flats?.meta"
        class="tw-mt-8"
        :total="flats?.meta?.total"
        :loaded="flats?.meta?.to"
        :loading="loadingNext"
        @click="next"
      />
    </template>
  </FlatList>
</template>

<script setup lang="ts">
  import useFilter from './composables/useFilter';
  import useList from './composables/useList';
  import Header from './components/Header.vue';
  import Params from './components/Params.vue';
  import FlatList from './components/FlatList.vue';
  import Toolbar from './components/Toolbar.vue';
  import { useComplexesStore } from '@/stores/complexes';

  const complexStore = useComplexesStore();

  const filter = useFilter({
    complex_id: complexStore.complexes?.data?.[0].id,
    price_type: 'price_total',
  });

  const { flats, loading, pagination, loadingNext, showedCount, show, next } = await useList(filter);

  function scrollToView() {
    document.querySelector('.list-control')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  async function refresh() {
    scrollToView();
    await show();
  }
</script>
