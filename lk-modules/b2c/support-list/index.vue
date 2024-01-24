<template>
  <div class="support-list" v-if="response">
    <div class="support-list__toolbar">
      <h1 class="support-list__title">Обращения</h1>
      <BaseButton v-if="response.data.length > 0" @click="showed = true">
        Написать обращение
      </BaseButton>
    </div>
    <Empty v-if="response.data.length === 0" @create="showed = true" />
    <div v-else class="support-list__items">
      <Item
        class="support-list__item"
        v-for="item in response.data"
        :key="item.id"
        :item="item"
      />
    </div>
    <ModalCreate v-model:showed="showed" @success="refresh" />
  </div>
</template>

<script setup lang="ts">
  import Empty from './components/Empty.vue';
  import Item from './components/Item.vue';
  import ModalCreate from './components/ModalCreate.vue';
  import type { SupportOne } from './types';

  const showed = ref(false);

  const { data: response, refresh } = await useDataFetch<{ data: SupportOne[] }>('b2c/appeals', {
    method: 'GET',
    key: 'showSupport',
    baseURL: useRuntimeConfig().public.rootApi,
  });
</script>

<style scoped lang="scss">
.support-list {
  padding: 40px;
  border-radius: 16px;
  @apply tw-bg-white;

  @include md {
    padding: 24px;
  }

  @include sm {
    padding: 16px;
  }

  &__toolbar {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 32px;
  }

  &__title {
    font-size: 32px;
    line-height: 1.25;
    @apply tw-text-text00;

    @include sm {
      font-size: 24px;
      line-height: 1.3;
    }
  }

  &__item {
    & + & {
      margin-top: 16px;
    }
  }
}
</style>
