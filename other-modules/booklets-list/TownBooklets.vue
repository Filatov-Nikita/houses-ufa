<template>
  <SectionForList v-if="booklets && booklets.data.length > 0">
    <List :items="booklets.data" />
  </SectionForList>
</template>

<script setup lang="ts">
  import type { BookletItem } from './types';
  import SectionForList from './components/SectionForList.vue';
  import List from './components/List.vue';

  const props = defineProps<{
    townId: number
  }>();

  const { data: booklets } = await useDataFetch<{ data: BookletItem[] }>(`estate/towns/${props.townId}/booklets`);
</script>
