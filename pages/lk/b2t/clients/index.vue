<template>
  <div>
    <ClientList />
  </div>
</template>

<script setup lang="ts">
  import ClientList from '@/lk-modules/b2t/client-list/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'ЖК ЛК агента | Клиенты',
  });
</script>
