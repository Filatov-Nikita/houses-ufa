<template>
  <BaseSkeleton v-if="pending" class="tw-w-full tw-h-[100px] tw-rounded-2xl" />
  <LkCardPlace v-else-if="item" :item="item" :type="type" />
</template>

<script setup lang="ts">
  import { useDataFetch } from '@/composables/useDataFetch';
  import { type PlaceOne } from '@/types/estate/place';

  interface Props {
    id: number,
    type: 'parking' | 'place',
  }

  const props = defineProps<Props>();

  const url = computed(() => `favorites/${props.type === 'parking' ? 'lots' : 'pantries'}/resolve-ids`);

  const { data, pending, error } = await useDataFetch<{ data: PlaceOne[] }>(url, {
    method: 'POST',
    body: {
      ids: [ props.id ],
    }
  });

  const item = computed(() => data.value?.data[0]);
</script>
