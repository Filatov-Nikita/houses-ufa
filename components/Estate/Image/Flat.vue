<template>
  <EstateImageFlatSlider
    class="estate-image-contr__img"
    :images="planImages"
    @showImg="emit('showModalImg')"
  />
</template>

<script setup lang="ts">
  interface Props {
    planImages: Array<string>,
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (event: 'showModalImg'): void,
  }>();
</script>

<style scoped lang="scss">
  .estate-image-contr {
    position: relative;

    &__toolbar {
      position: absolute;
      top: 16px;
      left: 0;
      display: flex;
      justify-content: center;
      width: 100%;
      z-index: 50;
    }

    &__img {
      height: 600px;

      @include sm {
        height: 311px;
      }
    }
  }
</style>
