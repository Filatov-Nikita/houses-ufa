import { useDataFetch } from '@/composables/useDataFetch';
import { defineStore } from 'pinia';

export const useFaq = defineStore('faq', () => {
  const filterType = ref<'buyer' | 'owner'>('buyer');
  const currentSectionId = ref<number | null>(null);

  function setCurrentSectionId(id: number) {
    currentSectionId.value = id;
  }

  const { data: sectionList, pending, execute: showSections } = useDataFetch<Response>('press-center/faq/sections', {
    immediate: false,
    watch: false,
  });

  const filtredSectionList = computed(() => {
    if(!sectionList.value) return [];
    return sectionList.value.data.filter(section => section.target === filterType.value);
  });

  return {
    sectionList,
    filtredSectionList,
    filterType,
    currentSectionId,
    showSections,
    setCurrentSectionId,
  }
});

export interface Response {
  data: OneSection[];
}

export interface OneSection {
  id:       number;
  name:     string;
  priority: number;
  target:   'buyer' | 'owner';
}
