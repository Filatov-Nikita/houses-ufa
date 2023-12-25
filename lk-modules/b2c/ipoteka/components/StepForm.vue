<template>
  <div class="step-form">
    <LkProgress class="step-form__progress" :items="steps" :current="currentStep" />
    <KeepAlive>
      <CreditForm v-if="currentStep === 0" @next="onNext" />
      <PersonalDataForm
        v-else-if="currentStep === 1 && data"
        :passport="data.passport"
        :fullName="data.full_name"
        :phone="data.cellphone"
        @next="onNext"
      />
      <FinishStep
        v-else-if="currentStep === 2 && data"
        :profileData="data"
        @next="onNext"
        @prev="onPrev"
      />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
  import CreditForm from './CreditForm.vue';
  import PersonalDataForm from '@/lk-modules/b2c/book/components/PersonalDataForm.vue';
  import FinishStep from './FinishStep.vue';
  import { useClientProfile } from '@/lk-modules/b2c/profile/store';

  const profile = useClientProfile();

  const steps = [
    { label: 'Параметры ипотеки' },
    { label: 'Личные данные' },
    { label: 'Проверка данных' },
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
  .step-form {
    padding-top: 40px;
    border-top: 1px solid theme('colors.border00');

    &__progress {
      margin-bottom: 40px;
    }
  }
</style>
