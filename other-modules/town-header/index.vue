<template>
  <EstateBlockHeader
    :name="townStore.town?.data.name ?? ''"
    :location="townStore.town?.data.location ?? ''"
    :img="townStore.town?.data.image ?? null"
    actionTitle="Выбрать дом"
    caption="Визуализация проекта предварительная, возможны изменения"
    @action="showMainFilter"
  />
</template>

<script setup lang="ts">
  import { useTownOne } from '@/stores/pages/town-one';

  const router = useRouter();
  const route = useRoute();
  const townStore = useTownOne();

  function showMainFilter() {
    router.push({
      path: '/main-filter',
      query: { filterType: 'towns', object_id: +route.params.id },
    });
  }
</script>
