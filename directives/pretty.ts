export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('pretty', {
    mounted: function (el: HTMLLinkElement, binding: any, vnode: any) {
      el.textContent = nuxtApp.vueApp.config.globalProperties.$formatValue(
        binding.value
      )
    },
  })
})
