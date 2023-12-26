<template>
  <EstateImageFlat
    v-bind="$attrs"
    v-model:tabCurrent="tabCurrent"
    :planImages="planImages"
    :floorImage="floorImage"
    fullscreen
    @showModalImg="showedModal = true"
  />
  <EstateImageModalView :title="title" v-model:showed="showedModal">
    <EstateImageFlat :planImages="planImages"  :floorImage="floorImage" v-model:tabCurrent="tabCurrent" />
  </EstateImageModalView>
</template>

<script setup lang="ts">
  interface Props {
    title: string,
    planImages: Array<string>,
    floorImage: string | null,
  }

  defineProps<Props>();

  const showedModal = ref(false);
  const tabCurrent = ref('plan');
</script>
