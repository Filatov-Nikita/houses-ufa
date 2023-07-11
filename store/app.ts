import { defineStore } from 'pinia';

export const useAppStore = defineStore('appStore', {
  state: () => ({
    headerMenu: [],
    navSectionLinks: []
  }),
});
