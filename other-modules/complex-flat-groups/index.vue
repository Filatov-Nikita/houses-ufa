<template>
  <div class="complex-flat-groups">
    <Filter class="complex-flat-groups__filter" />
    <List />
  </div>
</template>

<script setup lang="ts">
  import Filter from './components/Filter.vue';
  import List from './components/List.vue';
  import { useComplexFlatGroups } from './store';

  const props = defineProps<{
    complexId: number,
  }>();

  const store = useComplexFlatGroups();
  const route = useRoute();

  store.setComplexId(props.complexId);

  onUnmounted(() => {
    store.currentType = 'all';
  });

  await useLazyAsyncData(() => store.show());
</script>

<style scoped lang="scss">
  .complex-flat-groups {
    &__filter {
      margin-bottom: 32px;

      @include lg {
        margin-bottom: 24px;
      }
    }
  }
</style>
