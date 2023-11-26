<template>
  <BaseWait :waiting="loading">
    <template #loader>
      <div class="tw-flex -tw-m-4">
        <div class="tw-w-1/3 tw-p-4" v-for="_i in 3">
          <BaseSkeleton class="tw-rounded-3xl tw-min-h-[320px]"/>
        </div>
      </div>
    </template>
    <div v-if="items.length === 0">Нет новостей</div>
    <div v-else class="readmore-list">
      <ArticleItem
        class="readmore-list__item"
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </div>
  </BaseWait>
</template>

<script setup lang="ts">
  import ArticleItem from '@/components/Articles/Item.vue';
  import type { ArticlesResponse } from '../store';

  interface Props {
    articles: ArticlesResponse | null,
    loading: boolean
  }

  const props = defineProps<Props>();

  const items = computed(() => props.articles?.data ?? []);
</script>
<style scoped lang="scss">
  .readmore-list {
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
</style>
