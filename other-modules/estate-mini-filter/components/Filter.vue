<template>
  <div class="mini-filter-params">
    <BaseSelect
      class="mini-filter-params__item"
      theme="white"
      name="type"
      label="Тип недвижимости"
      v-bind="selectProps(typeOpts, 'label', 'value')"
      :model-value="currentType"
      @update:modelValue="updateType"
    />
    <BaseRangeSingle
      class="mini-filter-params__item"
      theme="white"
      :min="0"
      :max="20000000"
      name='priceMin'
      label='Стоимость от'
      :disabled="filter.params.filterType === 'towns'"
      :model-value="priceMin"
      @change="updatePriceMin"
      @after-manipulate="updatePriceMin"
    />
    <div class="mini-filter-params__item">
      <BaseButton
        class="mini-filter-params__btn"
        theme="white"
        @click="showModal"
      >
        Дополнительные фильтры
      </BaseButton>
    </div>
    <div class="mini-filter-params__item">
      <BaseButton
        class="mini-filter-params__btn"
        @click="showMainFilter"
      >
        Показать предложения
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useEstateMiniFilter } from '../store';

  type NumOrNull = number | null;

  const filter = useEstateMiniFilter();
  const router = useRouter();

  const typeOpts = [
    { label: 'Квартиры', value: 'flats' } as const,
    { label: 'Загородные квартиры', value: 'out-city-flats' } as const,
    { label: 'Коттеджи и таунхаусы', value: 'towns' } as const,
  ];

  const currentType = computed(() => {
    return findOpt(typeOpts, (opt) => opt.value === filter.params.filterType);
  });

  function updateType(val: typeof typeOpts[number]) {
    filter.params.filterType = val.value;
  }

  const priceMin = computed(() => {
    return filter.params.price_min;
  });

  function updatePriceMin(val: NumOrNull) {
    filter.params.price_min = val;
  }

  function findOpt<T>(list: T[], filter: (opt: T) => boolean): T | null {
    return list.find(filter) ?? null;
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

  function showModal() {
    filter.showedModal = true;
  }

  function showMainFilter() {
    router.push({
      path: '/main-filter',
      query: { ...filter.query },
    })
  }
</script>

<style scoped lang="scss">
  .mini-filter-params {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: -10px;

    &__item {
      width: calc(25% - 20px);
      margin: 10px;

      @include lg {
        width: calc(50% - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__btn {
      width: 100%;
      margin-top: 28px;

      @include lg {
        margin-top: 0px;
      }
    }
  }
</style>
