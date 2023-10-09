<template>
  <BaseWait :waiting="loading">
    <template #loader>
      <div class="tw-flex -tw-m-4">
        <div class="tw-w-1/3 tw-p-4" v-for="_i in 3">
          <BaseSkeleton class="tw-rounded-3xl tw-min-h-[320px]"/>
        </div>
      </div>
    </template>
    <div v-if="news.length === 0">
      Еще нет новостей
    </div>
    <div v-else class="last-news-list">
      <ArticlesItem
        class="last-news-list__item"
        v-for="item in news"
        :key="item.id"
        :item="item"
      />
    </div>
  </BaseWait>
</template>

<script setup lang="ts">
  import type { ArticlesResponse } from '../store';

  interface Props {
    loading: boolean,
    news: ArticlesResponse | null,
  }

  const props = defineProps<Props>();

  const news = computed(() => props.news?.data ?? []);
</script>

<style scoped lang="scss">
  .last-news-list {
    display: flex;
    flex-wrap: wrap;
    margin: -16px;

    &__item {
      width: calc(33.3% - 16px);
      margin: 8px;
    }
  }
</style>
