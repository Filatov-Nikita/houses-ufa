export function useScrollToggle<T>(value: Ref<T>, disallowScrollClass = 'tw-overflow-hidden') {

  function scrollOff() {
    if(process.server) return;
    const body = document.body;
    if(!body.classList.contains(disallowScrollClass)) {
      body.classList.add(disallowScrollClass);
    }
  }

  function scrollOn() {
    if(process.server) return;
    const body = document.body;
    if(body.classList.contains(disallowScrollClass)) {
      body.classList.remove(disallowScrollClass);
    }
  }

  onMounted(() => {
    if(value.value) {
      scrollOff();
    }
  });

  onUnmounted(() => {
    scrollOn();
  });

  watch(value,  (newVal) => {
    if(newVal) scrollOff();
    else scrollOn();
  });

  return {
    scrollOff,
    scrollOn
  }
}
