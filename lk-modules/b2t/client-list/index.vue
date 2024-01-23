<template>
  <EmptyList v-if="clientResponse && clientResponse.data.length === 0" />
  <div v-else-if="clientResponse" class="client-section">
    <h1 class="client-section__title">Клиенты</h1>
    <ClientTable
      :items="clientResponse.data"
    />
  </div>
</template>

<script setup lang="ts">
  import ClientTable from './components/ClientTable.vue';
  import EmptyList from './components/EmptyList.vue';
  import { useDataFetch } from '@/composables/useDataFetch';
  import { ClientResponse } from './types';

  const config = useRuntimeConfig();

  const { data: clientResponse } = await useDataFetch<ClientResponse>(
    'b2t/shoppers',
    { baseURL: config.public.rootApi }
  );
</script>

<style scoped lang="scss">
  .client-section {
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
  }
</style>
