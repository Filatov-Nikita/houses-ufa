<template>
  <PersonalData>
    <template #rank>
      <RankMonth type="b2t" />
    </template>
  </PersonalData>
</template>

<script setup lang="ts">
  import PersonalData from './components/PersonalData.vue';
  import RankMonth from '@/lk-modules/rank-month/index.vue';
  import { useClientProfile } from './store';

  const profile = useClientProfile();

  await useAsyncData(() => {
    return profile.showProfile();
  });
</script>
