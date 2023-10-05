<template>
    <div class="floors-list">
      <FlatStatuses />
      <BaseWait :waiting="loading">
        <template #loader>
          <BaseSkeleton class=" tw-w-full tw-h-[400px] tw-rounded-2xl" />
        </template>
        <div class="floors-list__area">
          <div class="floors-list__track">
            <FloorsGrid
              class="floors-list__item"
              v-for="grid in floors"
              :key="grid.id"
              :grid="grid"
            />
          </div>
        </div>
      </BaseWait>
    </div>
</template>

<script setup lang="ts">
  import FloorsGrid from './FloorsGrid.vue';
  import FlatStatuses from './FlatStatuses.vue';
  import type { GridResponse } from '../../store/filter-plan/composables/usePlan';

  interface Props {
    grid: GridResponse | null,
    loading: boolean
  }

  const props = defineProps<Props>();

  const floors = computed(() => props.grid?.data ?? []);
</script>

<style scoped lang="scss">
  .floors-list {
    &__area {
      min-height: 550px;
      padding-bottom: 24px;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }

      &::-webkit-scrollbar-track {
        @apply tw-bg-base01;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        @apply tw-bg-primary;
      }
    }

    &__track {
      display: flex;
      align-items: flex-end;
      column-gap: 48px;
    }

    &__item {
      min-width: 570px;
      flex-shrink: 0;
    }
  }
</style>
