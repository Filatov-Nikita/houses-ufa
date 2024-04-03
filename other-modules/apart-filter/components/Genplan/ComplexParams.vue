<template>
  <div class="complex-params">
    <BaseSelect
      class="complex-params__liter"
      label="Литер"
      name="liter"
      :drop-down-props="{ options: houseOpts }"
      :model-value="localHouse"
      @update:modelValue="houseId = $event?.value ?? null"
    />
    <BaseSelect
      label="Секция"
      name="entrance"
      :drop-down-props="{ options: entranceOpts }"
      :model-value="localEntrance"
      @update:modelValue="entranceId = $event?.value ?? null"
    />
  </div>
</template>

<script setup lang="ts">
  import type { Complex } from './types/complex';
  import type { House } from './types/house';
  import type { Entrance } from './types/entrance';

  const props = defineProps<{
    houses: Complex['houses'],
    entrances: House['entrances'],
    house: House | null,
    entrance: Entrance | null,
    houseId: number | null,
    entranceId: number | null,
  }>();

  const houseId = defineModel<number | null>('houseId');
  const entranceId = defineModel<number | null>('entranceId');

  const houseOpts = computed(() => {
    return props.houses.map((house) => ({ label: house.name, value: house.id }));
  });

  const entranceOpts = computed(() => {
    return props.entrances.map((entrance) => ({ label: entrance.name, value: entrance.id }));
  });

  const localHouse = computed(() => houseOpts.value.find(h => h.value === props.houseId) ?? null);
  const localEntrance = computed(() => entranceOpts.value.find(e => e.value === props.entranceId) ?? null);
</script>

<style scoped lang="scss">
  .complex-params {
    &__liter {
      margin-bottom: 16px;
    }
  }
</style>
