<template>
  <div class="project-header">
    <BtnsGoBack />
    <div class="project-header__actions">
      <BtnsActionsShare />
      <BtnsActionsDownload />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
  .project-header {
    display: flex;
    justify-content: space-between;

    &__actions {
      display: flex;
      gap: 12px;
    }
  }
</style>
