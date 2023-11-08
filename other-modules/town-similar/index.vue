<template>
  <List />
</template>

<script setup lang="ts">
  import List from './components/List.vue';
  import { useTownSimilar } from './store';

  const store = useTownSimilar();
  const route = useRoute();

  store.setTownId(+route.params.id);

  await useLazyAsyncData(() => store.show());
</script>
