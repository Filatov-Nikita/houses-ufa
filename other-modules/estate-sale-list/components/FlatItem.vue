<template>
  <EstateCardsBase
    class="tw-block"
    theme="gray"
    :to="path"
    :images="flat.plan_image_url"
    :name="name"
    :params="params"
  >
    <template #actions>
      <BtnsActionsMenu theme="white" />
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

  const props = defineProps<{
    flat: Flat,
  }>();

  const path = computed(() => `/apartments/${props.flat.id}`);

  const name = computed(() => {
    return `${props.flat.number_of_rooms}-комнатная, ${props.flat.area_total}&nbsp;м<sup>2</sup>`;
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
