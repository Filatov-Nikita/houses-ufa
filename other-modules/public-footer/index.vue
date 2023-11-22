<template>
  <Footer />
  <ConsultForm v-model:showed="store.showedForm" />
</template>

<script setup lang="ts">
  import Footer from './components/Footer.vue';
  import ConsultForm from '@/other-modules/consult-form/index.vue';
  import { usePublicFooter } from './store';

  const store = usePublicFooter();
</script>
