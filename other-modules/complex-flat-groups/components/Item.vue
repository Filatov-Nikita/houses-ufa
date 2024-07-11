<template>
  <EstateCardsBase
    theme="white"
    class="complex-flat-item"
    :params="params"
    :images="images"
    :name="name"
    @click="showFilter"
  >
    <template #actions>
      <BtnsActionsMenu theme="gray" />
    </template>
    <div class="complex-flat-item__params">
      <!-- <div class="complex-flat-item__price">от {{ $amount(flat.price_total_min) }}</div> -->
      <button class="complex-flat-item__btn">
        Показать <BasePlural :total="flat.count" :cases="planCases" />
      </button>
    </div>
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import { Flat } from '../store';
  import { useFilterList } from '@/other-modules/apart-filter/store/filter-list';
  import { useFilterHead } from '@/other-modules/apart-filter/store/filter-head';

  const filter = useFilterList();
  const filterHead = useFilterHead();

  const props = defineProps<{
    flat: Flat,
  }>();

  const params: [] = [];

  const planCases: [ string, string, string ] = [ 'планировку', 'планировки', 'планировок' ];

  const typeRoomCount: Record<string, number> = {
    studio: 1,
    one_classic: 1,
    two_smart: 2,
    two_classic: 2,
    three_smart: 3,
    three_classic: 3,
  };

  const images = computed(() => {
    return props.flat.plan_image_url;
  });

  const name = computed(() => `${typeRoomCount[props.flat.room_factor]}-комнатные квартиры, ${props.flat.area_total} м2`);

  function scrollToFilter(): void {
    const el = document.querySelector('.apart-filter');
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

  function setFilterParams(): void {
    filter.clearParams();
    filterHead.currentTabFilter = 'flats';
    filterHead.currentFlatFilter = 'list';
    filter.filterParams.room_factor_studio = null;
    filter.filterParams.area_total_min = parseInt(props.flat.area_total);
    filter.filterParams.area_total_max = parseInt(props.flat.area_total) + 1;

    const key = `room_factor_${props.flat.room_factor}`;
    if(key in filter.filterParams) {
      (filter.filterParams as any)[key] = 1;
    }
  }

  function showFilter() {
    scrollToFilter();
    setFilterParams();
  }
</script>

<style scoped lang="scss">
  .complex-flat-item {
    cursor: pointer;

    &__params {
      padding-top: 24px;
    }

    &__price {
      margin-bottom: 24px;
      @apply tw-text-text00 tw-text-2xl;
    }

    &__btn {
      width: 100%;
      border-radius: 8px;
      padding: 16px 24px;
      text-align: center;
      transition: background 300ms;
      @apply tw-bg-secondary tw-text-text00 tw-text-base;
    }

    &:hover &__btn {
      @apply tw-bg-primary tw-text-white;
    }
  }
</style>
