<template>
  <BaseSkeleton v-if="pending" class="tw-w-full tw-h-[100px] tw-rounded-2xl" />
  <LkCardTown v-else-if="town" :town="town" />
</template>

<script setup lang="ts">
  import { useDataFetch } from '@/composables/useDataFetch';
  import { type Town } from '@/types/estate/town';

  interface Props {
    id: number
  }

  const props = defineProps<Props>();

  const { data, pending, error } = await useDataFetch<{ data: Town[] }>('favorites/estates/resolve-ids', {
    method: 'POST',
    body: {
      ids: [ props.id ],
    }
  });

  const town = computed(() => data.value?.data[0]);
</script>
