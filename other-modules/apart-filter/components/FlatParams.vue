<template>
  <div class="flat-params">
    <Form class="flat-params__form">
      <div class="flat-params__grid">
        <BaseSelect
          class="flat-params__grid-item"
          theme="white"
          label="Литер"
          name="liter"
          v-bind="selectProps(housesOpts)"
          :modelValue="currentHouse"
          @update:modelValue="updateHouse"
        />
        <BaseSelect
          class="flat-params__grid-item"
          theme="white"
          label="Подъезд"
          name="section"
          :disabled="currentHouse === null"
          v-bind="selectProps(entrancesOpts)"
          :modelValue="currentEntrance"
          @update:modelValue="updateEntrance"
        />
        <BaseRange
          class="flat-params__grid-item flat-params__square"
          theme="white"
          :min="1"
          :max="120"
          name='square'
          label='Площадь, м2'
          input-witdh="55px"
          :modelValue="square"
          @change="updateSquare"
          @after-manipulate="updateSquare"
        />
        <BaseRange
          class="flat-params__grid-item flat-params__storey"
          theme="white"
          :min="1"
          :max="30"
          name='storey'
          label='Этаж'
          input-witdh="50px"
          :modelValue="storey"
          @change="updateStorey"
          @after-manipulate="updateStorey"
        />
      </div>
      <div>
        <PriceType
          class="tw-mb-2"
          v-model="filterParams.price_type"
        />
        <BaseRange
          theme="white"
          :min="priceMinMax.min"
          :max="priceMinMax.max"
          :inputWitdh="priceMinMax.inputWitdh"
          name='price'
          label=''
          :insertLabel="priceMinMax.insertLabel"
          :step="priceMinMax.step"
          :modelValue="price"
          @change="updatePrice"
          @after-manipulate="updatePrice"
        />
      </div>
      <div>
        <EstateRoomsFilter
          v-model:room_factor_studio="filterParams.room_factor_studio"
          v-model:room_factor_one_classic="filterParams.room_factor_one_classic"
          v-model:room_factor_two_smart="filterParams.room_factor_two_smart"
          v-model:room_factor_two_classic="filterParams.room_factor_two_classic"
          v-model:room_factor_three_smart="filterParams.room_factor_three_smart"
          v-model:room_factor_three_classic="filterParams.room_factor_three_classic"
        />
      </div>
      <div class="tw-space-y-2">
        <div>
          <BaseCheckbox
            name="thisYear"
            label="Сдача в этом году"
            :checkedValue="1"
            :uncheckedValue="0"
            v-model="filterParams.is_this_year_completion"
          />
        </div>
        <div>
          <BaseCheckbox
            name="spec"
            label="Спецпредложение"
            :checkedValue="1"
            :uncheckedValue="0"
            v-model="filterParams.is_in_promotion_only"
          />
        </div>
      </div>
      <div>
        <BaseButton class="flat-params__clean-btn" theme="white" @click="clearParams">
          Очистить фильтры
        </BaseButton>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
  import { useFilterList } from '../store/filter-list';
  import type { House, Entrance } from '@/stores/pages/complex-one';
  import PriceType from './PriceType.vue';
  import { Form } from 'vee-validate';

  type NumOrNull = number | null;

  const filterList = useFilterList();
  const { filterParams, clearParams } = filterList;

  const housesOpts = computed(() => filterList.housesList ?? []);
  const entrancesOpts = computed(() => filterList.entrancesHouseList ?? []);

  const currentHouse = computed(() => {
    return housesOpts.value.find(house => house.id === filterParams.house_id) ?? null;
  });

  const currentEntrance = computed(() => {
    return entrancesOpts.value.find(entr => entr.id === filterParams.entrance_id) ?? null;
  });

  const square = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [filterParams.area_total_min, filterParams.area_total_max];
  });

  const storey = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [filterParams.floor_number_min, filterParams.floor_number_max];
  });

  const price = computed<[NumOrNull, NumOrNull] | null>(() => {
    const div = priceMinMax.value.mult;
    const min = typeof filterParams.price_min === 'number' ? filterParams.price_min / div : null;
    const max = typeof filterParams.price_max === 'number' ? filterParams.price_max / div : null;
    return [min, max];
  });

  const priceMinMax = computed(() => {
    if(filterParams.price_type === 'mortgage_monthly_payment') {
      return {
        min: 1000,
        max: 500000,
        step: 1,
        mult: 1,
        insertLabel: '₽',
        inputWitdh: '100px'
      }
    } else if(filterParams.price_type === 'mortgage_initial_fee') {
      return {
        min: 500000,
        max: 10000000,
        step: 1,
        mult: 1,
        insertLabel: '₽',
        inputWitdh: '120px'
      }
    }

    return {
      min: 2,
      max: 20,
      step: 0.1,
      mult: 1000 * 1000,
      insertLabel: 'млн ₽',
      inputWitdh: '110px'
    }
  });

  function updateHouse(val: House) {
    filterParams.house_id = val.id;
  }

  function updateEntrance(val: Entrance) {
    filterParams.entrance_id = val.id;
  }

  function updateSquare(val: [NumOrNull, NumOrNull] | null) {
    filterParams.area_total_min = val?.[0] ?? null;
    filterParams.area_total_max = val?.[1] ?? null;
  }

  function updateStorey(val: [NumOrNull, NumOrNull] | null) {
    filterParams.floor_number_min = val?.[0] ?? null;
    filterParams.floor_number_max = val?.[1] ?? null;
  }

  function updatePrice(val: [NumOrNull, NumOrNull] | null) {
    const mult = priceMinMax.value.mult;
    filterParams.price_min = typeof val?.[0] === 'number' ? val[0] * mult : null;
    filterParams.price_max = typeof val?.[1] === 'number' ? val[1] * mult : null;
  }

  function selectProps<T extends { name: string, id: number }>(options: T[]) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt.name,
        isActive: (opt: T, v: T | null) => opt.id === v?.id,
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v?.name || 'не выбрано',
      }
    };
  }

  watch(() => filterParams.price_type, () => {
    filterParams.price_min = null;
    filterParams.price_max = null;
  });
</script>
<style lang="scss">
  .flat-params {
    &__clean-btn {
      width: 100%;
      color: theme('colors.primary') !important;
    }
  }
</style>
<style scoped lang="scss">
  .flat-params {
    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -16px -10px;

      @include md {
        margin: -12px -10px;
      }

      @include sm {
        margin: -8px -10px;
      }
    }

    &__grid-item {
      width: calc(50% - 20px);
      margin: 16px 10px;

      @include md {
        margin: 12px 10px;
      }

      @include sm {
        margin: 8px 10px;
      }
    }

    &__square, &__storey {
      @include lg {
        width: calc(100% - 20px);
      }
    }

    &__form {
      & > div + div {
        margin-top: 32px;

        @include md {
          margin-top: 24px;
        }

        @include sm {
          margin-top: 16px;
        }
      }
    }
  }
</style>
