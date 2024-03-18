<template>
  <div class="flat-filter-params">
    <div class="flat-filter-params__inputs">
      <BaseSelect
        class="flat-filter-params__input-obj"
        name="objects"
        label="Объекты"
        v-bind="objectListProps"
        :model-value="currentObjectOpt"
        @update:modelValue="updateObject"
      />

      <div class="flat-filter-params__input-rooms">
        <EstateRoomsFilter
          theme="gray"
          :room_factor_studio="room_factor_studio ?? null"
          @update:room_factor_studio="room_factor_studio = $event ?? undefined"

          :room_factor_one_classic="room_factor_one_classic ?? null"
          @update:room_factor_one_classic="room_factor_one_classic = $event ?? undefined"

          :room_factor_two_smart="room_factor_two_smart ?? null"
          @update:room_factor_two_smart="room_factor_two_smart = $event ?? undefined"

          :room_factor_two_classic="room_factor_two_classic ?? null"
          @update:room_factor_two_classic="room_factor_two_classic = $event ?? undefined"

          :room_factor_three_smart="room_factor_three_smart ?? null"
          @update:room_factor_three_smart="room_factor_three_smart = $event ?? undefined"

          :room_factor_three_classic="room_factor_three_classic ?? null"
          @update:room_factor_three_classic="room_factor_three_classic = $event ?? undefined"
        />
      </div>

      <BaseRange
        class="flat-filter-params__input-square"
        theme="gray"
        :min="1"
        :max="500"
        name='square'
        label='Площадь объекта, м²'
        input-witdh="55px"
        :model-value="square"
        @after-manipulate="updateSquare"
      />

      <div class="flat-filter-params__input-price">
        <EstatePriceType
          class="tw-mb-2"
          v-model="price_type"
          theme="gray"
        />
        <BaseRange
          theme="gray"
          :min="priceMinMax.min"
          :max="priceMinMax.max"
          :step="priceMinMax.step"
          name='price'
          label=''
          :input-witdh="priceMinMax.inputWitdh"
          :insert-label="priceMinMax.insertLabel"
          :model-value="price"
          @after-manipulate="updatePrice"
        />
      </div>
      <BaseSelect
        class="flat-filter-params__input-sale"
        name="sale"
        label="Акция"
        v-bind="selectProps(saleOpts, 'label', 'value')"
        :model-value="currentSale"
        @update:modelValue="updateSale"
      />
    </div>
    <BaseButton class="flat-filter-params__btn" @click="emit('show')">
      Показать
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import type { TownItem } from '@/stores/towns';

  type NumOrNull = number | null;

  const complex_id = defineModel<number>('complex_id');
  const is_in_promotion_only = defineModel<number>('is_in_promotion_only');
  const price_min = defineModel<number>('price_min');
  const price_max = defineModel<number>('price_max');
  const price_type = defineModel<'mortgage_initial_fee' | 'mortgage_monthly_payment' | 'price_total'>('price_type');
  const room_factor_one_classic = defineModel<number>('room_factor_one_classic');
  const room_factor_studio = defineModel<number>('room_factor_studio');
  const room_factor_three_classic = defineModel<number>('room_factor_three_classic');
  const room_factor_three_smart = defineModel<number>('room_factor_three_smart');
  const room_factor_two_classic = defineModel<number>('room_factor_two_classic');
  const room_factor_two_smart = defineModel<number>('room_factor_two_smart');
  const area_total_min = defineModel<number>('area_total_min');
  const area_total_max = defineModel<number>('area_total_max');

  const props = defineProps<{
    objects: TownItem[],
  }>();

  const emit = defineEmits<{
    (event: 'show'): void,
  }>();

  const square = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [area_total_min.value ?? null, area_total_max.value ?? null];
  });

  function updateSquare(val: [NumOrNull, NumOrNull] | null) {
    area_total_min.value = val?.[0] ?? undefined;
    area_total_max.value = val?.[1] ?? undefined;
  }

  const saleOpts = [
    { label: 'Да', value: 1 },
    { label: 'Нет', value: 0 },
  ];

  const currentSale = computed(() => {
    return findOpt(saleOpts, (opt) => opt.value === is_in_promotion_only.value);
  });

  function updateSale(val: typeof saleOpts[number]) {
    is_in_promotion_only.value = val.value;
  }

  const objectListProps = computed(() => {
    return selectProps(props.objects, 'name', 'id');
  });

  const currentObjectOpt = computed(() => {
    return findOpt(props.objects, (opt) => opt.id === complex_id.value);
  });

  function updateObject(val: typeof props.objects[number]) {
    complex_id.value = val.id;
  }

  const priceMinMax = computed(() => {
    if(price_type.value === 'mortgage_monthly_payment') {
      return {
        min: 1000,
        max: 500000,
        step: 1,
        mult: 1,
        insertLabel: '₽',
        inputWitdh: '100px'
      }
    } else if(price_type.value === 'mortgage_initial_fee') {
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

  const price = computed<[NumOrNull, NumOrNull] | null>(() => {
    const div = priceMinMax.value.mult;
    const min = typeof price_min.value === 'number' ? price_min.value / div : null;
    const max = typeof price_max.value === 'number' ? price_max.value / div : null;
    return [min, max];
  });

  function updatePrice(val: [NumOrNull, NumOrNull] | null) {
    const mult = priceMinMax.value.mult;
    price_min.value = typeof val?.[0] === 'number' ? val[0] * mult : undefined;
    price_max.value = typeof val?.[1] === 'number' ? val[1] * mult : undefined;
  }

  watch(() => price_type.value, () => {
    price_min.value = undefined;
    price_max.value = undefined;
  });

  function findOpt<T>(list: T[], filter: (opt: T) => boolean): T | null {
    return list.find(filter) ?? null;
  }

  function selectProps<T extends Record<string, any>>(options: T[], labelKey: keyof T, valueKey: keyof T) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt[labelKey],
        isActive: (opt: T, v: T | null) => opt[valueKey] === v?.[valueKey],
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v?.[labelKey] || 'не выбрано',
      }
    };
  }
</script>

<style lang="scss">
  .flat-filter-params__input-obj {
    .base-select-block__input {
      border: 1px solid theme('colors.primary');
    }
  }
</style>

<style scoped lang="scss">
  .flat-filter-params {
    &__inputs {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      column-gap: 20px;
      row-gap: 40px;

      @include md {
        row-gap: 20px;
      }

      @include sm {
        row-gap: 16px;
      }
    }

    &__input-obj, &__input-square {
      flex-basis: 432px;

      @include lg {
        flex-basis: 280px;
      }

      @include md {
        flex-basis: 100%;
      }
    }

    &__input-rooms {
      flex-grow: 1;
      overflow-y: hidden;
      max-width: 100%;
    }

    &__input-sale {
      flex-basis: 280px;

      @include sm {
        flex-basis: 100%;
      }
    }

    &__input-price {
      flex-basis: 350px;

      @include sm {
        max-width: 100%;
        flex-basis: 100%;
      }
    }

    &__btn {
      width: 100%;
      margin-top: 32px;
    }

    .toolbar__group {
      max-width: 100%;
      width: 100%;
      margin-bottom: 24px;
      overflow-y: hidden;
    }
  }
</style>
