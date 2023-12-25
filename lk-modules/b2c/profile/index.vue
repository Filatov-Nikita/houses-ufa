<template>
  <div class="client-profile">
    <PersonalData class="client-profile__section" />
    <PassportData class="client-profile__section" />
  </div>
</template>

<script setup lang="ts">
  import PersonalData from './components/PersonalData.vue';
  import PassportData from './components/PassportData.vue';
  import { useClientProfile } from './store';

  const profile = useClientProfile();

  await useAsyncData(() => {
    return profile.showProfile();
  });
</script>

<style scoped lang="scss">
  .client-profile {
    &__section {
      & + & {
        margin-top: 20px;
      }
    }
  }
</style>
