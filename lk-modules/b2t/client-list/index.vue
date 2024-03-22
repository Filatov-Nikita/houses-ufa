<template>
  <BaseSkeleton v-if="pending" class="tw-w-full tw-h-[300px] tw-rounded-2xl" />
  <EmptyList v-else-if="clientResponse && clientResponse.data.length === 0" @check:client="checkModal = !checkModal" />
  <div v-else-if="clientResponse" class="client-section">
    <div class="client-section__grid">
      <h1 class="client-section__title">Клиенты</h1>
      <div class="client-section__space"></div>
      <BaseButton theme="gray" to="/lk/b2t/objects">
        Выбрать объект
      </BaseButton>
      <BaseButton theme="gray" @click="checkModal = !checkModal">
        Проверить клиента
      </BaseButton>
    </div>
    <ClientTable
      :items="clientResponse.data"
      @refresh="refresh"
    />
  </div>
  <CheckClient v-model:showed="checkModal" finish-action="close" @finish="finishCheck"/>
</template>

<script setup lang="ts">;
  import ClientTable from './components/ClientTable.vue';
  import EmptyList from './components/EmptyList.vue';
  import CheckClient from '../check-client/index.vue';
  import { useDataFetch } from '@/composables/useDataFetch';
  import { ClientResponse } from './types';

  const config = useRuntimeConfig();

  const checkModal = ref(false);

  const { data: clientResponse, pending, refresh } = await useDataFetch<ClientResponse>(
    'b2t/shoppers',
    { baseURL: config.public.rootApi }
  );

  function finishCheck() {
    refresh();
    checkModal.value = false;
  }
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
      @apply tw-text-text00;

      @include sm {
        font-size: 24px;
        line-height: 1.3;
        width: 100%;
      }
    }

    &__space {
      flex-grow: 1;

      @include sm {
        display: none;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;

      @include sm {
        margin-bottom: 24px;
      }
    }
  }
</style>
