<template>
  <div class="agent-stat">
    <div class="agent-stat__toolbar">
      <h2 class="agent-stat__title">
        Мои агенты
      </h2>
      <BaseSelect
        class="progress-filter__select"
        theme="gray"
        label=""
        name="progress.month"
        v-bind="selectProps(periods)"
        v-model="period"
      />
    </div>
    <div class="scrol-area">
      <Table v-if="response" :items="response.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Table from './components/Table.vue';
  import type { AgentStatOne } from './types';

  interface PeriodOpt {
    label: string,
    value: {
      year: number,
      month: number,
    }
  }

  const months = [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ];

  const today = new Date();

  const periods = computed(() => {
    const year = today.getFullYear();
    const opts: PeriodOpt[] = [];
    for(let i = year; year - 5 <= i; i--) {
      months.forEach((month, index) => {
        opts.push({
          label: `${month}, ${i}`,
          value: {
            year: i,
            month: index + 1
          }
        });
      });
    }

    return opts;
  });

  const period = ref({
    label: `${months[today.getMonth()]}, ${today.getFullYear()}`,
    value: {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
    }
  });

  const query = computed(() => {
    return {
      month: period.value.value.month,
      year: period.value.value.year,
    }
  });

  const { data: response } = await useDataFetch<{ data: AgentStatOne[] }>('b2y/agents/statistics-by-month', {
    baseURL: useRuntimeConfig().public.rootApi,
    query,
  });

  function selectProps<T extends { label: string, value: PeriodOpt['value'] }>(options: T[]) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt.label,
        isActive: (opt: T, v: T | null) => opt.label === v?.label,
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v?.label || 'не выбрано',
      }
    };
  }
</script>

<style scoped lang="scss">
  .agent-stat {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    &__title {
      flex-grow: 1;
      @apply tw-text-2xl tw-text-text00;
    }
  }

  .scrol-area {
    overflow-y: hidden;
  }
</style>
