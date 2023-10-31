<template>
  <EstateCardsBase
    class="tw-block"
    theme="gray"
    :to="path"
    :images="images"
    :name="name"
    :params="params"
  >
    <EstateCardsBlocksParamsInfo
      hideBadges
      :complexName="complexName"
    />
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import type { Town } from '@/types/estate/town';

  const props = defineProps<{
    town: Town,
  }>();

  const path = computed(() => `/towns/${props.town.id}`);

  const name = computed(() => {
    return `${props.town.layout.name_alias}, ${props.town.layout.area_cottage} м2`
  });

  const params = computed(() => {
    return [
      `Этаж ${props.town.layout.number_of_floors}`,
    ]
  });

  const images = computed(() => props.town.layout.feed_images.map(img => img.url));

  const complexName = computed(() => {
    return props.town.town.name;
  });
</script>
