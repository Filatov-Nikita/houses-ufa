<template>
  <EstateBlockHeader
    :name="complexStore.complex?.data.name ?? ''"
    :location="complexStore.complex?.data.location ?? ''"
    :images="complexStore.complex?.data.images ?? []"
    actionTitle="Выбрать квартиру"
    caption="Визуализация проекта предварительная, возможны изменения"
    @action="showMainFilter"
  />
</template>

<script setup lang="ts">
  import { useComplexOne } from '@/stores/pages/complex-one';

  const router = useRouter();
  const route = useRoute();
  const complexStore = useComplexOne();

  function showMainFilter() {
    router.push({
      path: '/main-filter',
      query: { filterType: 'flats' },
    });
  }
</script>
