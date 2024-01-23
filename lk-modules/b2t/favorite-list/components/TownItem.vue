<template>
  <RouterLink class="town-card" :to="`/towns/${town.id}`">
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
      <div class="town-card__actions">
        <button class="town-card__check-btn" @click.prevent="emit('checkClient', town.id, 'estate')">
          Проверить клиента
        </button>
        <EstateActionsAddFav
          type="towns"
          :id="town.id"
          :initial-value="town.is_in_favorite"
        />
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
  import type { Town } from '@/types/estate/town';

  interface Props {
    town: Town
  };

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (event: 'checkClient', id: number, type: 'estate'): void
  }>();

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
    grid-template-columns: 152px 1fr 1fr;
    column-gap: 32px;
    row-gap: 16px;

    @include lg {
      grid-template-columns: 1fr 1fr;
      column-gap: 0px;
    }

    @include sm {
      grid-template-columns: 100%;
      row-gap: 16px;
    }

    &__actions {
      margin-top: 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      gap: 8px;

      @include lg {
        margin-top: 16px;
      }

      @include sm {
        justify-content: flex-start;
        margin-top: 16px;
      }
    }

    &__check-btn {
      border-radius: 8px;
      padding: 8px 16px;
      @apply tw-bg-primary tw-text-base tw-text-white;
    }

    &__info1 {
      grid-column: 2 / 4;

      @include lg {
        grid-column: 1 / 3;
      }
    }

    &__info2 {
      text-align: right;

      @include lg {
        grid-column: 2 / 3;
      }

      @include sm {
        grid-column: 1 / 2;
        text-align: left;
      }
    }

    &__img-wrap {
      @include lg {
        grid-column: 1 / 3;
      }

      @include sm {
        grid-column: 1 / 2;
      }
    }

    &__img {
      width: 152px;
      height: 152px;
      border-radius: 16px;
      object-fit: cover;
      @apply tw-bg-base00;

      @include lg {
        width: 120px;
        height: 120px;
      }

      @include sm {
        width: 100%;
        max-width: 210px;
        height: 210px;
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
