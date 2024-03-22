<template>
  <BaseSkeleton v-if="flatLoading || townLoading" class="tw-h-[200px] tw-rounded-2xl tw-w-full" />
  <EmptyList v-else-if="isEmpty" />
  <div v-else class="favorite-list">
    <h1 class="favorite-list__title">Избранное</h1>
    <div v-if="flatResponse && flatResponse.data.length !== 0" key="flats" class="favorite-list__items">
      <FlatItem
        class="favorite-list__item"
        v-for="flatItem in flatResponse.data"
        :key="flatItem.id"
        :flat="flatItem"
        @check-client="setDataForCheck"
      />
    </div>
    <div v-if="townResponse && townResponse.data.length !== 0" key="towns" class="favorite-list__items">
      <TownItem
        class="favorite-list__item"
        v-for="townItem in townResponse.data"
        :key="townItem.id"
        :town="townItem"
        @check-client="setDataForCheck"
      />
    </div>
    <CheckClient
      v-if="store.currentId && store.currentType"
      v-model:showed="store.showedCheckClient"
      :id="store.currentId"
      :type="store.currentType"
    />
  </div>
</template>

<script setup lang="ts">
  import EmptyList from './components/EmptyList.vue';
  import FlatItem from './components/FlatItem.vue';
  import TownItem from './components/TownItem.vue';
  import CheckClient from '@/lk-modules/b2t/check-client/index.vue';
  import { useCheckClient } from '@/lk-modules/b2t/check-client/store';
  import { useDataFetch } from '@/composables/useDataFetch';
  import { type Flat } from '@/types/estate/flat';
  import { type Town } from '@/types/estate/town';
  import { useFavList } from './store';

  const store = useFavList();
  const form = useCheckClient();

  const { data: flatResponse, pending: flatLoading } = useDataFetch<{ data: Flat[] }>('favorites/flats');
  const { data: townResponse, pending: townLoading } = useDataFetch<{ data: Town[] }>('favorites/estates');

  const isEmpty = computed(() => {
    return flatResponse.value?.data.length === 0
    && townResponse.value?.data.length === 0
  });

  function setDataForCheck(id: number, type: 'estate' | 'flat') {
    store.currentId = id;
    store.currentType = type;
    store.showedCheckClient = true;
  }

  onUnmounted(() => {
    store.currentId = undefined;
    store.currentType = undefined;
    store.showedCheckClient = false;
  });
</script>

<style scoped lang="scss">
  .favorite-list {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    @include md {
      padding: 24px;
    }

    @include sm {
      padding: 16px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;

      @include sm {
        font-size: 24px;
        line-height: 1.3;
        margin-bottom: 24px;
      }
    }

    &__items {
      & + & {
        margin-top: 24px;

        @include lg {
          margin-top: 32px;
        }
      }
    }

    &__item {
      & + & {
        margin-top: 24px;

        @include lg {
          margin-top: 32px;
        }
      }
    }
  }
</style>
