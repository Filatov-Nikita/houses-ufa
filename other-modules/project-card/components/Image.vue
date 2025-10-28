<template>
  <EstateImageTownViewer
    :title="title"
    :renderImages="renderImages"
    :planImages="planImages"
  />
</template>

<script setup lang="ts">
  import type { FeedImage } from '@/repositories/towns/projects';

  const props = defineProps<{
    images: FeedImage[],
    title: string,
  }>();

  const planImages = computed(() => {
    return props.images.filter(img => img.is_plan).map(img => img.url);
  });

  const renderImages = computed(() => {
    return props.images.filter(img => !img.is_plan).map(img => img.url);
  });
</script>
