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

  const square = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [formModule.form.area_min, formModule.form.area_max];
  });

  function updateSquare(val: [NumOrNull, NumOrNull] | null) {
    formModule.form.area_min = val?.[0] ?? null;
    formModule.form.area_max = val?.[1] ?? null;
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
      width: calc(25% - 20px);

      @include md {
        width: calc(50% - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }

      &--btn {
        padding-top: 28px;

        @include sm {
          padding-top: 12px;
        }
      }
    }

    &__btn {
      width: 100%;
    }
  }
</style>
