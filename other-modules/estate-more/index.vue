<template>
  <div class="estate-more">
    <Item v-for="(item, index) in items" :key="item.id" :item="item" />
  </div>
</template>
<script lang="ts" setup>
import Item from './components/Item.vue'
const items = [
  {
    id: 1,
    location_tag: 'Фирма мир',
    marketing_tag: '-',
    priority: 1,
    subtitle: 'от 7 375 474 ₽',
    title: 'Сапфир',
    type: 'flats_in_ufa_city',
    url: 'https://gkufa.ru/complexes/sapfir',
    width_in_cols: 1,
    image: {
      id: 588,
      height: 748,
      size_in_bytes: 222468,
      url: 'https://adminsite.gkufa.ru/storage/media/588/1.jpg',
      width: 1344,
    },
  },
  {
    id: 2,
    location_tag: 'с. Зубово',
    marketing_tag: '-',
    priority: 1,
    subtitle: 'от 3 292 560 ₽',
    title: 'Зубово Life Garden',
    type: 'flats_in_ufa_district',
    url: 'https://gkufa.ru/complexes/zubovo-life-garden',
    width_in_cols: 1,
    image: {
      id: 589,
      height: 450,
      size_in_bytes: 85816,
      url: 'https://adminsite.gkufa.ru/storage/media/589/2.jpg',
      width: 478,
    },
  },
  {
    id: 3,
    location_tag: 'с. Зубово',
    marketing_tag: '-',
    priority: 1,
    subtitle: 'от 8 250 000 ₽',
    title: 'Зубово Life 3',
    type: 'cottages_and_townhouses',
    url: 'https://gkufa.ru/cottage-settlements/zubovo-life-3',
    width_in_cols: 1,
    image: {
      id: 590,
      height: 748,
      size_in_bytes: 65602,
      url: 'https://adminsite.gkufa.ru/storage/media/590/3.jpg',
      width: 656,
    },
  },
]
</script>
<style scoped lang="scss">
.estate-more {
  @apply tw-grid tw-gap-4;
  @apply lg:tw-grid-cols-3;
}
</style>
