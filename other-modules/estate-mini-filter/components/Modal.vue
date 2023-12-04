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
          <EstateRoomsFilter
            class="add-params__section"
            theme="gray"
            v-model:room_factor_studio="filter.params.room_factor_studio"
            v-model:room_factor_one_classic="filter.params.room_factor_one_classic"
            v-model:room_factor_two_smart="filter.params.room_factor_two_smart"
            v-model:room_factor_two_classic="filter.params.room_factor_two_classic"
            v-model:room_factor_three_smart="filter.params.room_factor_three_smart"
            v-model:room_factor_three_classic="filter.params.room_factor_three_classic"
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
