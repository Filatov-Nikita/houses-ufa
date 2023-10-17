<template>
  <div ref="contentRef">
    <ListControl class="tw-mb-8" />
    <EstateList />
  </div>
</template>

<script setup lang="ts">
  import ListControl from './ListControl.vue';
  import EstateList from './EstateList.vue';
</script>

<style scoped lang="scss">
  .filter-estate-list {
    margin: -16px -10px;
    @apply tw-flex tw-flex-wrap;

    &__card {
      width: calc(100% / 4 - 20px);
      margin: 16px 10px;
    }
  }
</style>
