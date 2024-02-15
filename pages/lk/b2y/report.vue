<template>
  <AgentStat />
</template>

<script setup lang="ts">
  import AgentStat from '@/lk-modules/b2y/agent-stat/index.vue';

  definePageMeta({
    layout: 'lk-b2y',
    middleware: ['auth'],
  });

</script>
