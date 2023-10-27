<template>
  <div>
    <Filter v-if="!disabledTabs" class="tw-mb-8" />
    <List />
    <PagBtn />
  </div>
</template>

<script setup lang="ts">
  import Filter from './components/Filter.vue';
  import List from './components/List.vue';
  import PagBtn from './components/PagBtn.vue';
  import { useProjectList } from './store';

  interface Props {
    excludeId?: number,
    disabledTabs?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    disabledTabs: false,
  });

  const store = useProjectList();

  store.type = 'all';
  store.executeId = undefined;

  await useAsyncData(() => {
    store.executeId = props.excludeId;
    return store.show();
  }, { lazy: true });
</script>
