<template>
  <div class="town-materials">
    <Filter class="town-materials__filter" />
    <Content />
  </div>
</template>

<script setup lang="ts">
  import { useTownMaterials } from './store';
  import Filter from './components/Filter.vue';
  import Content from './components/Content.vue';

  const store = useTownMaterials();
  const route = useRoute();

  store.setTownId(+route.params.id);

  function initFilter() {
    store.filterValue = store.data?.data[0].label ?? null;
  }

  await useLazyAsyncData(async () => {
    await store.show();
    initFilter();
  });
</script>

<style scoped lang="scss">
.town-materials {
  &__filter {
    margin-bottom: 32px;

    @include lg {
      margin-bottom: 24px;
    }
  }
}
</style>
