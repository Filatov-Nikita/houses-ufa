<template>
  <BaseSkeleton v-if="pending" class="tw-w-full tw-h-[100px] tw-rounded-2xl" />
  <LkCardFlat v-else-if="flat" :flat="flat" />
</template>

<script setup lang="ts">
  import { useDataFetch } from '@/composables/useDataFetch';
  import { type Flat } from '@/types/estate/flat';

  interface Props {
    id: number
  }

  const props = defineProps<Props>();

  const { data, pending, error } = await useDataFetch<{ data: Flat[] }>('favorites/flats/resolve-ids', {
    method: 'POST',
    body: {
      ids: [ props.id ],
    }
  });

  const flat = computed(() => data.value?.data[0]);
</script>
