<template>
  <BaseSelect
    height="64px"
    theme="white"
    name="date"
    v-bind="selectProps(options)"
    :model-value="current"
    @update:model-value="updateValue"
  />
</template>

<script setup lang="ts">
  import { useArticlesFilter } from '../store';

  const filter = useArticlesFilter();

  function getOptions() {
    const today = new Date();
    const curYear = today.getFullYear();
    const list: number[] = [];

    for(let i = 0; i <= 5; i++) {
      list.push(curYear - i);
    }

    return list;
  }

  const options = computed(() => {
    return [
      { label: 'Все года' , value: null },
      ...getOptions()
      .map( year => ({ label: year.toString(), value: year.toString() }) ),
    ];
  });

  const current = computed(() => {
    return options.value.find((opts) => opts.value === filter.params.year_eq) ?? null
  });

  function updateValue(val: { label: string, value: string | null } | null) {
    filter.params.year_eq = val?.value ?? null;
  }

  function selectProps<T extends { label: string, value: string | null }>(options: T[]) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt.label,
        isActive: (opt: T, v: T | null) => opt.value === v?.value,
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v?.label || 'Все года',
      }
    };
  };
</script>
