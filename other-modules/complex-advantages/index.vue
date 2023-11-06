<template>
  <EstateAdvantages :items="items" action-label="Выбрать квартиру" @action="toMainFilter" />
</template>

<script setup lang="ts">
  import { useComplexAdvantages } from './store';
  const route = useRoute();
  const router = useRouter();
  const store = useComplexAdvantages();

  store.setComplexId(+route.params.id);

  await useLazyAsyncData(() => {
    return store.show();
  });

  const items = computed(() => store.advantages?.data ?? []);

  function toMainFilter() {
    router.push({
      path: '/main-filter',
      query: { filterType: 'flats', object_id: +route.params.id }
    });
  }
</script>
