<template>
  <EstateImageFlatViewer
    :title="title"
    :planImages="planImages"
    :floorImage="floorImage"
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
    const data = flatCard.data.data;
    return [ data.plan_image_url ];
  });

  const floorImage =  computed(() => {
    if(!flatCard.data) return null;
    const data = flatCard.data.data;
    return data.flat_on_floor_plan_image_url;
  });
</script>
