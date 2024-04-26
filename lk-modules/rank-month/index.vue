<template>
  <div class="rank-month">
    <p class="rank-month__title">Рейтинг за {{ periodLabel }}</p>
    <p class="rank-month__result">
      <span>{{ data?.rank ?? '-' }}</span><span class="rank-month__total"> / {{ data?.total ?? '-' }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
  import { useRank } from './composables/useRank';

  const props = defineProps<{
    type: 'b2y' | 'b2t',
  }>();

  const { rank, showRank } = useRank(props.type);

  const data = computed(() => rank.value?.data);

  const periodLabel = computed(() => {
    if(!data.value) return '-';
    const dt = new Date(data.value.actual_month);
    return dt.toLocaleString(undefined, { month: 'long' });
  });

  showRank();
</script>

<style scoped lang="scss">
  .rank-month {
    padding: 16px 24px;
    border-radius: 16px;
    @apply tw-bg-base00;

    &__title {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__result {
      @apply tw-text-2xl tw-text-text00;
    }

    &__total {
      @apply tw-text-text02
    }
  }
</style>
