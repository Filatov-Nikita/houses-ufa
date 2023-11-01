<template>
  <Filter />
  <Modal />
</template>

<script setup lang="ts">
  import Filter from './components/Filter.vue';
  import Modal from './components/Modal.vue';
  import { useEstateMiniFilter } from './store';

  const filter = useEstateMiniFilter();

  onUnmounted(() => {
    filter.showedModal = false;
    filter.clear();
  });
</script>
