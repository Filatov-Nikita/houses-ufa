<template>
  <SectionFirst
    :history-list="[
      { name: 'Главная', to: '/' },
      { name: 'Загородная недвижимость' },
    ]"
  >
    <template #title> Загородная недвижимость </template>
    <template #text> Коттеджи и таунхаусы </template>
    <template #icon>
      <img
        src="/images/icons/first-section/home.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>
  <section>
    <div class="tw-container">
      <div class="tw-grid tw-gap-6 lg:tw-gap-5 lg:tw-grid-cols-2">
        <NuxtLink v-for="item in listCountry" :to="item.to">
          <CardsCountryRealEstate
            :title="item.title"
            :place="item.place"
            :destance="item.place"
            :src="item.img"
            :status="item.status"
            :price="item.price"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
  <section>
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Ипотека</h2>
      </div>
      <div
        class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-3 xl:tw-grid-cols-4"
      >
        <NuxtLink v-for="item in listBank" :to="item.to">
          <CardsBank
            :logo="item.logo"
            :name="item.name"
            :perсent="item.percent"
            :monthly-payment="item.monthlyPayment"
            :program="item.program"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const listCountry = [
  {
    to: '/',
    img: '/images/img/country_real_estate.png',
    title: 'Малина',
    place: 'с. Михайловка',
    destance: '22 км от города',
    price: 'от 3 258 542 ₽',
    status: 'Последние участки',
  },
  {
    to: '/',
    img: '/images/img/country_real_estate.png',
    title: 'Малина',
    place: 'с. Михайловка',
    destance: '22 км от города',
    price: 'от 7 451 980 ₽',
    status: 'Последние участки',
  },
  {
    to: '/',
    img: '/images/img/country_real_estate.png',
    title: 'Зубово Life Garden',
    place: 'с. Михайловка',
    destance: '22 км от города',
    price: 'от 7 451 980 ₽',
    status: 'Последние участки',
  },
  {
    to: '/',
    img: '/images/img/country_real_estate.png',
    title: 'Михайловка Green 2',
    place: 'с. Михайловка',
    destance: '22 км от города',
    price: 'от 7 451 980 ₽',
    status: 'Последние участки',
  },
]
const listBank = [
  {
    to: '/',
    logo: '/images/icons/bank/sber.svg',
    name: 'ПАО Сбербанк',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/images/icons/bank/vtb.svg',
    name: 'Банк ВТБ (ПАО)',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/images/icons/bank/uralsib.svg',
    name: 'Ураслиб',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
  {
    to: '/',
    logo: '/images/icons/bank/alfa.svg',
    name: 'АО «Альфа-Банк»',
    percent: '5.8',
    monthlyPayment: '15659',
    program: 'Социальная',
  },
]
</script>
<style lang="scss" scoped></style>
