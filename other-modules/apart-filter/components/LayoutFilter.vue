<template>
  <div class="filter-layout">
    <div class="filter-layout__left">
      <slot name="left" />
    </div>
    <div class="filter-layout__right">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
  .filter-layout {
    display: flex;
    column-gap: 40px;

    &__left {
      flex-basis: 420px;
    }

    &__right {
      flex-basis: 500px;
      min-width: 0px;
      flex-grow: 1;
    }
  }
</style>
