<template>
  <div class="wrapper tw-py-4">
    <PublicHeader />
  </div>

  <main>
    <slot />
  </main>

  <div class="wrapper">
    <PublicFooter />
  </div>
</template>

<script setup lang="ts">
import PublicHeader from '@/other-modules/public-header/index.vue';
import PublicFooter from '@/other-modules/public-footer/index.vue';
import { useComplexesStore } from '@/stores/complexes';
import { useTownsStore } from '@/stores/towns';

const complexesStore = useComplexesStore();
const townsStore = useTownsStore();

useAsyncData(() => {
  return Promise.all([ complexesStore.show(), townsStore.show() ]);
});
</script>
