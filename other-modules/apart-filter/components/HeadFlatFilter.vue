<template>
  <div class="head-filter">
    <div class="head-filter__controls">
      <div class="head-filter__count">Найдено {{ planCountLabel }}</div>
      <div class="head-filter__btns">
        <BaseTabsGroup theme="gray" v-model="listView">
          <BaseTabsGroupItem theme="gray" name="plan">
            На плане
          </BaseTabsGroupItem>
          <BaseTabsGroupItem theme="gray" name="list">
            Списком
          </BaseTabsGroupItem>
        </BaseTabsGroup>
        <BaseSelect
          class="head-filter__sort"
          theme="gray"
          label=""
          name="sort"
          v-bind="selectProps(sortOptions)"
          :modelValue="currentSort"
          @update:modelValue="updateSort"
        />
      </div>
    </div>
    <BaseTabsTabContent v-model="listView">
      <BaseTabsTabContentItem name="plan" key="plan">
        1
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem name="list" key="list">
        <FlatList :flats="flats" :loading="loadingFlats" />
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>

<script setup lang="ts">
  import { useFilterList } from '../store/filter-list';
  import FlatList from './FlatList.vue';
  import { ref, computed } from 'vue';

  const filterListStore = useFilterList();
  const loadingFlats = computed(() => filterListStore.loadingFlats);
  const flats = computed(() => filterListStore.flats);

  const listView = ref('list');
  const sortOptions = [
    { label: 'Сначала дешевле', order_by_direction: 'asc', order_by_field: 'price_total' },
    { label: 'Сначала дороже', order_by_direction: 'desc', order_by_field: 'price_total' },
    { label: 'Сначала с большей площадью', order_by_direction: 'desc', order_by_field: 'area_total' },
    { label: 'Сначала с меньшей площадью', order_by_direction: 'asc', order_by_field: 'area_total' },
  ];

  function plural(val: number, single: string, plur: string, plur2: string): string {
    val = Math.abs(val);
    if(val % 10 === 0) return plur2;
    if(val % 100 > 10 && val % 100 < 20) return plur2;
    if(val % 10 === 1) return single;
    if(val % 10 > 1 && val % 10 < 5) return plur;
    return plur2;
  }

  const planCountLabel = computed(() => {
    if(typeof flats.value?.meta.total !== 'number') return '-';
    const planLabel = plural(flats.value.meta.total, 'планировка', 'планировки', 'планировок');
    return `${flats.value.meta.total} ${planLabel}`;
  });

  const currentSort = computed(() => {
    return sortOptions.find(opt => {
      return opt.order_by_direction === filterListStore.filterParams.order_by_direction
      && opt.order_by_field === filterListStore.filterParams.order_by_field
    }) ?? null;
  });

  function updateSort(opt: typeof sortOptions[number] | null) {
    filterListStore.filterParams.order_by_direction = opt?.order_by_direction ?? null;
    filterListStore.filterParams.order_by_field = opt?.order_by_field ?? null;
  }

  function selectProps(options: typeof sortOptions) {
    return {
      'drop-down-props': {
        getLabel: (opt: any) => opt.label,
        isActive: (opt: any, v: any) => {
          return opt.order_by_direction === v?.order_by_direction
          && opt.order_by_field === v?.order_by_field;
        },
        options,
      },
      'display-props': {
        getLabel: (v: any) => v?.label || 'сортировка',
      }
    };
  }
</script>

<style scoped lang="scss">
.head-filter {
  @apply tw-rounded-2xl tw-bg-white tw-p-6;

  &__controls {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  &__count {
    flex-basis: 270px;
    @apply tw-text-lg tw-text-text00;
  }

  &__btns {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
  }

  &__sort {
    width: 250px;
  }
}
</style>