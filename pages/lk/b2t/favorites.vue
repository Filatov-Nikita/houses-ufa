<template>
  <FavoriteList />
</template>

<script setup lang="ts">
  import FavoriteList from '@/lk-modules/b2t/favorite-list/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  });
</script>
