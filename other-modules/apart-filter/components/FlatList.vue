<template>
  <BaseWait :waiting="loading">
    <template #loader>
      <div class="tw-space-y-8 tw-py-8">
        <BaseSkeleton
          class="tw-w-full tw-min-h-[150px] tw-rounded-2xl"
          v-for="_i in 3"
        />
      </div>
    </template>
    <div class="tw-py-10 tw-text-center" v-if="flats.length === 0">
      Ничего не найдено, измените значения фильтров.
    </div>
    <template v-else>
      <div class="flat-list">
        <FlatListItem
          class="flat-list__divider"
          v-for="flat in flats"
          :key="flat.id"
          :flat="flat"
        />
      </div>
      <div class="tw-pt-4">
        <ListPagination v-if="meta" class="tw-justify-center" :meta="meta" />
      </div>
    </template>
  </BaseWait>
</template>

<script setup lang="ts">
  import FlatListItem from './FlatListItem.vue';
  import ListPagination from './ListPagination.vue';
  import type { FlatsResponse } from '../store/filter-list/composables/useFlats';

  interface Props {
    flats: FlatsResponse | null,
    loading: boolean,
  }

  const props = defineProps<Props>();

  const flats = computed(() => props.flats?.data ?? []);
  const meta = computed(() => props.flats?.meta ?? null);
</script>

<style scoped lang="scss">
  .flat-list {
    height: 500px;
    overflow: auto;
    padding-right: 24px;
    margin-right: -24px;

    &__divider {
      padding-top: 32px;
      padding-bottom: 32px;

      & + & {
        border-top: 1px solid theme('colors.border00');
      }
    }
  }
</style>
