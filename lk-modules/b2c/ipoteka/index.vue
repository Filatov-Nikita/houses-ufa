<template>
  <div class="ipoteka-module">
    <BtnsGoBack class="ipoteka-module__back" />
    <h1 class="ipoteka-module__title">
      Заявка на ипотеку
    </h1>
    <FlatCard
      v-if="store.currentType === 'flat'"
      :id="store.currentId!"
    />
    <TownCard
      v-else-if="store.currentType === 'town'"
      :id="store.currentId!"
    />
    <PlaceCard
      v-else-if="store.currentType === 'parking' || store.currentType === 'place'"
      :id="store.currentId!"
      :type="store.currentType"
    />
    <StepForm class="ipoteka-module__form" />
  </div>
</template>

<script setup lang="ts">
  import FlatCard from '@/lk-modules/b2c/book/components/FlatCard.vue';
  import TownCard from '@/lk-modules/b2c/book/components/TownCard.vue';
  import PlaceCard from '@/lk-modules/b2c/book/components/PlaceCard.vue';
  import StepForm from './components/StepForm.vue'
  import { useIpotekaModule, type EstateTypes } from './store';
  import { useCreditProgramCalc } from '@/lk-modules/credit-program-list/store';

  const store = useIpotekaModule();
  const credit = useCreditProgramCalc();
  const route = useRoute();

  onUnmounted(() => {
    credit.offerIds = [];
  });

  watch(() => route.query.id, (id) => {
    if(id) store.setCurrentId(+id);
  }, { immediate: true });

  watch(() => route.query.type, (type) => {
    if(type) store.setCurrentType(type as EstateTypes);
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .ipoteka-module {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 40px;
      @apply tw-text-text00;
    }

    &__back {
      margin-bottom: 24px;
    }

    &__form {
      margin-top: 40px;
    }
  }
</style>
