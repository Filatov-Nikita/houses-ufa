<template>
  <div>Найдено {{ countLabel }}</div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    total: number | null,
    cases: [string, string, string],
  }>();

  function plural(val: number, single: string, plur: string, plur2: string): string {
    val = Math.abs(val);
    if(val % 10 === 0) return plur2;
    if(val % 100 > 10 && val % 100 < 20) return plur2;
    if(val % 10 === 1) return single;
    if(val % 10 > 1 && val % 10 < 5) return plur;
    return plur2;
  }

  const countLabel = computed(() => {
    if(typeof props.total !== 'number') return '-';
    const planLabel = plural(props.total, ...props.cases);
    return `${props.total} ${planLabel}`;
  });
</script>
