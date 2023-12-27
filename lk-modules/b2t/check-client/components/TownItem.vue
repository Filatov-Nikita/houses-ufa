<template>
  <div class="town-card">
    <div class="town-card__img-wrap">
    <img
      class="town-card__img"
      v-if="images[0]"
      :src="images[0]"
      loading="lazy"
      :alt="name"
    />
    </div>
    <div class="town-card__info1">
      <p class="town-card__name">{{ name }}</p>
      <div class="town-card__section">
        <p>{{ params[0] }}</p>
        <div class="town-card__dot"></div>
        <p>{{ complexName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Town } from '@/types/estate/town';

  interface Props {
    town: Town
  };

  const props = defineProps<Props>();

  const name = computed(() => {
    return `${props.town.layout.name_alias}, ${props.town.layout.area_cottage} м2`
  });

  const params = computed(() => {
    return [
      `Этаж ${props.town.layout.number_of_floors}`,
    ]
  });

  const images = computed(() => props.town.layout.feed_images.map(img => img.url));

  const complexName = computed(() => {
    return props.town.town.name;
  });
</script>

<style scoped lang="scss">
  .town-card {
    display: grid;
    grid-template-columns: 56px 1fr 1fr;
    column-gap: 16px;
    row-gap: 16px;

    @include lg {
      grid-template-columns: 1fr 1fr;
      column-gap: 0px;
    }

    @include md {
      grid-template-columns: 100%;
      row-gap: 24px;
    }

    &__info1 {
      grid-column: 2 / 4;

      @include lg {
        grid-column: 1 / 2;
      }
    }

    &__img-wrap {
      @include lg {
        grid-column: 1 / 3;
      }

      @include md {
        grid-column: 1 / 2;
      }
    }

    &__img {
      width: 56px;
      height: 56px;
      border-radius: 8px;
      object-fit: cover;
      @apply tw-bg-base00;

      @include lg {
        width: 120px;
        height: 120px;
        padding: 12px;
      }

      @include md {
        width: 100%;
        max-width: 210px;
        height: 210px;
        padding: 16px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }

    &__name {
      @apply tw-text-lg tw-text-text00;
    }

    &__section {
      display: flex;
      gap: 6px;
      @apply tw-text-text02;
    }

    &__dot {
      vertical-align: middle;
      &::before {
        content: '·';
      }
    }

    &__section {
      font-size: 14px;
      line-height: 24px;
    }

    &__name {
      margin-bottom: 4px;
    }
  }
</style>
