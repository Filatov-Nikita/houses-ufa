<template>
  <EstateImageTownViewer
    :title="projectCard.projectData?.data.name ?? ''"
    :renderImages="renderImages"
    :planImages="planImages"
  />
</template>

<script setup lang="ts">
  import { useProjectCard } from '../store';

  const projectCard = useProjectCard();

  const renderImages =  computed(() => projectCard.renderImages.map(i => i.url));
  const planImages =  computed(() => projectCard.planImages.map(i => i.url));
</script>
