<template>
  <div>
    <HeaderMain />
    <main class="tw-flex tw-flex-col tw-gap-12 lg:tw-gap-20 xl:tw-gap-24">
      <slot />
    </main>
    <FooterMain class="tw-mt-12 lg:tw-mt-20 xl:tw-mt-24" />
  </div>
</template>

<script setup lang="ts">
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'
</script>
