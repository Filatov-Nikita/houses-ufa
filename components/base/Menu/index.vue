<template>
  <div class="base-menu">
    <slot />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .base-menu {
    width: 208px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07);
    padding: 8px;
    position: relative;
    border-radius: 8px;
    @apply tw-bg-white;
  }
</style>
