import { defineStore } from 'pinia';
import { useParkStoreParams as useParams } from './composables/useParams';

const useParkStorParams = defineStore('filterParams', () => {
  const params = useParams();
  return params;
});

export { useParkStorParams };
