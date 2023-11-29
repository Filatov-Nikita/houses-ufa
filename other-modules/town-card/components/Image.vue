<template>
  <EstateImageSlider
    v-if="isEmptyPlace"
    class="empty-slider"
    :images="images"
  />
  <EstateImageTownViewer
    v-else
    :title="townCard.data?.data.layout.name ?? ''"
    :renderImages="renderImages"
    :planImages="planImages"
  />

</template>

<script setup lang="ts">
  import { useTownCard } from '../store';

  const townCard = useTownCard();

  const renderImages =  computed(() => townCard.renderImages.map(i => i.url));
  const planImages =  computed(() => townCard.planImages.map(i => i.url));
  const images = computed(() => townCard.images.map(i => i.url));
  const isEmptyPlace = computed(() => townCard.isEmptyPlace);
</script>

<style scoped lang="scss">
  .empty-slider {
    height: 600px;

    @include md {
      height: 450px;
    }
  }
</style>
