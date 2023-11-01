<template>
  <div>
    <BaseWait :waiting="loading">
      <template #loader>
        <div class="tw-flex tw-flex-wrap -tw-mx-[10px] -tw-my-4">
          <div
            class="tw-w-1/4 tw-py-4 tw-px-[10px]"
            v-for="_i in 12"
          >
            <BaseSkeleton class="tw-h-[400px] tw-rounded-2xl" />
          </div>
        </div>
      </template>
      <div class="tw-text-center tw-text-base tw-py-8" v-if="isEmpty">
        Ничего не найдено. Попробуйте изменить параметры фильтра.
      </div>
      <template v-else>
        <div
          v-if="showedFlats"
          class="filter-estate-list"
        >
          <FlatCard
            class="filter-estate-list__card"
            v-for="flat in flats"
            :key="flat.id"
            :flat="flat"
          />
        </div>
        <div
          v-else-if="mainFilter.showedType === 'towns'"
          class="filter-estate-list"
        >
          <TownCard
            class="filter-estate-list__card"
            v-for="town in towns"
            :key="town.id"
            :town="town"
          />
        </div>
        <PagBtn />
      </template>
    </BaseWait>
  </div>
</template>

<script setup lang="ts">
  import PagBtn from './PagBtn.vue';
  import FlatCard from '@/components/Estate/Cards/Flat.vue';
  import TownCard from '@/components/Estate/Cards/Town.vue';

  import { useMainFilter } from '../store';
  import { useFlatsFilter } from '../store/flats';
  import { useTownsFilter } from '../store/towns';

  const mainFilter = useMainFilter();
  const flatsFilter = useFlatsFilter();
  const townsFilter = useTownsFilter();

  const loading = computed(() => mainFilter.loading);

  const flats = computed(() => flatsFilter.data?.data ?? []);
  const towns = computed(() => townsFilter.data?.data ?? []);
  const isEmpty = computed(() => mainFilter.currentFilter.data?.data?.length === 0);

  const showedFlats = computed(() => {
    return mainFilter.showedType === 'flats' ||
    mainFilter.showedType === 'out-city-flats';
  });
</script>
<style scoped lang="scss">
  .filter-estate-list {
    margin: -16px -10px;
    @apply tw-flex tw-flex-wrap;

    &__card {
      width: calc(100% / 4 - 20px);
      margin: 16px 10px;
    }
  }
</style>
