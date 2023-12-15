const storageKey = 'favoritesList';

export function useFavoriteStorage() {
  let initialized = false;
  const items = ref<Item[]>([]);
  const activeItems = computed(() => items.value.filter(item => item.active));

  const flats = computed(() => {
    return activeItems.value.filter(flat => flat.type === 'flats');
  });

  const towns = computed(() => {
    return activeItems.value.filter(town => town.type === 'towns');
  });

  const parkings = computed(() => {
    return activeItems.value.filter(town => town.type === 'parkings');
  });

  const places = computed(() => {
    return activeItems.value.filter(town => town.type === 'places');
  });

  function addItem(item: Item) {
    if(hasItem(item.id, item.type)) return;
    items.value.push(item);
  }

  function removeItem(id: number, type: FavTypes) {
    if(!hasItem(id, type)) return;
    items.value = items.value.filter(item => item.id !== id || item.type !== type);
  }

  function hasItem(id: number, type: FavTypes) {
    return items.value.findIndex(item => item.id === id && item.type === type) !== -1;
  }

  function clearStorage() {
    items.value = [];
    localStorage.removeItem(storageKey);
  }

  function saveStorage() {
    localStorage.setItem(storageKey, JSON.stringify(activeItems.value));
  }

  function parseStorage(): void {
    const savedItems = localStorage.getItem(storageKey);
    if(savedItems !== null) {
      try {
        const parsedItems = JSON.parse(savedItems) as Item[];
        items.value = parsedItems;
      } catch(e) {
        clearStorage();
        items.value = [];
      }
    }
  }

  return {
    items,
    flats,
    towns,
    parkings,
    places,
    activeItems,
    initialized,
    addItem,
    removeItem,
    hasItem,
    clearStorage,
    parseStorage,
    saveStorage,
  }
}

export interface Item {
  id: number,
  type: FavTypes,
  active: boolean,
}

export type FavTypes = 'flats' | 'towns' | 'places' | 'parkings';
