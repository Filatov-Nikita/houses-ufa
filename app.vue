<template>
  <div>
    <ClientOnly>
      <BaseNotify />
    </ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
  @use './assets/css/main.scss';
</style>
