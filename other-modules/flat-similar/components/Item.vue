<template>
  <EstateCardsBase
    :name="name"
    :params="params"
    :images="flat.plan_image_url"
    :to="to"
    :badges="flat.badges"
  >
    <template #actions>
      <BtnsActionsLike />
      <BtnsActionsMenu />
    </template>
    <EstateCardsBlocksParamsInfo
      hideBadges
      :complexName="complexName"
      :price="price"
    />
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import type { Flat } from '@/types/estate/flat';
  import { getRoomsCount } from '@/plugins/rooms-count';

  const props = defineProps<{
    flat: Flat,
  }>();

  const to = computed(() => `/apartments/${props.flat.id}`);

  const name = computed(() => {
    return `${getRoomsCount(props.flat.room_factor)}-комнатная, ${props.flat.area_total}&nbsp;м<sup>2</sup>`;
  });

  const params = computed(() => {
    return [
      `Этаж ${props.flat.floor_number}`,
      `Литер ${props.flat.house.letter}`,
    ]
  });

  const complexName = computed(() => {
    const { name, location } = props.flat.complex;
    return `${name}, ${location}`;
  });

  const price = computed(() => {
    return +props.flat.price_total;
  });
</script>
