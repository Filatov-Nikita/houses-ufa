<template>
  <div>
    <Profile />
  </div>
</template>

<script setup lang="ts">
  import Profile from '@/lk-modules/b2t/profile/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'ЖК ЛК агента | Профиль',
  });
</script>
