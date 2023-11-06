<template>
  <EstateImageFlatViewer
    :title="title"
    :planImages="planImages"
  />
</template>

<script setup lang="ts">
  import { useFlatCard } from '../store';

  const flatCard = useFlatCard();

  const data = computed(() => flatCard.data?.data);

  const title = computed(() => {
    return `${data.value?.number_of_rooms}-комнатная, ${data.value?.area_total} м²`
  });

  const planImages =  computed(() => {
    if(!flatCard.data) return [];
    return [ flatCard.data.data.plan_image_url ];
  });
</script>
