<template>
  <transition
    leave-active-class="animate__animated anim-300ms animate__fadeOut"
    enter-active-class="animate__animated anim-300ms animate__fadeIn"
  >
    <div class="base-menu-children" v-if="showed">
      <div class="base-menu-children__back">
        <BaseMenuItem icon="back" label="Назад" @click="close" />
      </div>
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
  interface Props {
    close: () => void,
    showed: boolean,
  }

  withDefaults(defineProps<Props>(), { showed: false });
</script>

<style scoped lang="scss">
.base-menu-children {
  position: absolute;
  border-radius: 8px;
  padding: 8px;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  @apply tw-bg-white;

  &__back {
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid theme('colors.border00');
  }
}
</style>
