<template>
  <EstateAdvantages :items="items" action-label="Выбрать квартиру" @action="toMainFilter" />
</template>

<script setup lang="ts">
  import { useComplexAdvantages } from './store';

  const props = defineProps<{
    complexId: number,
  }>();

  const route = useRoute();
  const router = useRouter();
  const store = useComplexAdvantages();

  store.setComplexId(props.complexId);

  await useLazyAsyncData(() => {
    return store.show();
  });

  const items = computed(() => store.advantages?.data ?? []);

  function toMainFilter() {
    router.push({
      path: '/main-filter',
      query: { filterType: 'flats', object_id: props.complexId }
    });
  }
</script>
