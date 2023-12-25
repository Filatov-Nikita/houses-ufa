<template>
  <EstateBook />
</template>

<script setup lang="ts">
  import EstateBook from '@/lk-modules/b2c/book/index.vue';

  definePageMeta({
    layout: 'lk-client',
    middleware: ['auth'],
  });
</script>
