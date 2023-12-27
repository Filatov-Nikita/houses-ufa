<template>
  <EstateBook />
</template>

<script setup lang="ts">
  import EstateBook from '@/lk-modules/b2t/book/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  });
</script>
