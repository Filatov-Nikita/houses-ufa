export default function () {
  const compare = ref<HTMLElement>()
  const isVisibleCompareAbsolute = ref(false)
  const visibleCompare = () => {
    if (compare.value) {
      const compareCoords = compare.value.getBoundingClientRect()
      if (window.scrollY + compareCoords.bottom < window.scrollY) {
        if (!isVisibleCompareAbsolute.value)
          isVisibleCompareAbsolute.value = true
      } else {
        if (isVisibleCompareAbsolute.value)
          isVisibleCompareAbsolute.value = false
      }
    }
  }
  onMounted(() => {
    if (compare.value) {
      window.addEventListener('scroll', visibleCompare)
    }
  })
  return { compare, isVisibleCompareAbsolute }
}
