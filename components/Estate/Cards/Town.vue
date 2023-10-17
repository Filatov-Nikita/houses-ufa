<template>
  <EstateCardsBase
    :name="name"
    :params="params"
    :images="images"
  >
    <template #actions>
      <BtnsActionsLike />
      <BtnsActionsMenu />
    </template>
    <EstateCardsBlocksParamsInfo
      :complexName="complexName"
    />
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import type { Town } from '@/types/estate/town';

  const props = defineProps<{ town: Town }>();

  const name = computed(() => {
    return `${props.town.project.name}, ${props.town.area_cottage} м2`
  });

  const params = computed(() => {
    return [
      `Этаж ${props.town.number_of_floors}`,
    ]
  });

  const images = computed(() => props.town.feed_images.map(img => img.url));

  const complexName = computed(() => {
    return props.town.town.name;
  });
</script>
