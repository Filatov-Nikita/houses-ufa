<template>
  <div class="parkstore-params">
    <Form class="parkstore-params__form">
      <div>
        <BaseSelect
          theme="white"
          label="Уровень"
          name="liter"
          v-bind="selectProps(filterList.levelsList)"
          :modelValue="currentLevel"
          @update:modelValue="updateLevel"
        />
      </div>
      <div>
        <BaseRange
          theme="white"
          :min="priceMinMax.min"
          :max="priceMinMax.max"
          :inputWitdh="priceMinMax.inputWitdh"
          name='price'
          label='Стоимость, ₽'
          :insertLabel="priceMinMax.insertLabel"
          :step="priceMinMax.step"
          :modelValue="price"
          @change="updatePrice"
          @after-manipulate="updatePrice"
        />
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
  import { useParkStorParams } from '../../store/filter-parkstor-params';
  import { Form } from 'vee-validate';

  type NumOrNull = number | null;

  const filterList = useParkStorParams();
  const { filterParams, clearParams } = filterList;

  const price = computed<[NumOrNull, NumOrNull] | null>(() => {
    const div = priceMinMax.value.mult;
    const min = typeof filterParams.price_min === 'number' ? filterParams.price_min / div : null;
    const max = typeof filterParams.price_max === 'number' ? filterParams.price_max / div : null;
    return [min, max];
  });

  const priceMinMax = computed(() => {
    return {
      min: 100000,
      max: 2000000,
      step: 100,
      mult: 1,
      insertLabel: '₽',
      inputWitdh: '110px'
    }
  });

  function updatePrice(val: [NumOrNull, NumOrNull] | null) {
    const mult = priceMinMax.value.mult;
    filterParams.price_min = typeof val?.[0] === 'number' ? val[0] * mult : null;
    filterParams.price_max = typeof val?.[1] === 'number' ? val[1] * mult : null;
  }

  const currentLevel = computed(() => {
    return filterList.levelsList.find(level => level.id === filterParams.storehouse_id) ?? null;
  });

  function updateLevel(val: { id: number, name: string }) {
    filterParams.storehouse_id = val.id;
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
  };
</script>
<style lang="scss">
  .parkstore-params {
    &__clean-btn {
      width: 100%;
      color: theme('colors.primary') !important;
    }
  }
</style>
<style scoped lang="scss">
  .parkstore-params {
    &__form {
      & > div + div {
        margin-top: 32px;
      }
    }
  }
</style>
