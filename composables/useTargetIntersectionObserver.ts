export default function () {
  const scrollArea = ref<HTMLElement>()
  const isFixed = ref(true)
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 1],
  }
  onMounted(() => {
    console.log(scrollArea)
    if (scrollArea.value) {
      let observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].boundingClientRect.top > 0) {
          if (entries[0].isIntersecting) {
            isFixed.value = false
          } else {
            isFixed.value = true
          }
        }
      }, options)
      observer.observe(scrollArea.value)
    }
  })
  onUpdated(() => {
    if (scrollArea.value) {
      let observer = new IntersectionObserver((entries, observer) => {
        if (entries[0].boundingClientRect.top > 0) {
          if (entries[0].isIntersecting) {
            isFixed.value = false
          } else {
            isFixed.value = true
          }
        }
      }, options)
      observer.observe(scrollArea.value)
    }
  })
  return { scrollArea, isFixed }
}
