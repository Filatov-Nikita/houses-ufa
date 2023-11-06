<template>
  <EstateImageFlat
    v-bind="$attrs"
    :planImages="planImages"
    fullscreen
    @showModalImg="showedModal = true"
  />
  <EstateImageModalView :title="title" v-model:showed="showedModal">
    <EstateImageFlat :planImages="planImages" />
  </EstateImageModalView>
</template>

<script setup lang="ts">
  interface Props {
    title: string,
    planImages: Array<string>,
  }

  defineProps<Props>();

  const showedModal = ref(false);
</script>
