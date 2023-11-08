<template>
  <List :list="list" />
</template>

<script setup lang="ts">
  import { list } from './data';
  import List from './components/List.vue';
</script>
