<template>
  <slot v-if="showLoader" name="loader" />
  <slot v-else />
</template>

<script setup lang="ts">
  import { useLoadersStore } from '@/stores/loaders';

  interface Props {
    loaders?: string | string[],
    waiting?: boolean
  }

  const loadStore = useLoadersStore();

  const props = withDefaults(defineProps<Props>(), { waiting: undefined });

  const showLoader = computed<boolean>(() => {
    if(props.waiting !== undefined) {
      return props.waiting;
    } else if(props.loaders !== undefined) {
      let list: string[] = Array.isArray(props.loaders) ? props.loaders : [props.loaders];
      return list.some((loader => loadStore.contains(loader)));
    } else {
      return false;
    }
  });
</script>
