<template>
  <EstateImageTownViewer
    :title="townCard.data?.data.layout.name ?? ''"
    :renderImages="renderImages"
    :planImages="planImages"
  />
</template>

<script setup lang="ts">
  import { useTownCard } from '../store';

  const townCard = useTownCard();

  const renderImages =  computed(() => townCard.renderImages.map(i => i.url));
  const planImages =  computed(() => townCard.planImages.map(i => i.url));
</script>
