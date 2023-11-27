<template>
  <div class="estate-sale-filter">
    <BaseBtnRadio
      class="main-filter-params__input-rooms"
      label="Количество комнат"
      name="rooms"
      theme="gray"
      :btns="roomsBtns"
      :disabled="filter.filterType !== 'flats'"
      :modelValue="roomsCurrent"
      @update:modelValue="updateRooms"
    />
    <div class="estate-sale-filter__types">
      <BaseTabsGroup theme="gray" v-model="filter.filterType">
        <BaseTabsGroupItem theme="gray" name="flats">Квартиры</BaseTabsGroupItem>
        <BaseTabsGroupItem theme="gray" name="towns">Коттеджи и Таунхаусы</BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useEstateSaleList } from '../store';

  const filter = useEstateSaleList();

  const roomsBtns = [
    { label: 'С', value: 'room_factor_studio' },
    { label: '1', value: 'room_factor_one_classic' },
    { label: '2С', value: 'room_factor_two_smart' },
    { label: '2', value: 'room_factor_two_classic' },
    { label: '3С', value: 'room_factor_three_smart' },
    { label: '3', value: 'room_factor_three_classic' },
  ];

  const roomsCurrent = computed(() => {
    if(filter.flatParams.room_factor_studio) return roomsBtns[0];
    else if(filter.flatParams.room_factor_one_classic) return roomsBtns[1];
    else if(filter.flatParams.room_factor_two_smart) return roomsBtns[2];
    else if(filter.flatParams.room_factor_two_classic) return roomsBtns[3];
    else if(filter.flatParams.room_factor_three_smart) return roomsBtns[4];
    else if(filter.flatParams.room_factor_three_classic) return roomsBtns[5];
  });

  function updateRooms(val: typeof roomsBtns[number]): void {
    clearRooms();
    switch (val.value) {
      case 'room_factor_studio':
        filter.flatParams.room_factor_studio = 1; break;
      case 'room_factor_one_classic':
        filter.flatParams.room_factor_one_classic = 1; break;
      case 'room_factor_two_smart':
        filter.flatParams.room_factor_two_smart = 1; break;
      case 'room_factor_two_classic':
        filter.flatParams.room_factor_two_classic = 1; break;
      case 'room_factor_three_smart':
        filter.flatParams.room_factor_three_smart = 1; break;
      case 'room_factor_three_classic':
        filter.flatParams.room_factor_three_classic = 1; break;
    }
  }

  function clearRooms(): void {
    filter.flatParams.room_factor_studio =
    filter.flatParams.room_factor_one_classic =
    filter.flatParams.room_factor_two_smart =
    filter.flatParams.room_factor_two_classic =
    filter.flatParams.room_factor_three_smart =
    filter.flatParams.room_factor_three_classic = null;
  }
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
