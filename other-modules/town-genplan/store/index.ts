import type { Image } from '@/types/share'
import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

export const useTownGenplan = defineStore('townGenplan', () => {
  const townId = ref<number | null>(null);
  const showedLevel = ref(1);
  const showedBlockId = ref<number | null>(null);

  function setTownId(id: number) {
    townId.value = id;
  }

  function setShowedBlock(id: number) {
    showedBlockId.value = id;
  }

  const url = computed(() => `estate/towns/${townId.value}/master-plan`);

  const { data, pending: loading, execute: show } = useDataFetch<Response>(url, {
    immediate: false,
    watch: false,
  });

  return {
    data,
    loading,
    showedLevel,
    showedBlockId,
    show,
    setTownId,
    setShowedBlock,
  }
});

export interface Response {
  data: Data;
}

export interface Data {
  id:          number;
  master_plan: Image | null;
  blocks:      Block[];
}

export interface Block {
  id:                   number;
  town_plan_polygon:    string;
  name:                 string;
}
