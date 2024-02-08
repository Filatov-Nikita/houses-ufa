<template>
  <IpotekaBlock />
</template>

<script setup lang="ts">
  import IpotekaBlock from '@/lk-modules/b2c/ipoteka/index.vue';

  definePageMeta({
    layout: 'lk-client',
    middleware: ['auth'],
  });

  useSeoMeta({
    title: 'Заявка на ипотеку',
  });
</script>
