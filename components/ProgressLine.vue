<template>
  <div class="progress-line"></div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.progress-line {
  @apply tw-h-1 tw-rounded-lg tw-w-full tw-bg-base01 tw-relative tw-overflow-hidden;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;

    @apply tw-bg-primary tw-transition-width tw-duration-300 tw-ease-in;
  }
}
.progress-line.active:before {
  width: 100%;
}
</style>
