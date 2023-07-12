<template>
  <div>
    <HeaderMain />
    <main class="tw-bg-secondary">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderMain from "../components/layout/HeaderMain.vue";
</script>
