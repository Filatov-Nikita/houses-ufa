<template>
  <EstateBlockAbout
    title="О коттеджном посёлке"
    :text="about?.description ?? ''"
    :advantages="advantages"
    actionTitle="Перейти к генплану"
  />
</template>

<script setup lang="ts">
  import { useTownOne } from '@/stores/pages/town-one';

  const townOne = useTownOne();

  const about = computed(() => townOne.town?.data.about ?? null);

  const advantages = computed(() => {
    if(!about.value) return [];

    return [
      { title: about.value.feature_1_title, value: about.value.feature_1_value },
      { title: about.value.feature_2_title, value: about.value.feature_2_value },
      { title: about.value.feature_3_title, value: about.value.feature_3_value },
    ]
  });
</script>
