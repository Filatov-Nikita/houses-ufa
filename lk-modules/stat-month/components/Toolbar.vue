<template>
  <div class="stat-tollbar">
    <h2 class="stat-tollbar__title">Статистика</h2>
    <div class="stat-tollbar__params">
      <BaseSelect
        class="stat-tollbar__month"
        name="month"
        :drop-down-props="{ options: monthOpts }"
        :model-value="curMonth"
        @update:modelValue="month = $event.value"
      />
      <BaseSelect
        class="stat-tollbar__year"
        name="year"
        :drop-down-props="{ options: yearOpts }"
        :model-value="curYear"
        @update:modelValue="year = $event.value"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getMonts } from '@/helpers';

  const year = defineModel<number>('year');
  const month = defineModel<number>('month');

  const yearOpts = computed(() => {
    const opts = [];
    const curYear = new Date().getFullYear();
    const minYear = curYear - 5;
    for(let i = curYear; minYear <= i; i--) {
      opts.push({ label: i, value: i });
    }
    return opts;
  });

  const monthOpts = computed(() => {
    return getMonts().map((m, i) => ({ label: m, value: i + 1 }));
  });

  const curYear = computed(() => {
    return yearOpts.value.find(y => y.value === year.value);
  });

  const curMonth = computed(() => {
    return monthOpts.value.find(m => m.value === month.value);
  });
</script>

<style scoped lang="scss">
  .stat-tollbar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    &__title {
      font-size: 32px;
      line-height: 1.3;
    }

    &__params {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__month {
      width: 155px;
    }

    &__year {
      width: 124px;
    }
  }
</style>
