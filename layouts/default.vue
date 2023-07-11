<template>
  <div>
    <HeaderMain />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
  import HeaderMain from '../components/layout/HeaderMain.vue';
</script>
