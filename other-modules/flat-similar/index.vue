<template>
  <List />
</template>

<script setup lang="ts">
  import List from './components/List.vue';
  import { useFlatSimilar } from './store';

  const store = useFlatSimilar();
  const route = useRoute();

  store.setFlatId(+route.params.id);

  await useLazyAsyncData(() => store.show());
</script>
