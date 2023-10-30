<template>
  <Form class="town-filter">
    <BaseRange
      class="town-filter__item"
      theme="white"
      name="area"
      label="Площадь дома, м²"
      input-witdh="55px"
      :max="250"
      :modelValue="square"
      @update:modelValue="updateSquare"

    />
    <BaseRange
      class="town-filter__item"
      theme="white"
      name="square"
      label="Площадь участка, сот"
      input-witdh="55px"
      :max="20"
      :modelValue="squareArea"
      @update:modelValue="updateSquareArea"
    />
    <BaseRange
      class="town-filter__item"
      theme="white"
      name="floors"
      label="Этажность"
      input-witdh="55px"
      :max="4"
      :modelValue="storey"
      @update:modelValue="updateStorey"
    />
    <BaseSelect
      class="town-filter__item"
      theme="white"
      name="status"
      label="Статус"
      v-bind="selectProps(statusOpts, 'label', 'value')"
      :modelValue="currentStatus"
      @update:modelValue="updateStatus"
    />
    <div class="town-filter__item town-filter__item--btn">
      <BaseButton class="town-filter__btn" @click="showMainFilter">
        Показать
      </BaseButton>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import { useForm } from '../composables/useForm';

  type NumOrNull = number | null;

  const formModule = useForm();
  const router = useRouter();
  const route = useRoute();

  const statusOpts = [
    { label: 'Свободно', value: 'for_sale' },
    { label: 'Забронировано', value: 'booked' },
    { label: 'Продано', value: 'sold' },
  ];

  const currentStatus = computed(() => {
    return findOpt(statusOpts, (opt) => opt.value === formModule.form.status);
  });

  function updateStatus(val: typeof statusOpts[number]) {
    formModule.form.status = val.value;
  }

  const square = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [formModule.form.area_min, formModule.form.area_max];
  });

  function updateSquare(val: [NumOrNull, NumOrNull] | null) {
    formModule.form.area_min = val?.[0] ?? null;
    formModule.form.area_max = val?.[1] ?? null;
  }

  function findOpt<T>(list: T[], filter: (opt: T) => boolean): T | null {
    return list.find(filter) ?? null;
  }

  const squareArea = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [formModule.form.area_land_min, formModule.form.area_land_max];
  });

  function updateSquareArea(val: [NumOrNull, NumOrNull] | null) {
    formModule.form.area_land_min = val?.[0] ?? null;
    formModule.form.area_land_max = val?.[1] ?? null;
  }

  const storey = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [formModule.form.number_of_floors_min, formModule.form.number_of_floors_max];
  });

  function updateStorey(val: [NumOrNull, NumOrNull] | null) {
    formModule.form.number_of_floors_min = val?.[0] ?? null;
    formModule.form.number_of_floors_max = val?.[1] ?? null;
  }

  function selectProps<T extends Record<string, unknown>>(options: T[], labelKey: keyof T, valueKey: keyof T) {
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

  function showMainFilter() {
    router.push({
      path: '/main-filter',
      query: Object.assign({
        filterType: 'towns',
        object_id: +route.params.id,
      }, formModule.query.value),
    });
  };
</script>

<style scoped lang="scss">
  .town-filter {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: -10px;

    &__item {
      margin: 10px;
      width: calc(20% - 20px);

      &--btn {
        padding-top: 28px;
      }
    }

    &__btn {
      width: 100%;
    }
  }
</style>
