<template>
  <div class="complex-gallery">
    <Filter class="complex-gallery__filter" />
    <Slider class="complex-gallery__slider" />
  </div>
</template>

<script setup lang="ts">
  import Filter from './components/Filter.vue';
  import Slider from './components/Slider.vue';
  import { useComplexGallery } from './store';

  const store = useComplexGallery();
  const route = useRoute();

  store.setComplexId(+route.params.id);

  function initCurrentType() {
    const data = store.data?.data ?? [];
    store.currentType = data[0]?.label ?? null;
  }

  await useLazyAsyncData(async () => {
    await store.show();
    initCurrentType();
  });
</script>

<style scoped lang="scss">
  .complex-gallery {
    &__filter {
      margin-bottom: 32px;
    }

    &__slider {
      width: 100%;
    }
  }
</style>
