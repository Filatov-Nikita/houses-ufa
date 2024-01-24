<template>
  <SupportList />
</template>

<script setup lang="ts">
  import SupportList from '@/lk-modules/b2c/support-list/index.vue';

  definePageMeta({
    layout: 'lk-client',
    middleware: ['auth'],
  });
</script>
