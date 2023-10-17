<template>
  <EstateCardsBase
    :name="name"
    :params="params"
    :images="flat.plan_image_url"
  >
    <template #actions>
      <BtnsActionsLike />
      <BtnsActionsMenu />
    </template>
    <EstateCardsBlocksParamsInfo
      :complexName="complexName"
      :price="price"
      :creditMonth="creditMonth"
      :creditStart="creditStart"
    />
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import type { Flat } from '@/types/estate/flat';

  const props = defineProps<{
    flat: Flat,
  }>();

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

  const creditMonth = computed(() => {
    return +props.flat.mortgage_monthly_payment;
  });

  const creditStart = computed(() => {
    return +props.flat.mortgage_initial_fee;
  });
</script>
