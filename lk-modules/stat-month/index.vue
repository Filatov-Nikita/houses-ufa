<template>
  <div class="page-card">
    <Toolbar
      class="page-card__toolbar"
      v-model:month="month"
      v-model:year="year"
    />
    <Items :data="data" />
  </div>
</template>

<script setup lang="ts">
  import { useStat } from './composables/useStat';
  import Items from './components/Items.vue';
  import Toolbar from './components/Toolbar.vue';

  const props = defineProps<{
    type: 'b2t' | 'b2y',
  }>();

  const dt = new Date();
  const year = ref(dt.getFullYear());
  const month = ref(dt.getMonth() + 1);

  const query = computed(() => {
    return {
      year: year.value,
      month: month.value,
    }
  });

  const { stat, showStat } = useStat(props.type, query);

  const data = computed(() => stat.value?.data ?? null);

  showStat();
</script>

<style scoped lang="scss">
  .page-card {
    &__toolbar {
      margin-bottom: 32px;
    }
  }
</style>
