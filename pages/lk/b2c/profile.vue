<template>
  <ProfileClient />
</template>

<script setup lang="ts">
  import ProfileClient from '@/lk-modules/b2c/profile/index.vue';

  definePageMeta({
    layout: 'lk-client',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'Профиль',
  });
</script>
