<template>
  <Header @clear-filter="filter.clear">
    <Params
      v-model:layout_type="filter.params.layout_type"
      v-model:town_id="filter.params.town_id"
      v-model:area_land_min="filter.params.area_land_min"
      v-model:area_land_max="filter.params.area_land_max"
      v-model:number_of_floors_min="filter.params.number_of_floors_min"
      v-model:number_of_floors_max="filter.params.number_of_floors_max"
      :objects="townsStore.towns?.data ?? []"
      @show="refresh"
    />
  </Header>
  <Toolbar
    class="tw-my-8"
    :showed-count="showedCount"
    :hideGenplanBtn="genplanTownId === null"
    v-model:order_by_direction="filter.params.order_by_direction"
    v-model:order_by_field="filter.params.order_by_field"
    v-model:showed-genplan="showedGenplan"
  />
  <TownGenplan class="tw-mb-8" v-if="genplanTownId" v-show="showedGenplan" :town-id="genplanTownId" />
  <TownList
    :towns="towns?.data ?? null"
    :loading="loading"
  >
    <template #pagination>
      <LoadMoreBtn
        v-if="!pagination.isLast.value && towns?.meta"
        class="tw-mt-8"
        :total="towns?.meta?.total"
        :loaded="towns?.meta?.to"
        :loading="loadingNext"
        @click="next"
      />
    </template>
  </TownList>
</template>

<script setup lang="ts">
  import useFilter from './composables/useFilter';
  import useList from './composables/useList';
  import Header from './components/Header.vue';
  import Params from './components/Params.vue';
  import TownList from './components/TownList.vue';
  import Toolbar from './components/Toolbar.vue';
  import TownGenplan from '@/other-modules/town-genplan/index.vue';
  import { useTownsStore } from '@/stores/towns';

  const townsStore = useTownsStore();

  const filter = useFilter({
    town_id: townsStore.towns?.data?.[0].id,
  });

  const showedGenplan = ref(true);
  const genplanTownId = ref<number | null>(filter.params.town_id ?? null);

  const { towns, loading, pagination, loadingNext, showedCount, show, next } = await useList(filter);

  function scrollToView() {
    document.querySelector('.list-control')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  async function refresh() {
    genplanTownId.value = filter.params.town_id ?? null;
    scrollToView();
    await show();
  }
</script>
