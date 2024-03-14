<template>
  <div class="list-control">
    <div class="list-control__finded">
      Найдено <BasePlural :total="showedCount" :cases="cases" />
    </div>
    <BaseButton v-if="!hideGenplanBtn" theme="white" @click="showedGenplan = !showedGenplan">
      <div class="tw-flex tw-gap-2 tw-items-center">
        <BaseIcon class="tw-w-6 tw-h-6" color="#4FBA78" :name="showedGenplan ? 'eye-closed' : 'eye'" />
        <span>
          {{ showedGenplan ? 'Скрыть генлан' : 'Показать генлан' }}
        </span>
      </div>
    </BaseButton>
    <BaseSelect
      class="list-control__sort"
      theme="white"
      name="sort"
      label=""
      v-bind="selectProps(townSortOptions)"
      :model-value="currentSort"
      @update:modelValue="updateSort"
    />
  </div>
</template>

<script setup lang="ts">
  const order_by_direction = defineModel<'asc' | 'desc'>('order_by_direction');
  const order_by_field = defineModel<'area_cottage'>('order_by_field');
  const showedGenplan = defineModel<boolean>('showedGenplan');

  defineProps<{
    showedCount: number,
    hideGenplanBtn?: boolean,
  }>();

  const cases: [ string, string, string ] = ['предложение', 'предложения', 'предложений'];

  const townSortOptions = [
    { label: 'Сначала с большей площадью', order_by_direction: 'desc', order_by_field: 'area_cottage' },
    { label: 'Сначала с меньшей площадью', order_by_direction: 'asc', order_by_field: 'area_cottage' },
  ] as const;

  function selectProps(options: typeof townSortOptions) {
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
    return townSortOptions.find(opt => {
      return opt.order_by_direction === order_by_direction.value
      && opt.order_by_field === order_by_field.value
    }) ?? null;
  });

  function updateSort(opt: typeof townSortOptions[number] | null) {
    order_by_direction.value = opt?.order_by_direction ?? undefined;
    order_by_field.value = opt?.order_by_field ?? undefined;
  }
</script>
