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
