<template>
  <div class="list-control">
    <div class="list-control__finded">
      Найдено <BasePlural :total="showedCount" :cases="cases" />
    </div>
    <div class="list-control__inputs">
      <BaseSelect
        class="list-control__sort"
        theme="white"
        name="sort"
        v-bind="selectProps(flatSortOptions)"
        :model-value="currentSort"
        @update:modelValue="updateSort"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const order_by_direction = defineModel<'asc' | 'desc'>('order_by_direction');
  const order_by_field = defineModel<'area_total' | 'price_total'>('order_by_field');

  defineProps<{
    showedCount: number,
  }>();

  const cases: [ string, string, string ] = ['предложение', 'предложения', 'предложений'];

  const flatSortOptions = [
    { label: 'Сначала дешевле', order_by_direction: 'asc', order_by_field: 'price_total' },
    { label: 'Сначала дороже', order_by_direction: 'desc', order_by_field: 'price_total' },
    { label: 'Сначала с большей площадью', order_by_direction: 'desc', order_by_field: 'area_total' },
    { label: 'Сначала с меньшей площадью', order_by_direction: 'asc', order_by_field: 'area_total' },
  ] as const;

  function selectProps(options: typeof flatSortOptions) {
    return {
      'drop-down-props': {
        getLabel: (opt: any) => opt.label,
        isActive: (opt: any, v: any) => {
          return opt.order_by_direction === v?.order_by_direction
          && opt.order_by_field === v?.order_by_field;
        },
        options,
      },
      'display-props': {
        getLabel: (v: any) => v?.label || 'сортировка',
      }
    };
  }

  const currentSort = computed(() => {
    return flatSortOptions.find(opt => {
      return opt.order_by_direction === order_by_direction.value
      && opt.order_by_field === order_by_field.value
    }) ?? null;
  });

  function updateSort(opt: typeof flatSortOptions[number] | null) {
    order_by_direction.value = opt?.order_by_direction ?? undefined;
    order_by_field.value = opt?.order_by_field ?? undefined;
  }
</script>

<style scoped lang="scss">
  .list-control {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    @include md {
      gap: 20px;
    }

    &__inputs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      flex-basis: 700px;

      @include md {
        justify-content: flex-start;
      }

      @include sm {
        gap: 8px;
        flex-basis: 100%;
      }
    }

    &__sort {
      height: 64px;
      flex-basis: 350px;

      @include sm {
        flex-basis: 100%;
      }

    }

    &__genplan-btn {
      @include sm {
        flex-basis: 100%;
      }
    }

    &__finded {
      @apply tw-text-text00 tw-text-lg;
    }
  }
</style>
