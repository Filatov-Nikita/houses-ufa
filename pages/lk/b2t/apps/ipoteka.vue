<template>
  <IpotekaBlock />
</template>

<script setup lang="ts">
  import IpotekaBlock from '@/lk-modules/b2t/ipoteka/index.vue';

  definePageMeta({
    layout: 'lk-b2t',
    middleware: ['auth'],
  });
</script>
