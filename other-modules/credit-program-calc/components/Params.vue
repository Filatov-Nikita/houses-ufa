<template>
  <div class="credit-calc-params">
    <BaseSelect
      class="credit-calc-params__item"
      theme="gray"
      name="type"
      label="Программа"
      v-bind="selectProps(progs, 'name', 'id')"
      :model-value="currentProg"
      @update:model-value="updateCurrentProg"
    />
    <BaseRangeSingle
      class="credit-calc-params__item"
      theme="gray"
      :min="1000000"
      :max="20000000"
      name="total"
      label="Стоимость квартиры, ₽"
      :model-value="creditCalc.params.cost"
      @change="updateCost"
      @after-manipulate="updateCost"
    />
    <BaseRangeSingle
      class="credit-calc-params__item"
      theme="gray"
      :min="1"
      :max="20000000"
      name='priceMin'
      label='Первоначальный взнос, ₽'
      :model-value="creditCalc.params.initialPay"
      @change="updateInitialPay"
      @after-manipulate="updateInitialPay"
    />
    <BaseRangeSingle
      class="credit-calc-params__item"
      theme="gray"
      :min="1"
      :max="30"
      name='period'
      label='Срок кредита, лет'
      :model-value="creditCalc.params.period"
      @change="updatePeriod"
      @after-manipulate="updatePeriod"
    />
    <BaseButton class="credit-calc-params__item credit-calc-params__btn" @click="next">
      Запросить одобрение
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import { useCreditProgramCalc } from '../store';
  import { useCreditPrograms } from '@/stores/credit-programs';
  import { useCreditProgramCalc as useLkStore } from '@/lk-modules/credit-program-list/store';
  import { useAuthStore } from '@/stores/auth';

  const creditCalc = useCreditProgramCalc();
  const creditProg = useCreditPrograms();
  const lkStore = useLkStore();
  const router = useRouter();
  const authStore = useAuthStore();

  const progs = computed(() => creditProg.creditProgs?.data ?? []);

  const currentProg = computed(() => {
    return progs.value.find(prog => prog.id === creditCalc.groupId) ?? null;
  });

  function updateCurrentProg(val: { id: number, name: string }) {
    creditCalc.groupId = val.id;
  }

  function updateCost(val: number | null) {
    creditCalc.params.cost = val as number;
  }

  function updateInitialPay(val: number | null) {
    creditCalc.params.initialPay = val as number;
  }

  function updatePeriod(val: number | null) {
    creditCalc.params.period = val as number;
  }

  function selectProps<T extends Record<string, unknown>>(options: T[], labelKey: keyof T, valueKey: keyof T) {
    return {
      'drop-down-props': {
        getLabel: (opt: T) => opt[labelKey],
        isActive: (opt: T, v: T | null) => opt[valueKey] === v?.[valueKey],
        options,
      },
      'display-props': {
        getLabel: (v: T | null) => v?.[labelKey] || 'не выбрано',
      }
    };
  }

  function toB2C() {
    router.push({
      path: '/lk/b2c/apps/ipoteka',
      query: { id: creditCalc.objectId, type: creditCalc.objectType }
    });
  }

  function toB2T() {
    router.push({
      path: '/lk/b2t/favorites',
    });
  }

  function toB2Y() {
    router.push({
      path: '/lk/b2y',
    });
  }

  function toAuth() {
    authStore.openPopup = true;
  }

  function next() {
    if(creditCalc.objectId && creditCalc.objectType) {
      lkStore.params = { ...creditCalc.params };
      lkStore.groupId = creditCalc.groupId;
      const type = authStore.userType;
      switch(type) {
        case 'b2c': toB2C(); break;
        case 'b2t': toB2T(); break;
        case 'b2y': toB2Y(); break;
        default: toAuth();
      }
    } else {
      goDown();
    }
  }

  function goDown() {
    const el = document.querySelector('.question-form');
    if(el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
</script>

<style scoped lang="scss">
  .credit-calc-params {
    &__item + &__item {
      margin-top: 32px;
    }

    &__btn {
      width: 100%;
    }
  }
</style>
