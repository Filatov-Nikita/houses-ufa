<template>
  <div class="book-personal">
    <LkProgress class="book-personal__progress" :items="steps" :current="currentStep" />
    <KeepAlive v-if="data">
      <PersonalDataForm
        v-if="currentStep === 0"
        :passport="data.consumer.passport"
        :fullName="data.consumer.full_name"
        :phone="data.consumer.cellphone"
        @next="onNext"
      />
      <PersonalDataShow
        v-else-if="currentStep === 1"
        :profileData="data.consumer"
        @prev="onPrev"
      />
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
  import PersonalDataForm from './PersonalDataForm.vue';
  import PersonalDataShow from './PersonalDataShow.vue';
  import { useClientProfile } from '../store';

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
