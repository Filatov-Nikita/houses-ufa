<template>
  <div class="filter-params">
    <BaseTabsGroup class="toolbar__group" :model-value="_layout_type" @update:model-value="setLayout($event as any)">
      <BaseTabsGroupItem class="toolbar__tab" name="all" theme="gray">
        Все
      </BaseTabsGroupItem>
      <BaseTabsGroupItem class="toolbar__tab" name="cottage" theme="gray">
        Коттеджи
      </BaseTabsGroupItem>
      <BaseTabsGroupItem class="toolbar__tab" name="townhouse" theme="gray">
        Таунхаусы
      </BaseTabsGroupItem>
    </BaseTabsGroup>
    <div class="filter-params__inputs">
      <BaseSelect
        class="filter-params__input-obj"
        name="objects"
        label="Посёлки"
        v-bind="objectListProps"
        :model-value="currentObjectOpt"
        @update:modelValue="updateObject"
      />
      <EstateSquareFilter
        class="filter-params__input-square"
        :options="squareOpts"
        v-model:from-val="area_calc_min"
        v-model:to-val="area_calc_max"
      />
      <BaseRange
        class="filter-params__input-floors"
        theme="gray"
        :min="1"
        :max="4"
        name='floors'
        label='Этажность'
        input-witdh="55px"
        :model-value="storey"
        @after-manipulate="updateStorey"
      />
    </div>
    <BaseButton class="filter-params__btn" @click="emit('show')">
      Показать
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import type { TownItem } from '@/stores/towns';

  type NumOrNull = number | null;

  const layout_type = defineModel<'cottage' | 'townhouse'>('layout_type');
  const number_of_floors_min = defineModel<number>('number_of_floors_min');
  const number_of_floors_max = defineModel<number>('number_of_floors_max');
  const area_calc_min = defineModel<number>('area_calc_min');
  const area_calc_max = defineModel<number>('area_calc_max');
  const town_id = defineModel<number>('town_id');

  const props = defineProps<{
    objects: TownItem[],
  }>();

  const emit = defineEmits<{
    (event: 'show'): void,
  }>();

  const squareOpts = [
    {
      label: '50-100  м²',
      from: 45,
      to: 100,
    },
    {
      label: '100-150  м²',
      from: 95,
      to: 150,
    },
    {
      label: '150-200  м²',
      from: 145,
      to: 200,
    },
    {
      label: '250-300  м²',
      from: 245,
      to: 300,
    },
    {
      label: '>300 м²',
      from: 300,
    },
  ];

  const storey = computed<[NumOrNull, NumOrNull] | null>(() => {
    return [number_of_floors_min.value ?? null, number_of_floors_max.value ?? null];
  });

  function updateStorey(val: [NumOrNull, NumOrNull] | null) {
    number_of_floors_min.value = val?.[0] ?? undefined;
    number_of_floors_max.value = val?.[1] ?? undefined;
  }

  const _layout_type = computed(() => layout_type.value === undefined ? 'all' : layout_type.value);

  function setLayout(val: 'all' | 'cottage' | 'townhouse') {
    if(val === 'all') {
      layout_type.value = undefined;
    } else {
      layout_type.value = val;
    }
  }

  const objectListProps = computed(() => {
    return selectProps(props.objects, 'name', 'id');
  });

  const currentObjectOpt = computed(() => {
    return findOpt(props.objects, (opt) => opt.id === town_id.value);
  });

  function updateObject(val: typeof props.objects[number]) {
    town_id.value = val.id;
  }

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
  .filter-params__input-obj {
    .base-select-block__input {
      border: 1px solid theme('colors.primary');
    }
  }
</style>

<style scoped lang="scss">
  .filter-params {
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

    &__input-obj, &__input-floors {
      flex-basis: 320px;

      @include lg {
        flex-basis: 280px;
      }

      @include md {
        flex-basis: 100%;
      }
    }

    &__input-square {
      flex-grow: 1;
      flex-basis: 600px;

      @include md {
        order: -1;
        min-width: 0px;
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
