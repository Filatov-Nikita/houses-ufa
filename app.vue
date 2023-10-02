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
<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import { storeToRefs } from 'pinia'
const appStore = useAppStore();

onMounted(async()=>{
  appStore.getZhkList()
})
</script>
