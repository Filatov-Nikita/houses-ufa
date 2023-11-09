<template>
  <div class="fav-empty">
    <div class="fav-empty__icon">
      <BaseIcon class="fav-empty__icon-svg" :name="current.icon" />
    </div>
    <div class="fav-empty__wrap">
      <p class="fav-empty__title">Вы ещё не добавили {{ current.emptyTitle }} в избранное</p>
      <p class="fav-empty__text">
        Избранное — это отличный способ отслеживать интересующие вас объекты недвижимости и сохранять их для последующего просмотра или сравнения
      </p>
      <BaseButton @click="current.showFilter">
        Перейти к {{ current.actionName }}
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useFavList } from '../store';

  const store = useFavList();
  const router = useRouter();

  const data = {
    flats: {
      emptyTitle: 'ни одной квартиры',
      actionName: 'квартирам',
      icon: 'building',
      showFilter() {
        router.push({
          path: '/main-filter',
          query: {
            filterType: 'flats',
          },
        });
      },
    },
    towns: {
      emptyTitle: 'ни одного дома',
      actionName: 'коттеджам и таунхаусам',
      icon: 'house',
      showFilter() {
        router.push({
          path: '/main-filter',
          query: {
            filterType: 'towns',
          },
        });
      },
    },
    places: {
      emptyTitle: 'ни одной кладовой',
      actionName: 'квартирам',
      icon: 'house-not',
      showFilter() {
        router.push({
          path: '/main-filter',
          query: {
            filterType: 'flats',
          },
        });
      },
    },
    parkings: {
      emptyTitle: 'ни одного машиноместа',
      actionName: 'квартирам',
      icon: 'garage',
      showFilter() {
        router.push({
          path: '/main-filter',
          query: {
            filterType: 'flats',
          },
        });
      },
    },
  };

  const current = computed(() => data[store.favType]);
</script>

<style scoped lang="scss">
  .fav-empty {
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @apply tw-bg-white;

    &__icon {
      display: inline-block;
      padding: 16px;
      color: #343330;
      border-radius: 8px;
      margin-bottom: 32px;
      @apply tw-bg-base00;
    }

    &__icon-svg {
      width: 32px;
      height: 32px;
    }

    &__wrap {
      text-align: center;
      max-width: 566px;
      width: 100%;
    }

    &__title {
      margin-bottom: 16px;
      @apply tw-text-text00 tw-text-xl;
    }

    &__text {
      margin-bottom: 16px;
      @apply tw-text-text02 tw-text-sm;
    }
  }
</style>
