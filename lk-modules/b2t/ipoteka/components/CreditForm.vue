<template>
  <div class="credit-form">
    <CreditList />
    <BaseButton class="credit-form__action" @click="next">Продолжить</BaseButton>
  </div>
</template>

<script setup lang="ts">
  import CreditList from '@/lk-modules/credit-program-list/index.vue';
  import { useCreditProgramCalc } from '@/lk-modules/credit-program-list/store';
  import { useNotifyStore } from '@/stores/notify';

  const store = useCreditProgramCalc();
  const notify = useNotifyStore();

  const emit = defineEmits<{
    (event: 'next'): void,
  }>();

  function next() {
    if(store.offerIds.length === 0) {
      notify.create({ type: 'error', message: 'Выберите хотя бы одну программу, чтобы продолжить' });
    } else {
      emit('next');
    }
  }
</script>

<style scoped lang="scss">
  .credit-form {
    &__action {
      margin-top: 40px;
    }
  }
</style>
