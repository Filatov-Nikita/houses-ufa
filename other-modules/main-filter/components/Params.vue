<template>
  <Form class="main-filter-params">
    <div class="main-filter-params__inputs">
      <BaseSelect
        class="main-filter-params__input-type"
        name="type"
        label="Тип недвижимости"
        :drop-down-props="{ options: typeOpts }"
        :model-value="currentType"
        @update:modelValue="updateType"
      />
      <BaseSelect
        class="main-filter-params__input-obj"
        name="objects"
        label="Объекты"
        v-bind="objectListProps"
        :model-value="currentObjectOpt"
        @update:modelValue="updateObject"
      />
      <BaseBtnRadio
        class="main-filter-params__input-rooms"
        label="Количество комнат"
        name="rooms"
        theme="gray"
        :disabled="!mainFilter.isFlat"
        :btns="roomsBtns"
        :modelValue="roomsCurrent"
        @update:modelValue="updateRooms"
      />
      <BaseRange
        class="main-filter-params__input-sqr"
        theme="gray"
        :min="1"
        :max="120"
        name='square'
        label='Площадь объекта, м²'
        input-witdh="55px"
        :model-value="square"
        @after-manipulate="updateSquare"
      />
      <BaseRange
        class="main-filter-params__input-sqr-area"
        theme="gray"
        :min="1"
        :max="120"
        name='squareArea'
        label='Площадь участка, сот'
        input-witdh="55px"
        :disabled="!mainFilter.isTown"
        :model-value="squareArea"
        @after-manipulate="updateSquareArea"
      />
      <BaseRange
        class="main-filter-params__input-price"
        theme="gray"
        :min="1"
        :max="120"
        name='price'
        label='стоимость'
        input-witdh="55px"
        :disabled="!mainFilter.isFlat"
        :model-value="price"
        @after-manipulate="updatePrice"
      />
      <BaseRange
        class="main-filter-params__input-floors"
        theme="gray"
        :min="1"
        :max="120"
        name='floors'
        label='Этажность'
        input-witdh="55px"
        :model-value="storey"
        @after-manipulate="updateStorey"
      />
      <BaseSelect
        class="main-filter-params__input-status"
        name="status"
        label="Статус"
        :drop-down-props="{ options: statusOpts }"
        :model-value="currentStatus"
        @update:modelValue="updateStatus"
      />
      <BaseSelect
        class="main-filter-params__input-sale"
        name="sale"
        label="Акция"
        :drop-down-props="{ options: saleOpts }"
        :model-value="currentSale"
        @update:modelValue="updateSale"
      />
      <BaseSelect
        class="main-filter-params__input-remont"
        name="remont"
        label="Вид отделки"
        :disabled="true"
      />
    </div>
    <BaseButton class="main-filter-params__btn" @click="mainFilter.show">
      Показать
    </BaseButton>
  </Form>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { useFilterParams } from '../store/filter-params';
  import { useFlatsFilter } from '../store/flats';
  import { useTownsFilter } from '../store/towns';
  import { useMainFilter } from '../store';

  type NumOrNull = number | null;

  const filterParams = useFilterParams();
  const flatFilter = useFlatsFilter();
  const townFilter = useTownsFilter();
  const mainFilter = useMainFilter();

  const typeOpts = [
    { label: 'Квартиры', value: 'flats' } as const,
    { label: 'Загородные квартиры', value: 'out-city-flats' } as const,
    { label: 'Коттеджи и таунхаусы', value: 'towns' } as const,
  ];

  const currentType = computed(() => {
    return findOpt(typeOpts, (opt) => opt.value === mainFilter.filterType);
  });

  function updateType(val: typeof typeOpts[number]) {
    mainFilter.filterType = val.value;
  }

  const statusOpts = [
    { label: 'Свободно', value: 'for_sale' },
    { label: 'Забронировано', value: 'booked' },
    { label: 'Продано', value: 'sold' },
  ];

  const currentStatus = computed(() => {
    return findOpt(statusOpts, (opt) => opt.value === filterParams.params.status);
  });

  function updateStatus(val: typeof statusOpts[number]) {
    filterParams.params.status = val.value;
  }

  const saleOpts = [
    { label: 'Да', value: 1 },
    { label: 'Нет', value: 0 },
  ];

  const currentSale = computed(() => {
    return findOpt(saleOpts, (opt) => opt.value === filterParams.params.is_in_promotion_only);
  });

  function updateSale(val: typeof saleOpts[number]) {
    filterParams.params.is_in_promotion_only = val.value;
  }

  const objectListProps = computed(() => {
    return {
      'drop-down-props': {
        options: mainFilter.objectList,
        getLabel: (opt: any) => opt.name,
        getValue: (opt: any) => opt.id,
        isActive: (opt: any, val: any) => opt.id === val?.id,
      },
      'display-props': { getLabel: (val: any) => val?.name || 'Не выбрано' },
    };
  });

  const currentObject = computed(() => {
    return filterParams.params.object_id;
  });

  const currentObjectOpt = computed(() => {
    return findOpt(mainFilter.objectList, (opt) => opt.id === currentObject.value);
  });

  function updateObject(val: typeof mainFilter.objectList[number]) {
    filterParams.params.object_id = val.id;
  }

  const price = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [flatFilter.params.price_min, flatFilter.params.price_max];
  });

  function updatePrice(val: [NumOrNull, NumOrNull] | null) {
    flatFilter.params.price_min = val?.[0] ?? null;
    flatFilter.params.price_max = val?.[1] ?? null;
  }

  const square = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [filterParams.params.area_min, filterParams.params.area_max];
  });

  function updateSquare(val: [NumOrNull, NumOrNull] | null) {
    filterParams.params.area_min = val?.[0] ?? null;
    filterParams.params.area_max = val?.[1] ?? null;
  }

  const squareArea = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [townFilter.params.area_land_min, townFilter.params.area_land_max];
  });

  function updateSquareArea(val: [NumOrNull, NumOrNull] | null) {
    townFilter.params.area_land_min = val?.[0] ?? null;
    townFilter.params.area_land_max = val?.[1] ?? null;
  }

  const storey = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [filterParams.params.number_of_floors_min, filterParams.params.number_of_floors_max];
  });

  function updateStorey(val: [NumOrNull, NumOrNull] | null) {
    filterParams.params.number_of_floors_min = val?.[0] ?? null;
    filterParams.params.number_of_floors_max = val?.[1] ?? null;
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
    if(flatFilter.params.room_factor_studio) return roomsBtns[0];
    else if(flatFilter.params.room_factor_one_classic) return roomsBtns[1];
    else if(flatFilter.params.room_factor_two_smart) return roomsBtns[2];
    else if(flatFilter.params.room_factor_two_classic) return roomsBtns[2];
    else if(flatFilter.params.room_factor_three_smart) return roomsBtns[2];
    else if(flatFilter.params.room_factor_three_classic) return roomsBtns[2];
  });

  function updateRooms(val: typeof roomsBtns[number]): void {
    flatFilter.params.room_factor_studio =
    flatFilter.params.room_factor_one_classic =
    flatFilter.params.room_factor_two_smart =
    flatFilter.params.room_factor_two_classic =
    flatFilter.params.room_factor_three_smart =
    flatFilter.params.room_factor_three_classic = null;

    if(val.value === 'room_factor_studio') {
      flatFilter.params.room_factor_studio = 1;
    } else if(val.value === 'room_factor_one_classic') {
      flatFilter.params.room_factor_one_classic = 1;
    } else if(val.value === 'room_factor_two_smart') {
      flatFilter.params.room_factor_two_smart = 1;
    } else if(val.value === 'room_factor_two_classic') {
      flatFilter.params.room_factor_two_classic = 1;
    } else if(val.value === 'room_factor_three_smart') {
      flatFilter.params.room_factor_three_smart = 1;
    } else if(val.value === 'room_factor_three_classic') {
      flatFilter.params.room_factor_three_classic = 1;
    }
  }

  function findOpt<T>(list: T[], filter: (opt: T) => boolean): T | null {
    return list.find(filter) ?? null;
  }
</script>

<style scoped lang="scss">
  .main-filter-params {
    &__inputs {
      display: flex;
      flex-wrap: wrap;
      column-gap: 20px;
      row-gap: 40px;
    }

    &__btn {
      width: 100%;
      margin-top: 32px;
    }

    %inputs {
      flex-grow: 1;
      min-width: 0;
    }

    &__input-type, &__input-obj, &__input-sqr, &__input-sqr-area {
      @extend %inputs;
      flex-basis: 200px;
    }

    &__input-rooms {
      @extend %inputs;
      flex-basis: 280px;
    }

    &__input-price {
      @extend %inputs;
      flex-basis: 340px;
    }

    &__input-floors, &__input-status, &__input-sale, &__input-remont {
      @extend %inputs;
      flex-basis: 200px;
    }
  }
</style>
