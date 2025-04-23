<template>
  <section class="section" v-if="items && items.data.length > 0">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Документы</h2>
      </div>
      <div class="documnets">
        <List :items="items.data" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { DocumentItem } from './types';
  import List from './components/List.vue';

  const props = defineProps<{
    complexId: number,
  }>();

  const { data: items } = await useDataFetch<{ data: DocumentItem[] }>(`estate/complexes/${props.complexId}/papers`, {
    watch: [ () => props.complexId ],
  });
</script>

<style scoped lang="scss">
  .documnets {
    border-radius: 16px;
    padding: 24px;
    @apply tw-bg-white;
  }
</style>
