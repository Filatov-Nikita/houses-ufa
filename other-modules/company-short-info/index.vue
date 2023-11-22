<template>
  <div class="company-short-info">
    <Items />
    <VideoBlock class="company-short-info__video" />
  </div>
</template>

<script setup lang="ts">
  import Items from './components/Items.vue';
  import VideoBlock from './components/VideoBlock.vue';
</script>

<style scoped lang="scss">
  .company-short-info {
    &__video {
      margin-top: 20px;

      @include sm {
        margin-top: 16px;
      }
    }
  }
</style>
