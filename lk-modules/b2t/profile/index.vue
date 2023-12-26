<template>
  <PersonalData />
</template>

<script setup lang="ts">
  import PersonalData from './components/PersonalData.vue';
  import { useClientProfile } from './store';

  const profile = useClientProfile();

  await useAsyncData(() => {
    return profile.showProfile();
  });
</script>
