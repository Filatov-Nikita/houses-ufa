<template>
  <BaseWait :waiting="loading">
    <template #loader>
      <div class="loader">
        <div
          class="loader__item"
          v-for="_i in 6"
        >
          <BaseSkeleton class="tw-h-[320px] tw-rounded-3xl" />
        </div>
      </div>
    </template>
    <div v-if="items.length === 0">
      Еще нет новостей
    </div>
    <div v-else class="list-items">
      <div class="list-items__list">
        <ArticleItem
          class="list-items__item"
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </div>
      <div class="list-items__pag">
        <Paginate />
      </div>
    </div>
  </BaseWait>
</template>

<script setup lang="ts">
  import ArticleItem from '@/components/Articles/Item.vue';
  import Paginate from './Paginate.vue';
  import type { ArticlesListResponse } from '@/types/articles';

  interface Props {
    loading: boolean,
    articles: ArticlesListResponse | null,
  }

  const props = defineProps<Props>();

  const items = computed(() => props.articles?.data || []);
</script>


<style scoped lang="scss">
  .loader {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(33.3% - 20px);
      margin: 10px;

      @include lg {
        width: calc(50% - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }

  .list-items {
    &__list {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__item {
      width: calc(33.3% - 20px);
      margin: 10px;

      @include lg {
        width: calc(50% - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__pag {
      margin-top: 32px;

      @include lg {
        margin-top: 24px;
      }
    }
  }
</style>
