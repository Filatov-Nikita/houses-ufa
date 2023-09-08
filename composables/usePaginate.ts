export function usePaginate(currentCount: number, total: number, step: number) {
  const countShow = computed(() => {
    if (total - currentCount <= step) return total - currentCount
    return step
  })

  return {
    countShow,
  }
}
