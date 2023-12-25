<template>
  <div>
    <BaseSkeleton
      v-if="profile.loadingProfile"
      class="tw-h-[200px] tw-rounded-2xl tw-w-full"
    />
    <PassportForm
      v-else-if="data && profile.editPassport === true"
      :passport="data.passport"
    />
    <PassportDataShow
      v-else-if="data && data.passport && profile.editPassport === false"
      :passport="data.passport"
    />
    <PassportEmpty v-else />
  </div>
</template>

<script setup lang="ts">
  import PassportDataShow from './PassportDataShow.vue';
  import PassportEmpty from './PassportEmpty.vue';
  import PassportForm from './PassportForm.vue';
  import { useClientProfile } from '../store';

  const profile = useClientProfile();

  const data = computed(() => {
    return profile.profileData?.data;
  });

  onUnmounted(() => {
    profile.editPassport = false;
  });
</script>

<style scoped lang="scss">
</style>
