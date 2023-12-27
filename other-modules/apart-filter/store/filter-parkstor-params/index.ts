import { defineStore } from 'pinia';
import { useParkStoreParams as useParams } from './composables/useParams';

const useParkStorParams = defineStore('placeFilterParams', () => {
  const params = useParams();
  return params;
});

export { useParkStorParams };
