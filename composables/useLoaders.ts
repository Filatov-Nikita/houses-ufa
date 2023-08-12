import { useLoadersStore } from '@/stores/loaders';

export function useLoaders() {
  const loadersStore = useLoadersStore();

  function createLoader(description: string) {
    const key = description;

    const isActive = computed(() => {
      return loadersStore.contains(key);
    });

    function start() {
      loadersStore.append(key);
    }

    function end() {
      loadersStore.remove(key);
    }

    return {
      start,
      end,
      isActive,
      key
    }
  };

  return {
    createLoader,
    loaders: loadersStore.loaders,
    append: loadersStore.append,
    remove: loadersStore.remove,
    contains: loadersStore.contains,
    resetAll: loadersStore.resetAll,
  }
}
