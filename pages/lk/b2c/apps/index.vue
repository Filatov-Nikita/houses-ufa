<template>
  <div>
    <AppList />
  </div>
</template>

<script setup lang="ts">
  import AppList from '@/lk-modules/b2c/app-list/index.vue';

  definePageMeta({
    layout: 'lk-client',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'Мои заявки',
  });
</script>
