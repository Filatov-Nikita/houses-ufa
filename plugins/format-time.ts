export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$formatTime = (time: string) => {
    const create = new Date(time)
    return `${create.getDate()}.${
      String(create.getMonth()).length == 1
        ? '0' + create.getMonth()
        : create.getMonth()
    }.${create.getFullYear()}`
  }
})
