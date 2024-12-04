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

  <Auth />
</template>

<script setup lang="ts">
import PublicHeader from '@/other-modules/public-header/index.vue';
import PublicFooter from '@/other-modules/public-footer/index.vue';
</script>
