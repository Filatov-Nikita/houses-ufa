declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $formatDate: (date: string) => string
  }
}

function withZero(num: number): string {
  return num < 10 ? `0${num}` : num.toString();
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$formatDate = (date: string) => {
    const dt = new Date(date);
    const m = withZero(dt.getMonth() + 1);
    const d = withZero(dt.getDate());
    const y = dt.getFullYear();
    return `${d}.${m}.${y}`;
  }
})
