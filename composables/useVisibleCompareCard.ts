export default function (parentEl: HTMLElement) {
  const compare = ref<HTMLElement>()
  const visibleEL = ref<HTMLElement>()
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
  onUpdated(() => {
    if (parentEl && visibleEL.value && isVisibleCompareAbsolute.value) {
      let observer = new IntersectionObserver(
        (entries, observer) => {
          if (entries[0].isIntersecting) {
            window.addEventListener('scroll', visibleCompare)
          } else {
            isVisibleCompareAbsolute.value = false
            window.removeEventListener('scroll', visibleCompare)
          }
        },
        {
          root: null,
          rootMargin: `-${visibleEL.value.offsetHeight}px 0px 0px 0px`,
          threshold: [0],
        }
      )
      observer.observe(parentEl)
    }
  })
  return { compare, isVisibleCompareAbsolute, visibleEL }
}
