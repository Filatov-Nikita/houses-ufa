<template>
  <EstateImageTown
    v-bind="$attrs"
    planFullscreen
    :renderImages="renderImages"
    :planImages="planImages"
    v-model:tabCurrent="tabImage"
    v-model:currentFloor="currentFloor"
    @showPlanImg="showedModal = true"
  />
  <EstateImageModalView :title="title" v-model:showed="showedModal">
    <EstateImageTown
      :planFullscreen="false"
      :renderImages="renderImages"
      :planImages="planImages"
      v-model:currentFloor="currentFloor"
      v-model:tabCurrent="tabModal"
    />
  </EstateImageModalView>
</template>

<script setup lang="ts">
  interface Props {
    title: string,
    renderImages: Array<string>,
    planImages: Array<string>,
  }

  defineProps<Props>();

  const tabImage = ref('render');
  const tabModal = ref('plan');
  const showedModal = ref(false);
  const currentFloor = ref(0);
</script>
