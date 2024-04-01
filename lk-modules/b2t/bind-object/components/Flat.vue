<template>
  <EstateCardsBase
    class="bind-flat-card"
    :name="name"
    :params="params"
    :images="flat.plan_image_url"
    :to="to"
    :badges="flat.badges"
  >
    <template #actions>
      <ClientOnly>
        <EstateActionsAddFav type="flats" :id="flat.id" :initialValue="flat.is_in_favorite" />
      </ClientOnly>
      <BtnsActionsMenu />
    </template>
    <EstateCardsBlocksParamsInfo
      :complexName="complexName"
      :price="price"
      :pricePromo="flat.price_promo"
      :creditMonth="creditMonth"
      :creditStart="creditStart"
      :finishingType="finishingType"
    />
    <BaseButton class="tw-w-full tw-mt-4" theme="gray" @click.prevent="$emit('bind', flat.id)">
      Выбрать объект
    </BaseButton>
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import type { Flat } from '@/types/estate/flat';
  import { getRoomsCount } from '@/plugins/rooms-count';

  const props = defineProps<{
    flat: Flat,
  }>();

  const emit = defineEmits<{
    (event: 'bind', id: number): void,
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

  const creditMonth = computed(() => {
    return +props.flat.mortgage_monthly_payment;
  });

  const creditStart = computed(() => {
    return parseInt(props.flat.mortgage_initial_fee);
  });

  const finishingType = computed(() => {
    return props.flat.complex.finishing_type.title;
  });
</script>

<style lang="scss">
  .bind-flat-card {
    @apply tw-border tw-border-solid tw-border-border00;
  }
</style>
