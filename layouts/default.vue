<template>
  <div>
    <HeaderMain />
    <main class="tw-bg-white">
      <slot />
    </main>
    <FooterMain />
  </div>
</template>

<script setup lang="ts">
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'
</script>
