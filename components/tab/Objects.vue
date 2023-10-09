<template>
  <div>
    <div class="tw-overflow-auto tw-mb-6 xl:tw-mb-8">
      <BaseTabsGroup v-model="tab" class="">
        <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
          {{ item.title }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
    <BaseTabsTabContent v-model="tab">
      <BaseTabsTabContentItem name="all" key="all">
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
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem
        name="apartmentsUfa"
        key="apartmentsUfa"
      ></BaseTabsTabContentItem>
      <BaseTabsTabContentItem
        name="apartmentsUfaDistrict"
        key="apartmentsUfaDistrict"
      ></BaseTabsTabContentItem>
      <BaseTabsTabContentItem
        name="cottagesTownhouses"
        key="cottagesTownhouses"
      ></BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>
<script lang="ts" setup>
const tab = ref('all')
const tabs = [
  {
    name: 'all',
    title: 'Все',
  },
  {
    name: 'apartmentsUfa',
    title: 'Квартиры в Уфе',
  },
  {
    name: 'apartmentsUfaDistrict',
    title: 'Квартиры в Уфимском районе',
  },
  {
    name: 'cottagesTownhouses',
    title: 'Коттеджи и таунхаусы',
  },
]
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
  @screen lg {
    @apply tw-grid-cols-2;
    .item:nth-child(1) {
      @apply tw-col-span-2;
    }
  }
  @screen xl {
    @apply tw-grid-cols-4;
    .item:nth-child(1) {
      @apply tw-col-span-3;
    }
    .item:nth-child(2) {
      @apply tw-col-span-1;
    }

    .item:nth-child(5) {
      @apply tw-col-span-2;
    }
    .item:nth-child(6) {
      @apply tw-col-span-2;
    }
    .item:nth-child(7) {
      @apply tw-col-span-2;
    }
  }
}
</style>
