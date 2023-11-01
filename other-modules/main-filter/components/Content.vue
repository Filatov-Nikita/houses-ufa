<template>
  <div ref="contentRef">
    <ListControl class="tw-mb-8" />
    <EstateList />
  </div>
</template>

<script setup lang="ts">
  import ListControl from './ListControl.vue';
  import EstateList from './EstateList.vue';
  import { useMainFilter } from '../store';

  const mainFilter = useMainFilter();

  const contentRef = ref<HTMLElement | null>(null);

  function scrollBy(): void {
    if(contentRef.value === null) return;
    contentRef.value.scrollIntoView({ behavior: 'smooth' })
  }

  await useAsyncData(() => mainFilter.show(), { lazy: true });

  watch(() => mainFilter.loading, (val) => {
    if(val) {
      scrollBy();
    }
  });
</script>
