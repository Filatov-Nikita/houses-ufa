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
          class="flat-params__grid-item"
          theme="white"
          :min="1"
          :max="120"
          name='square'
          label='Площадь, м2'
          :modelValue="square"
          @change="updateSquare"
          @after-manipulate="updateSquare"
        />
        <BaseRange
          class="flat-params__grid-item"
          theme="white"
          :min="1"
          :max="30"
          name='storey'
          label='Этаж'
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
          name='price'
          label=''
          :step="priceMinMax.step"
          :modelValue="price"
          @change="updatePrice"
          @after-manipulate="updatePrice"
        />
      </div>
      <div>
        <BaseBtnRadio
          label="Количество комнат"
          name="rooms"
          :btns="roomsBtns"
          :modelValue="roomsCurrent"
          @update:modelValue="updateRooms"
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

  const roomsBtns = [
    { label: 'Студия', value: 'number_of_rooms_studio' },
    { label: '1', value: 'number_of_rooms_one' },
    { label: '2', value: 'number_of_rooms_two' },
  ];

  const roomsCurrent = computed(() => {
    if(filterParams.number_of_rooms_studio) return roomsBtns[0];
    else if(filterParams.number_of_rooms_one) return roomsBtns[1];
    else if(filterParams.number_of_rooms_two) return roomsBtns[2];
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

  const priceMinMax = computed<{ min: number, max: number, step: number, mult: number }>(() => {
    if(filterParams.price_type === 'mortgage_monthly_payment') {
      return {
        min: 1000,
        max: 500000,
        step: 1,
        mult: 1,
      }
    }

    return {
      min: 2,
      max: 20,
      step: 0.1,
      mult: 1000 * 1000,
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

  function updateRooms(val: typeof roomsBtns[number]): void {
    filterParams.number_of_rooms_studio =
    filterParams.number_of_rooms_one =
    filterParams.number_of_rooms_two = null;

    if(val.value === 'number_of_rooms_studio') {
      filterParams.number_of_rooms_studio = 1;
    } else if(val.value === 'number_of_rooms_one') {
      filterParams.number_of_rooms_one = 1;
    } else if(val.value === 'number_of_rooms_two') {
      filterParams.number_of_rooms_two = 1;
    }
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
    }

    &__grid-item {
      width: calc(50% - 20px);
      margin: 16px 10px;
    }

    &__form {
      & > div + div {
        margin-top: 32px;
      }
    }
  }
</style>
