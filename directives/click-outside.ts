export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted: function (el: any, binding: any, vnode: any) {
      el.clickOutsideEvent = function (event: any) {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted: function (el: any) {
      document.removeEventListener('click', el.clickOutsideEvent)
    },
  });
});
