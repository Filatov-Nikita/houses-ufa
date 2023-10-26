<template>
  <div>
    <Filter v-if="!disabledTabs" class="tw-mb-8" />
    <List />
  </div>
</template>

<script setup lang="ts">
  import Filter from './components/Filter.vue';
  import List from './components/List.vue';
  import { useProjectList } from './store';

  withDefaults(
    defineProps<{ disabledTabs?: boolean }>(),
    { disabledTabs: false },
  );

  const store = useProjectList();

  await useAsyncData(() => {
    return store.show();
  }, { lazy: true });
</script>
