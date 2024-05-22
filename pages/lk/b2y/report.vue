<template>
  <ClosingDocsList class="tw-mb-5" />
  <AgentStat />
</template>

<script setup lang="ts">
  import AgentStat from '@/lk-modules/b2y/agent-stat/index.vue';
  import ClosingDocsList from '@/lk-modules/b2y/closing-docs-list/index.vue';

  definePageMeta({
    layout: 'lk-b2y',
    middleware: ['auth'],
  });

</script>
