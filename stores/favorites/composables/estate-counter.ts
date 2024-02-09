export interface Counter {
  estates: number,
  flats: number,
  lots: number,
  pantries: number,
}

export function useEstateCounter() {
  const counter = ref<Counter>({
    estates: 0,
    flats: 0,
    lots: 0,
    pantries: 0,
  });

  function setCounter(obj: Counter & { total: number }) {
    counter.value.estates = obj.estates;
    counter.value.flats = obj.flats;
    counter.value.lots = obj.lots;
    counter.value.pantries = obj.pantries;
  }

  const total = computed(() => {
    let sum = 0;
    Object.values(counter.value).forEach(v => sum += v);
    return sum;
  });

  return {
    total,
    counter,
    setCounter,
  }
}
