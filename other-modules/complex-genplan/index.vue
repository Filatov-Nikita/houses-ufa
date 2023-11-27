<template>
  <div class="complex-genplan" v-if="data && genplanImg">
    <img
      class="complex-genplan__img"
      :width="genplanImg.width ?? 'auto'"
      :height="genplanImg.height ?? 'auto'"
      :src="genplanImg.url"
      loading="lazy"
      alt="Картинка ген плана"
    >
    <p class="complex-genplan__caption">
      Визуализация проекта предварительная, возможны изменения
    </p>
    <svg class="complex-genplan__svg" :viewBox="viewBox">
      <path
        v-for="house in data.houses"
        :key="house.id"
        class="complex-genplan__path"
        :d="house.complex_plan_polygon"
        @click="showFilter(house.id)"
        @mouseenter="showPopup($event, house)"
        @mouseleave="closePopup"
      />
    </svg>
    <div
      v-if="showedPopup && pointer"
      class="complex-genplan__popup"
      :style="{ left: pointer.clientX + 'px', top: pointer.clientY + 'px' }"
    >
      {{ currentHouse?.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useComplexGenplan, type House } from './store';
  import { useFilterList } from '@/other-modules/apart-filter/store/filter-list';

  const store = useComplexGenplan();
  const filterList = useFilterList();
  const route = useRoute();

  store.setComplexId(+route.params.id);

  await useLazyAsyncData(() => store.show());

  const data = computed(() => store.data?.data ?? null);
  const genplanImg = computed(() => store.data?.data.master_plan ?? null);

  const viewBox = computed(() => {
    if(!genplanImg.value) return '';
    return `0 0 ${genplanImg.value.width} ${genplanImg.value.height}`
  });

  function scrollToFilter(): void {
    const el = document.querySelector('.apart-filter');
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }

  function setFilterParams(houseId: number) {
    filterList.clearParams();
    filterList.filterParams.house_id = houseId;
  }

  function showFilter(houseId: number) {
    setFilterParams(houseId);
    scrollToFilter();
  }

  const currentHouse = ref<House | null>(null);
  const pointer = ref<MouseEvent | null>(null);
  const showedPopup = ref<boolean>(false);

  function showPopup(e: MouseEvent, house: House) {
    pointer.value = e;
    currentHouse.value = house;
    showedPopup.value = true;
  }

  function closePopup() {
    pointer.value = null;
    currentHouse.value = null;
    showedPopup.value = false;
  }
</script>


<style scoped lang="scss">
  .complex-genplan {
    position: relative;

    &__img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    &__svg {
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    &__path {
      cursor: pointer;
      fill: #DFFDE9;
      fill-opacity: 0.4;
      stroke: #4FBA78;
      stroke-width: 2px;
    }

    &__popup {
      position: fixed;
      border-radius: 8px;
      padding: 8px 16px;
      text-align: center;
      min-width: 150px;
      z-index: 9000;
      @apply tw-bg-white;
    }

    &__caption {
      position: absolute;
      bottom: 24px;
      right: 24px;
      opacity: 0.85;
      z-index: 9100;
      @apply tw-text-xs tw-text-white;

      @include md {
        bottom: 12px;
        right: 12px;
      }

      @include sm {
        left: 0;
        bottom: 0px;
        right: auto;
        font-size: 10px;
        line-height: 1.2;
        padding: 10px;
      }
    }
  }
</style>
