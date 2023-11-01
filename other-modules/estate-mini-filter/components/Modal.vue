<template>
  <BaseModal
    v-slot="{ hide }"
    v-model="filter.showedModal"
  >
    <BaseModalCard class="mini-filter-card">
      <div class="mini-filter-header">
        <div class="mini-filter-header__title">
          Дополнительные фильтры
        </div>
        <BtnsActionsBase icon="close" @click="hide" />
      </div>
      <div class="add-params">
        <template key="towns" v-if="filter.params.filterType === 'towns'">
          <div class="add-params__columns add-params__section">
            <BaseRange
              class="add-params__column"
              theme="gray"
              :min="1"
              :max="100"
              name='squareArea'
              label='Площадь участка, сот'
              input-witdh="55px"
              :model-value="squareArea"
              @after-manipulate="updateSquareArea"
            />
            <BaseRange
              class="add-params__column"
              theme="gray"
              :min="1"
              :max="500"
              name='square'
              label='Площадь дома, м²'
              input-witdh="55px"
              :model-value="square"
              @after-manipulate="updateSquare"
            />
          </div>
        </template>
        <template key="flats" v-else>
          <BaseBtnRadio
            class="add-params__section"
            label="Комнатность"
            name="rooms"
            theme="gray"
            :btns="roomsBtns"
            :modelValue="roomsCurrent"
            @update:modelValue="updateRooms"
          />
          <div class="add-params__columns add-params__section">
            <BaseRange
              class="add-params__column"
              theme="gray"
              :min="1"
              :max="30"
              name='floors'
              label='Этажность'
              input-witdh="55px"
              :model-value="storey"
              @after-manipulate="updateStorey"
            />
            <BaseRange
              class="add-params__column"
              theme="gray"
              :min="1"
              :max="500"
              name='square'
              label='Площадь, м²'
              input-witdh="55px"
              :model-value="square"
              @after-manipulate="updateSquare"
            />
          </div>
        </template>
        <div class="add-params__section">
          <BaseCheckbox
            name="spec"
            label="Спецпредложение"
            :checkedValue="1"
            :uncheckedValue="0"
            v-model="filter.params.is_in_promotion_only"
          />
        </div>
        <div class="add-params__section">
          <BaseButton class="add-params__btn" @click="hide">
            Применить
          </BaseButton>
        </div>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { useEstateMiniFilter } from '../store';

  type NumOrNull = number | null;

  const filter = useEstateMiniFilter();

  const squareArea = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [filter.params.area_land_min, filter.params.area_land_max];
  });

  function updateSquareArea(val: [NumOrNull, NumOrNull] | null) {
    filter.params.area_land_min = val?.[0] ?? null;
    filter.params.area_land_max = val?.[1] ?? null;
  }

  const square = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [filter.params.area_min, filter.params.area_max];
  });

  function updateSquare(val: [NumOrNull, NumOrNull] | null) {
    filter.params.area_min = val?.[0] ?? null;
    filter.params.area_max = val?.[1] ?? null;
  }

  const storey = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [filter.params.number_of_floors_min, filter.params.number_of_floors_max];
  });

  function updateStorey(val: [NumOrNull, NumOrNull] | null) {
    filter.params.number_of_floors_min = val?.[0] ?? null;
    filter.params.number_of_floors_max = val?.[1] ?? null;
  }

  const roomsBtns = [
    { label: 'С', value: 'room_factor_studio' },
    { label: '1', value: 'room_factor_one_classic' },
    { label: '2С', value: 'room_factor_two_smart' },
    { label: '2', value: 'room_factor_two_classic' },
    { label: '3С', value: 'room_factor_three_smart' },
    { label: '3', value: 'room_factor_three_classic' },
  ];

  const roomsCurrent = computed(() => {
    if(filter.params.room_factor_studio) return roomsBtns[0];
    else if(filter.params.room_factor_one_classic) return roomsBtns[1];
    else if(filter.params.room_factor_two_smart) return roomsBtns[2];
    else if(filter.params.room_factor_two_classic) return roomsBtns[3];
    else if(filter.params.room_factor_three_smart) return roomsBtns[4];
    else if(filter.params.room_factor_three_classic) return roomsBtns[5];
  });

  function updateRooms(val: typeof roomsBtns[number]): void {
    clearRooms();
    switch (val.value) {
      case 'room_factor_studio':
        filter.params.room_factor_studio = 1; break;
      case 'room_factor_one_classic':
        filter.params.room_factor_one_classic = 1; break;
      case 'room_factor_two_smart':
        filter.params.room_factor_two_smart = 1; break;
      case 'room_factor_two_classic':
        filter.params.room_factor_two_classic = 1; break;
      case 'room_factor_three_smart':
        filter.params.room_factor_three_smart = 1; break;
      case 'room_factor_three_classic':
        filter.params.room_factor_three_classic = 1; break;
    }
  }

  function clearRooms(): void {
    filter.params.room_factor_studio =
    filter.params.room_factor_one_classic =
    filter.params.room_factor_two_smart =
    filter.params.room_factor_two_classic =
    filter.params.room_factor_three_smart =
    filter.params.room_factor_three_classic = null;
  }
</script>

<style>
  .mini-filter-card {
    max-width: 484px !important;
    padding: 24px !important;
  }
</style>

<style scoped lang="scss">
  .mini-filter-header {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    &__title {
      flex-grow: 1;
      color: #343434;
      @apply tw-text-xl;
    }
  }

  .add-params {
    &__btn {
      width: 100%;
    }

    &__columns {
      display: flex;
      flex-wrap: wrap;
      margin: -8px;
    }

    &__column {
      width: calc(50% - 16px);
      margin: 8px;
    }

    &__section + &__section {
      margin-top: 32px;
    }

    &__clear {
      margin-bottom: 8px;
      @apply tw-text-sm tw-text-text02;
    }
  }
</style>
