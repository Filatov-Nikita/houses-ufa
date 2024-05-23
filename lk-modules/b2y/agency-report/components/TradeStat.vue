<template>
  <article class="trade-stat">
    <p class="trade-stat__label">Сумма сделок за {{ curMonth }}</p>
    <div class="trade-stat__value">
      <span>{{ $amount(currentStat?.total_paid_count ?? 0) }}</span>
      <span
        v-if="diff !== 0"
        class="trade-stat__diff"
        :class="{
          'trade-stat__diff--positive': diff > 0,
          'trade-stat__diff--negative': diff < 0,
        }"
      >
        {{ diff > 0 ? `+${diff}` : diff }}% {{ prevMonth }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { Stat } from '@/lk-modules/stat-month/types';
  import { getMonts } from '@/helpers';

  const props = defineProps<{
    currentStat?: Stat,
    prevStat?: Stat,
  }>();

  function getMonth(date: string) {
    const list = getMonts();
    const dt = new Date(date);
    return list[dt.getMonth()];
  }

  const curMonth = computed(() => {
    if(!props.currentStat) return '';
    return getMonth(props.currentStat.first_day_of_month).toLowerCase();
  });

  const prevMonth = computed(() => {
    if(!props.prevStat) return '';
    return getMonth(props.prevStat.first_day_of_month).toLowerCase();
  });

  const diff = computed(() => {
    const prev = props.prevStat;
    const cur = props.currentStat;
    if(!cur || !prev) return 0;
    if(prev.total_paid_count === 0) return 0;
    const perc = (cur.total_paid_count * 100 / prev.total_paid_count) - 100;
    return perc;
  });
</script>

<style scoped lang="scss">
  .trade-stat {
    border-radius: 16px;
    padding: 24px;
    @apply tw-bg-base00;

    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__value {
      display: flex;
      gap: 8px;
      @apply tw-text-2xl tw-text-text00;
    }

    &__diff {
      font-size: 14px;
      line-height: 1.8;

      &--positive {
        @apply tw-text-primary;
      }

      &--negative {
        @apply tw-text-error;
      }
    }
  }
</style>
