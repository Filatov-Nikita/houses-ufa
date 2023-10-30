<template>
  <section>
    <div class="card-wrapper">
      <div class="section__top">
        <h2 class="section__title">Объекты застройщика «Жилой квартал»</h2>
      </div>
      <div class="complex-list">
        <CardsResidentialComplex
          class="item"
          v-for="item in residentialComplexs"
          :img="item.img"
          :title="item.title"
          :typeApartment="item.typeApartment"
          :price="item.price"
          :place="item.place"
          :status="item.status"
          :to="item.to"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
  middleware: ['auth'],
})
const residentialComplexs = [
  {
    img: 'images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
    to: '/complexes/3',
  },
  {
    img: 'images/home/objects/1.jpg',
    title: 'Гудвилл Парк',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
    to: '/',
  },
  {
    img: 'images/home/objects/2.jpg',
    title: 'Зубово Life Garden',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Зубово',
    status: 'Последние участки',
    to: '/complexes/4',
  },
  {
    img: 'images/home/objects/3.jpg',
    title: 'Михайловка Green 2',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
    to: '/',
  },
  {
    img: 'images/home/objects/4.png',
    title: 'Зубово Life 3',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Зубово',
    status: 'Последние участки',
    to: '/',
  },
  {
    img: 'images/home/objects/5.jpg',
    title: 'Михайловка Green Place',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Шмидтово',
    status: 'Последние участки',
    to: '/complexes/2',
  },
  {
    img: 'images/home/objects/6.jpg',
    title: 'Созвездие Цефей',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
    to: '/',
  },
]
</script>
<style lang="scss" scoped>
.complex-list {
  @apply tw-grid tw-gap-4;

  @screen xl {
    @apply tw-grid-cols-6;
    .item {
      @apply tw-col-span-2;
    }
    .item:nth-child(1) {
      @apply tw-col-span-4;
    }
    .item:nth-child(6) {
      @apply tw-col-span-3;
    }
    .item:nth-child(7) {
      @apply tw-col-span-3;
    }
  }
}
</style>
