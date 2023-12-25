<template>
  <div>
    <BaseSkeleton v-if="loadingBook || loadingCredit" theme="white" class="tw-w-full tw-h-[500px] tw-rounded-2xl" />
    <EmptyList v-else-if="isEmpty" />
    <SectionList v-else>
      <div class="section-block">
        <BookItem
          class="section-item"
          v-for="bookItem in bookResponse?.data ?? []"
          :item="bookItem"
        />
      </div>
      <div class="section-block">
        <CreditItem
          class="section-item"
          v-for="creditItem in creditResponse?.data ?? []"
          :item="creditItem"
        />
      </div>
    </SectionList>
  </div>
</template>

<script setup lang="ts">
  import EmptyList from './components/EmptyList.vue';
  import SectionList from './components/SectionList.vue';
  import BookItem from './components/BookItem.vue';
  import CreditItem from './components/CreditItem.vue';
  import { useDataFetch } from '@/composables/useDataFetch';
  import type { BookResponse } from './types';
  import type { CreditResponse } from './types';

  const config = useRuntimeConfig();

  const { data: bookResponse, pending: loadingBook } = useDataFetch<BookResponse>('b2c/bookings', { baseURL: config.public.rootApi });
  const { data: creditResponse, pending: loadingCredit } = useDataFetch<CreditResponse>('b2c/mortgage-claims', { baseURL: config.public.rootApi });

  const isEmpty = computed(() => {
    const len1 = bookResponse.value?.data?.length ?? 0;
    const len2 = creditResponse.value?.data?.length ?? 0;
    return len1 === 0 && len2 === 0;
  });
</script>

<style scoped lang="scss">
  .section-item {
    & + & {
      margin-top: 32px;
    }
  }

  .section-block {
    & + & {
      margin-top: 32px;
      padding-top: 32px;
      @apply tw-border-t tw-border-solid tw-border-border00;
    }
  }
</style>
