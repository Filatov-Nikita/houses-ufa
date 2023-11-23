<template>
  <Header />
  <ConsultForm v-model:showed="store.showedForm" />
  <NavMenu :showed="store.showedNav" />
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import NavMenu from './components/Nav.vue';
  import ConsultForm from '@/other-modules/consult-form/index.vue';
  import { usePublicHeader } from './store';
  import { useRoute } from 'vue-router';

  const store = usePublicHeader();
  const route = useRoute();

  watch(route, () => {
    store.showedNav = false;
  });
</script>
