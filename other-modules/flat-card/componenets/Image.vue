<template>
  <EstateImageFlatViewer
    :title="title"
    :planImages="planImages"
  />
</template>

<script setup lang="ts">
  import { useFlatCard } from '../store';
  import { getRoomsCount } from '@/plugins/rooms-count';

  const flatCard = useFlatCard();

  const data = computed(() => flatCard.data?.data);

  const title = computed(() => {
    if(!data.value) return '';
    return `${getRoomsCount(data.value.room_factor)}-комнатная, ${data.value.area_total} м²`
  });

  const planImages =  computed(() => {
    if(!flatCard.data) return [];
    return [ flatCard.data.data.plan_image_url ];
  });
</script>
