<template>
  <div>
    <Profile class="tw-mb-5" />
    <StatMonth type="b2t" />
  </div>
</template>

<script setup lang="ts">
  import Profile from '@/lk-modules/b2t/profile/index.vue';
  import StatMonth from '@/lk-modules/stat-month/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'ЖК ЛК агента | Профиль',
  });
</script>
