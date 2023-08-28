<template>
  <div class="card-ipoteka">
    <form class="tw-grid tw-gap-8 tw-content-start">
      <BaseBaseSelect
        label="Жилой комплекс"
        name="test"
        :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
        v-model="zhk"
      />
      <div class="tw-grid tw-grid-cols-2 tw-gap-5">
        <BaseBaseSelect
          label="Подъезд"
          name="test"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
          v-model="entrance"
        />
        <BaseBaseSelect
          label="Литер"
          name="test"
          :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
          v-model="letter"
        />
      </div>
      <BaseBaseSelect
        label="Программа"
        name="test"
        :drop-down-props="{ options: [{ label: 'test 1', value: '1' }] }"
        v-model="program"
      />
      <div class="lg:tw-hidden">
        <BaseButton
          type="button"
          class="tw-w-full"
          @click="modalBankList = true"
        >
          Получить предложения от банков
        </BaseButton>
      </div>
      <div class="tw-hidden lg:tw-block">
        <BaseButton type="submit" class="tw-w-full"
          >Запросить одобрение</BaseButton
        >
      </div>
    </form>

    <div
      class="tw-hidden lg:tw-grid lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-5 tw-pr-5 tw-overflow-auto"
    >
      <BaseCheckboxSlot
        v-for="(item, index) in listBank"
        :key="index"
        v-model="selectBankList"
        :value="item.name"
        name="bank"
        v-slot="{ checked }"
      >
        <CardsBank
          :active="checked"
          :logo="item.logo"
          :name="item.name"
          :perсent="item.percent"
          :monthly-payment="item.monthlyPayment"
          :program="item.program"
        />
      </BaseCheckboxSlot>

      <ModalsOther
        v-model="modalBankList"
        title="Выберите банк"
        :isFull="true"
        class="!tw-h-[90vh]"
      >
        <template #default>
          <div class="tw-grid tw-gap-4">
            <BaseCheckboxSlot
              v-for="(item, index) in listBank"
              :key="index"
              v-model="selectBankList"
              :value="item.name"
              name="bank"
              v-slot="{ checked }"
            >
              <CardsBank
                :active="checked"
                :logo="item.logo"
                :name="item.name"
                :perсent="item.percent"
                :monthly-payment="item.monthlyPayment"
                :program="item.program"
              />
            </BaseCheckboxSlot>
          </div>
        </template>
        <template #action>
          <BaseButton
            :disabled="selectBankList.length === 0 ? true : false"
            type="button"
            class="tw-w-full"
            >Запросить одобрение</BaseButton
          >
        </template>
      </ModalsOther>
    </div>
  </div>
</template>
<script lang="ts" setup>
type NumOrNull = number | null
type ModelValue = [NumOrNull, NumOrNull] | null
const initial = ref<ModelValue>([29, 22])
const zhk = ref({ label: 'Михайловка Green Place', value: '1' })
const entrance = ref({ label: '2', value: '2' })
const letter = ref({ label: '1', value: '1' })
const program = ref({ label: 'Все', value: '1' })
const selectBankList = ref([])
const modalBankList = ref(false)
const listBank = [
  {
    to: '/',
    logo: '/assets/images/icons/bank/sber.svg',
    name: 'ПАО Сбербанк',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/vtb.svg',
    name: 'Банк ВТБ (ПАО)',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/uralsib.svg',
    name: 'Ураслиб',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/alfa.svg',
    name: 'АО «Альфа-Банк»',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/uralsib.svg',
    name: 'Ураслиб',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/alfa.svg',
    name: 'АО «Альфа-Банк»',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/uralsib.svg',
    name: 'Ураслиб',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/alfa.svg',
    name: 'АО «Альфа-Банк»',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/uralsib.svg',
    name: 'Ураслиб',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/assets/images/icons/bank/alfa.svg',
    name: 'АО «Альфа-Банк»',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
]
</script>
<style lang="scss" scoped>
.card-ipoteka {
  @apply tw-bg-white tw-rounded-2xl tw-px-4 tw-py-6 lg:tw-p-6 xl:tw-p-10 lg:tw-h-[792px] xl:tw-h-[1032px] tw-grid lg:tw-grid-cols-[288px_1fr] xl:tw-grid-cols-[400px_1fr] tw-content-start tw-gap-5;
}
</style>
