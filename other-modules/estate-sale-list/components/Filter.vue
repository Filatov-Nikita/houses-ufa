<template>
  <div class="estate-sale-filter">
    <EstateRoomsFilter
      v-if="filter.filterType === 'flats'"
      class="main-filter-params__input-rooms"
      theme="gray"
      v-model:room_factor_studio="filter.flatParams.room_factor_studio"
      v-model:room_factor_one_classic="filter.flatParams.room_factor_one_classic"
      v-model:room_factor_two_smart="filter.flatParams.room_factor_two_smart"
      v-model:room_factor_two_classic="filter.flatParams.room_factor_two_classic"
      v-model:room_factor_three_smart="filter.flatParams.room_factor_three_smart"
      v-model:room_factor_three_classic="filter.flatParams.room_factor_three_classic"
    />
    <EstateSquareFilter
        v-else
        class="filter-params__input-square"
        :options="squareOpts"
        v-model:from-val="filter.townParams.area_cottage_min"
        v-model:to-val="filter.townParams.area_cottage_max"
      />
    <div class="estate-sale-filter__types">
      <BaseTabsGroup theme="gray" v-model="filter.filterType">
        <BaseTabsGroupItem theme="gray" name="flats">Квартиры</BaseTabsGroupItem>
        <BaseTabsGroupItem theme="gray" name="towns">Коттеджи и таунхаусы</BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useEstateSaleList } from '../store';
  const filter = useEstateSaleList();

  const squareOpts = [
    {
      label: '50-100  м²',
      from: 45,
      to: 100,
    },
    {
      label: '100-150  м²',
      from: 95,
      to: 150,
    },
    {
      label: '150-200  м²',
      from: 145,
      to: 200,
    },
    {
      label: '250-300  м²',
      from: 245,
      to: 300,
    },
    {
      label: '>300 м²',
      from: 300,
    },
  ];
</script>

<style scoped lang="scss">
  .estate-sale-filter {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    align-items: flex-end;

    @include sm {
      display: block;
    }

    &__types {
      @include sm {
        margin-top: 16px;
        width: 100%;
        max-width: 100%;
        overflow-y: hidden;
      }
    }
  }
</style>
