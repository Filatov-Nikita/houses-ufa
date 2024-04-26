<template>
  <div>
    <Profile class="tw-mb-5">
      <template #rank>
        <RankMonth type="b2y" />
      </template>
    </Profile>
    <StatMonth type="b2y" />
  </div>
</template>

<script setup lang="ts">
  import Profile from '@/lk-modules/b2y/profile/index.vue';
  import RankMonth from '@/lk-modules/rank-month/index.vue';
  import StatMonth from '@/lk-modules/stat-month/index.vue';

  definePageMeta({
    layout: 'lk-b2y',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'ЖК ЛК агентства | Профиль',
  });
</script>
