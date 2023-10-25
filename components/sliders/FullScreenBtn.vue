<template>
  <button class="slider-fullscreen-btn">
    <BaseIcon class="slider-fullscreen-btn__icon" name="fullscreen" />
  </button>
</template>

<style scoped lang="scss">
  .slider-fullscreen-btn {
    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
    backdrop-filter: blur(4px);
    background: rgba(79, 79, 79, 0.4);
    @apply tw-text-white;

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
