import { defineStore } from 'pinia';
import { useFlatParams as useParams } from './composables/useParams';

const useFlatParams = defineStore('filterFlatsParams', () => {
  const params = useParams();
  return params;
});

export { useFlatParams };
