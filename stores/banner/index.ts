import { defineStore } from 'pinia';

export interface Banner {
  title: string
  subtitle: string
  imgSrc: string
  readMoreHref: string
}

const useBannerStore = defineStore('bannerStore', () => {
  const banner = reactive(getBanner());

  return {
    banner
  }
});

function getBanner(): Banner {
  return {
    title: 'Дарим дизайн интерьера при покупке квартиры!',
    subtitle: 'до 30.11.23',
    imgSrc:
      '/images/banner.jpg',
    readMoreHref: '/articles/29',
  }
}

export { useBannerStore };
