<template>
  <button
    class="swiper-prev swiper-nav swiper-nav--left"
  >
    <BaseIcon class="swiper-nav__icon" name="back" />
  </button>
  <button
    class="swiper-next swiper-nav swiper-nav--right"
  >
    <BaseIcon class="swiper-nav__icon" name="forward" />
  </button>
</template>

<script setup lang="ts">

</script>
<style scoped lang="scss">
  .swiper-nav {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    padding: 8px;
    backdrop-filter: blur(4px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    @apply tw-bg-text01/40 tw-text-white;

    &:disabled {
      display: none;
    }

    &--left {
      left: 24px;
    }

    &--right {
      right: 24px;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
