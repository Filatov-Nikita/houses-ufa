<template>
  <div
    v-if="typeof images === 'string'"
    class="estate-images__carousel"
    :class="`estate-images__carousel--${theme}`"
  >
    <img
      class="estate-images__img"
      :src="images"
      alt=""
    />
  </div>
  <div
    class="estate-images__empty"
    :class="`estate-images__empty--${theme}`"
    v-else-if="images.length === 0"
  >
    <BaseIcon class="tw-w-full tw-h-full" name="house" />
  </div>
  <EstateCardsSlider v-else :images="images" />
</template>

<script setup lang="ts">
  interface Props {
    theme?: 'white' | 'gray',
    images: string | string[],
  }

  withDefaults(defineProps<Props>(), {
    theme: 'white',
  });
</script>

<style scoped lang="scss">
  .estate-images {
    &__carousel, &__empty {
      border-radius: 16px;
      height: 277px;

      &--white {
        @apply tw-bg-secondary;
      }

      &--gray {
        @apply tw-bg-white;
      }
    }

    &__img {
      object-fit: contain;
      object-position: center;
      @apply tw-w-full tw-h-full;
    }

    &__empty {
      @apply tw-p-16 tw-text-base02;
    }
  }
</style>
