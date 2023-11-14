<template>
  <div class="tw-space-y-2" v-if="pending">
    <BaseSkeleton class="tw-min-h-[100px] tw-w-full tw-rounded-2xl" v-for="_i in 3" />
  </div>
  <div v-else class="faq-content">
    <h2 class="faq-content__title">{{ data?.data.name }}</h2>
    <Item
      class="faq-content__item"
      v-for="item in items"
      :key="item.id"
      :title="item.question"
      :body="item.answer"
    />
  </div>
</template>

<script setup lang="ts">
  import Item from './Item.vue';
  import { useDataFetch } from '@/composables/useDataFetch';
  import { useFaq } from '../store';

  const store = useFaq();

  const url = computed(() => `press-center/faq/sections/${store.currentSectionId}`);

  const { data, pending } = await useDataFetch<Response>(url, { lazy: true });

  const items = computed(() => data.value?.data.qnas ?? [] );

  interface Response {
    data: Card;
  }

  interface Card {
      id:       number;
      name:     string;
      priority: number;
      target:   string;
      qnas:     Qna[];
  }

  interface Qna {
      id:       number;
      answer:   string;
      priority: number;
      question: string;
  }
</script>

<style scoped lang="scss">
  .faq-content {
    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;
    }

    &__item {
      width: 100%;

      & + & {
        margin-top: 8px;
      }
    }
  }
</style>
