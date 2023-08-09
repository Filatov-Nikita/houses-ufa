<template>
  <svg aria-hidden="true" :class="{ 'tw-w-full': fit, 'tw-h-full': fit }">
    <use :href="symbolId" :class="classes" :fill="fill"></use>
  </svg>
</template>

<script setup lang="ts">
  interface Props {
    prefix?: string,
    name: string,
    color?: string,
    fit?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    prefix: 'icon',
    fit: false
  });

  const classes = computed(() => {
    const list: string[] = [];

    if(props.color && props.color.startsWith('tw-fill-')) {
      list.push(props.color);
    }

    return list.length === 0 ? undefined : list;
  });

  const fill = computed(() => {
    if(props.color && props.color.startsWith('#')) return props.color;
    return !classes.value ? 'currentColor' : undefined;
  });

  const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<style scoped lang="scss">

</style>
