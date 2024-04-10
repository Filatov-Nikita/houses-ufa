export default function useTabs(initial: Ref<string>) {
  const current = ref<string>(initial.value);

  function getComplexKey(id: number) {
    return `complex.${id}`;
  }

  function getTownKey(id: number) {
    return `town.${id}`;
  }

  return {
    current,
    getComplexKey,
    getTownKey,
  }
}
