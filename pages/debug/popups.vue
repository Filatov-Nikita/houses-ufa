<template>
  <div class="tw-grid tw-gap-2">
    <BaseButton @click="modalBankList = true"> Банки </BaseButton>
    <BaseButton @click="openPopupSections = true"> Раздел для faq </BaseButton>
    <BaseButton @click="openForm = true"> Форма </BaseButton>
    <BaseButton @click="openSorted = true"> Сортировка </BaseButton>
    <BaseButton @click="openMaterial = true"> Материал </BaseButton>
    <BaseButton @click="openTest = true"> Test </BaseButton>
    <BaseButton @click="openComplex = true">
      Отркыть карточку комплекса
    </BaseButton>
    <BaseButton @click="openParametrs = true">
      Отркыть карточку комплекса
    </BaseButton>
  </div>

  <!--start Банки-->
  <ModalsOther
    v-model="modalBankList"
    title="Выберите банк"
    :isFullMob="true"
    :forMob="true"
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
  <!--end Банки-->
  <!--start Раздел для faq-->
  <ModalsOther
    title="Выберите раздел"
    :isFullMob="true"
    v-model="openPopupSections"
  >
    <div class="tw-grid tw-gap-2">
      <BaseButton
        v-for="item in sectionsSellerList"
        theme="gray"
        class="active"
      >
        {{ item.name }}
      </BaseButton>
    </div>
  </ModalsOther>
  <!--end Раздел для faq-->

  <!--start Форма-->
  <ModalsForm v-model="openForm" />
  <!--end Форма-->

  <!--start Сортировка-->
  <ModalsOther title="Сортировать по" :isFullMob="true" v-model="openSorted">
    <div class="tw-grid tw-gap-2">
      <BaseButton
        v-for="item in sectionsSortedList"
        theme="gray"
        class="active"
      >
        {{ item.name }}
      </BaseButton>
    </div>
    <template #action-second>
      <div>
        <BaseButton @click="openSorted = false"> Применить </BaseButton>
      </div>
    </template>
  </ModalsOther>

  <!--end Сортировка-->

  <!--start Материал-->
  <BaseModal v-model="openMaterial" v-slot="{ hide }" class="lg:tw-hidden">
    <BaseModalCard v-bind="{ hide }">
      <div class="tw-grid">
        <h5 class="tw-text-h6 tw-mb-4">Крыша</h5>
        <p class="tw-text-body_s2 -tw-tracking-875 tw-mb-4">
          Фальцевая кровля домов выполнена из оцинкованного металлопрофиля
        </p>
        <p class="tw-text-text02 tw-text-body_xs tw-mb-6">
          Визуализация проекта предварительная, возможны изменения
        </p>
        <BaseButton theme="gray" @click="hide"> Закрыть </BaseButton>
      </div>
    </BaseModalCard>
  </BaseModal>
  <!--end Материал-->

  <!--start-->
  <ModalsOther
    title="Участок №28"
    :isFullMob="false"
    :isFull="true"
    v-model="openTest"
    :closeBtnMob="false"
    titlePos="tw-text-left"
  >
    <div class="tw-h-full tw-relative lg:tw-flex lg:tw-justify-center">
      <div class="lg:tw-absolute">tabs</div>
      <div
        class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-[311px] lg:tw-h-full lg:tw-w-[537px] xl:tw-w-[745px]"
      >
        <img
          src="/assets/images/img/Планировка квартиры.png"
          class="tw-object-contain tw-absolute tw-h-full tw-w-full"
        />
      </div>
    </div>
  </ModalsOther>
  <!--end-->
  <ModalsPlot v-model="openTest2" />
  <ModalsCottageCard v-model="openTest3" />

  <ModalsPhotos v-model="openTest4" />
  <ModalsVideo v-model="openTest5" />
  <ModalsComplex v-model="openComplex" />

  <ModalsOther
    title="Дополнительные фильтры"
    :isFullMob="true"
    v-model="openParametrs"
    titlePos="tw-text-left"
    class="!tw-h-screen lg:!tw-h-auto"
  >
    <template #default>
      <div class="tw-grid tw-gap-6 lg:tw-gap-8">
        <div>
          <div class="tw-text-text02">Комнатность</div>
          <div class="tw-grid tw-grid-cols-4 tw-gap-2">
            <BaseButton>
              <span class="lg:tw-hidden">С</span>
              <span class="tw-hidden lg:tw-inline"> Студия </span>
            </BaseButton>

            <BaseButton theme="gray">1</BaseButton>
            <BaseButton theme="gray">2</BaseButton>
            <BaseButton theme="gray">3+</BaseButton>
          </div>
        </div>
        <div class="tw-grid tw-gap-6 lg:tw-grid-cols-2 lg:tw-gap-4">
          <BaseRange
            v-bind="{
              min: 1,
              max: 30,
              name1: 'floor-to',
              name2: 'floor-from',
              label: 'Этаж',
            }"
          />
          <BaseRange
            v-bind="{
              min: 29,
              max: 120,
              name1: 'square-to',
              name2: 'square-from',
              label: 'Площадь, м²',
            }"
          />
        </div>
        <div>Спецпредложение</div>
      </div>
    </template>
    <template #action-second>
      <BaseButton> Применить</BaseButton>
    </template>
  </ModalsOther>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: false,
})
//Банки
const modalBankList = ref(false)
const selectBankList = ref([])
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

//Раздел для faq
const openPopupSections = ref(false)
const sectionsSellerList = [
  {
    id: 1,
    name: 'Ипотека',
  },
  {
    id: 2,
    name: 'Документы по сделке',
  },
  {
    id: 3,
    name: 'Обмеры БТИ',
  },
  {
    id: 4,
    name: 'Материнский капитал',
  },
  {
    id: 5,
    name: 'Налоги',
  },
]
//Форма
const openForm = ref(false)

//Сортировка
const openSorted = ref(false)
const sectionsSortedList = [
  {
    id: 1,
    name: 'Сначала дешевле',
  },
  {
    id: 2,
    name: 'Сначала дороже',
  },
  {
    id: 3,
    name: 'Сначала с большей площадью',
  },
  {
    id: 4,
    name: 'Сначала с меньшей площадью',
  },
  {
    id: 5,
    name: 'Сначала с большим еж. платежом',
  },
  {
    id: 6,
    name: 'Сначала с меньшим еж. платежом',
  },
]
//Материал
const openMaterial = ref(false)

//Test
const openTest = ref(false)
const openTest2 = ref(false)
const openTest3 = ref(false)
const openTest4 = ref(false)
const openTest5 = ref(false)
const openComplex = ref(false)
const openParametrs = ref(false)
</script>
<style lang="scss" scoped></style>
