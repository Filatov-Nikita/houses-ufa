<template>
  <div>
    <BaseWait :waiting="loading || bindLoading">
      <template #loader>
        <div class="loader">
          <div
            class="loader__item"
            v-for="_i in 12"
          >
            <BaseSkeleton class="tw-h-[400px] tw-rounded-2xl" />
          </div>
        </div>
      </template>
      <div class="tw-text-center tw-text-base tw-py-8" v-if="isEmpty">
        Ничего не найдено. Попробуйте изменить параметры фильтра.
      </div>
      <template v-else>
        <div
          v-if="showedFlats"
          class="filter-estate-list"
        >
          <FlatCard
            class="filter-estate-list__card"
            v-for="flat in flats"
            :key="flat.id"
            :flat="flat"
            @bind="bindClient($event, 'flat')"
          />
        </div>
        <div
          v-else-if="mainFilter.showedType === 'towns'"
          class="filter-estate-list"
        >
          <TownCard
            class="filter-estate-list__card"
            v-for="town in towns"
            :key="town.id"
            :town="town"
            @bind="bindClient($event, 'estate')"
          />
        </div>
        <PagBtn />
      </template>
    </BaseWait>
  </div>
</template>

<script setup lang="ts">
  import PagBtn from './PagBtn.vue';
  import FlatCard from './Flat.vue';
  import TownCard from './Town.vue';

  import { useMainFilter } from '../store';
  import { useFlatsFilter } from '../store/flats';
  import { useTownsFilter } from '../store/towns';
  import { useNotifyStore } from '@/stores/notify';

  const emit = defineEmits<{
    (event: 'bind:success'): void,
  }>();

  const mainFilter = useMainFilter();
  const flatsFilter = useFlatsFilter();
  const townsFilter = useTownsFilter();

  const loading = computed(() => mainFilter.loading);

  const flats = computed(() => flatsFilter.data?.data ?? []);
  const towns = computed(() => townsFilter.data?.data ?? []);
  const isEmpty = computed(() => mainFilter.currentFilter.data?.data?.length === 0);

  const showedFlats = computed(() => {
    return mainFilter.showedType === 'flats' ||
    mainFilter.showedType === 'out-city-flats';
  });

  const bindLoading = ref(false);

  async function bindClient(object_id: number, object_type: 'flat' | 'estate') {
    if(!mainFilter.clientId) return;

    bindLoading.value = true;

    const { error } = await useDataFetch(`b2t/shoppers/${mainFilter.clientId}/object`, {
      baseURL: useRuntimeConfig().public.rootApi,
      method: 'POST',
      body: {
        object_id,
        object_type,
      }
    });

    bindLoading.value = false;

    if(error.value) {
      const msg = error.value?.data?.message;
      useNotifyStore().create({
        type: 'error',
        message: msg ?? 'Не удалось привязать объект!',
      });
    } else {
      emit('bind:success');
    }
  }
</script>
<style scoped lang="scss">
  .loader {
    display: flex;
    flex-wrap: wrap;
    margin: -16px -10px;

    &__item {
      width: calc(100% / 12 * 4 - 20px);
      margin: 16px 10px;

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }

  .filter-estate-list {
    margin: -16px -10px;
    @apply tw-flex tw-flex-wrap;

    &__card {
      width: calc(100% / 12 * 4 - 20px);
      margin: 16px 10px;

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
