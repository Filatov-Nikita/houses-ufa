<template>
  <div class="book-personal">
    <LkProgress class="book-personal__progress" :items="steps" :current="currentStep" />
    <KeepAlive v-if="data">
      <PersonalDataForm
        v-if="currentStep === 0"
        :passport="data.passport"
        :fullName="data.full_name"
        :phone="data.cellphone"
        @next="onNext"
      />
      <PersonalDataShow
        v-else-if="currentStep === 1"
        :profileData="data"
        @prev="onPrev"
      />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
  import PersonalDataForm from './PersonalDataForm.vue';
  import PersonalDataShow from './PersonalDataShow.vue';
  import { useClientProfile } from '@/lk-modules/b2c/profile/store';

  const profile = useClientProfile();

  const steps = [
    { label: 'Личные данные' }, { label: 'Проверка данных' },
  ];

  const currentStep = ref(0);

  function onNext() {
    currentStep.value++;
  }

  function onPrev() {
    currentStep.value--;
  }

  await profile.showProfile();

  const data = computed(() => profile.profileData?.data);
</script>

<style scoped lang="scss">
  .book-personal {
    padding-top: 40px;
    border-top: 1px solid theme('colors.border00');

    &__progress {
      margin-bottom: 40px;
    }
  }
</style>
