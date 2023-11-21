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
    title: 'Тайтл 1',
    subtitle: 'Тайтл 2',
    imgSrc:
      'https://img.freepik.com/free-photo/high-angle-man-holding-corn-dog_23-2149929396.jpg?w=1480&t=st=1691951496~exp=1691952096~hmac=205e6f6ab8ba631d94e5d8cc2e6df35b747ec980e956e52aeda3e78b928e618c',
    readMoreHref: '/',
  }
}

export { useBannerStore };
