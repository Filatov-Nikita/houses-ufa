<template>
  <Teleport to="body">
    <Transition
      enter-active-class="animate__animated animate__fadeIn animate__fast"
      leave-active-class="animate__animated animate__fadeOut animate__fast"
    >
      <div class="modal" v-if="showed">
        <StepControl v-if="activeStep === 'control'" @close="close" @show:settings="activeStep = 'settings'" />
        <StepSettings v-else-if="activeStep === 'settings'"  @close="close" @show:control="activeStep = 'control'" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import StepControl from './StepControl.vue';
  import StepSettings from './StepSettings.vue';

  const showed = ref(localStorage.getItem('accept-cookie') === null);
  const activeStep = ref<'control' | 'settings'>('control');

  function close() {
    showed.value = false;
    localStorage.setItem('accept-cookie', '1');
  }
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    bottom: 24px;
    right: 0;
    max-width: 440px;
    width: 100%;
    z-index: 9000;
    padding: 24px;
    border-radius: 16px;
    box-shadow: -3px 2px 8px 0px rgba(0, 0, 0, 0.2);
    max-height: calc(100vh - 80px);
    overflow-x: hidden;
    @apply tw-bg-white tw-shadow-dark;
  }
</style>
