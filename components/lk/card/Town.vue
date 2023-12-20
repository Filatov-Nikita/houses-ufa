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
      </div>
      <p class="town-card__house">{{ complexName }}</p>
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
    grid-template-columns: 88px 1fr 1fr;
    column-gap: 32px;
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
      @include lg {
        grid-column: 1 / 2;
      }
    }

    &__info2 {
      text-align: right;

      @include lg {
        grid-column: 2 / 3;
      }

      @include md {
        grid-column: 1 / 2;
        text-align: left;
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
      width: 88px;
      height: 88px;
      border-radius: 16px;
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

    &__house {
      @apply tw-text-text01;
    }

    &__house, &__section, &__credit {
      font-size: 14px;
      line-height: 24px;
    }

    &__price {
      @apply tw-text-text00 tw-text-xl;
    }

    &__credit {
      @apply tw-text-text02;

      span {
        @apply tw-text-text01;
      }
    }

    &__house, &__credit + &__credit {
      margin-top: 4px;
    }

    &__name, &__price {
      margin-bottom: 10px;
    }
  }
</style>
