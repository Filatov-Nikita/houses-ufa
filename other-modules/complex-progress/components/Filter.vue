<template>
  <div class="progress-filter">
    <div class="progress-filter__params">
      <BaseSelect
        theme="white"
        label=""
        name="progress.month"
        v-bind="selectProps(store.availableMonths, 'месяц')"
        v-model="store.albumParams.month"
        :disabled="store.filterType !== 'album'"
      />
      <BaseSelect
        theme="white"
        label=""
        name="progress.month"
        v-bind="selectProps(store.availableYears, 'год')"
        v-model="store.albumParams.year"
        :disabled="store.filterType !== 'album'"
      />
    </div>
    <div class="tw-grow"></div>
    <BaseTabsGroup v-model="store.filterType">
      <BaseTabsGroupItem name="album">Фото</BaseTabsGroupItem>
      <BaseTabsGroupItem name="camera">Онлайн-камеры</BaseTabsGroupItem>
    </BaseTabsGroup>
  </div>
</template>

<script setup lang="ts">
  import { useComplexProgress } from '../store';

  const store = useComplexProgress();

  function selectProps<T extends { label: string, value: number | string }>(options: T[], emptyLabel: string) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt.label,
        isActive: (opt: T, v: T | null) => opt.value === (v?.value ?? null),
        options: [
          { label: 'Все', value: null },
          ...options,
        ],
      },
      'display-props': {
        getLabel: (v: T | null) => !v || v?.label === 'Все' ? emptyLabel : v.label,
      }
    };
  }

  onUnmounted(() => {
    store.albumParams.month = null;
    store.albumParams.year = null;
    store.filterType = 'album';
  });
</script>

<style scoped lang="scss">
  .progress-filter {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &__params {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  }
</style>
