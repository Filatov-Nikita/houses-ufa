interface Slugs {
  complexes: Record<number, string>,
  towns: Record<number, string>,
}

export const useSlugsStore = defineStore('slugsStore', () => {
  const slugs = ref<Slugs | null>();

  const baseURL = useAppConfig().seoBase;

  const complexSlugIds = computed(() => {
    const newMap: Record<string, string> = {};
    const _slugs = slugs.value?.complexes ?? {};
    for(let key in _slugs) {
      newMap[_slugs[key]] = key;
    }
    return newMap;
  });

  const townSlugIds = computed(() => {
    const newMap: Record<string, string> = {};
    const _slugs = slugs.value?.towns ?? {};
    for(let key in _slugs) {
      newMap[_slugs[key]] = key;
    }
    return newMap;
  });

  async function getSlugs() {
    const { data, error } = await useFetch<Slugs>('slugs.json', { baseURL });
    if(!error.value) {
      slugs.value = data.value;
    }
  }

  return {
    slugs,
    townSlugIds,
    complexSlugIds,
    getSlugs,
  }
});
