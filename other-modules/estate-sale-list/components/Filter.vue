<template>
  <div class="estate-sale-filter">
    <EstateRoomsFilter
      class="main-filter-params__input-rooms"
      theme="gray"
      :disabled="filter.filterType !== 'flats'"
      v-model:room_factor_studio="filter.flatParams.room_factor_studio"
      v-model:room_factor_one_classic="filter.flatParams.room_factor_one_classic"
      v-model:room_factor_two_smart="filter.flatParams.room_factor_two_smart"
      v-model:room_factor_two_classic="filter.flatParams.room_factor_two_classic"
      v-model:room_factor_three_smart="filter.flatParams.room_factor_three_smart"
      v-model:room_factor_three_classic="filter.flatParams.room_factor_three_classic"
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
