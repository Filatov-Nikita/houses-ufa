<template>
  <EstateBlockAbout
    title="О жилом комплексе"
    :text="about?.description ?? ''"
    :advantages="advantages"
    actionTitle="Перейти к генплану"
  />
</template>

<script setup lang="ts">
  import { useComplexOne } from '@/stores/pages/complex-one';

  const complexOne = useComplexOne();

  const about = computed(() => complexOne.complex?.data.about ?? null);

  const advantages = computed(() => {
    if(!about.value) return [];

    return [
      { title: about.value.feature_1_title, value: about.value.feature_1_value },
      { title: about.value.feature_2_title, value: about.value.feature_2_value },
      { title: about.value.feature_3_title, value: about.value.feature_3_value },
    ]
  });
</script>
