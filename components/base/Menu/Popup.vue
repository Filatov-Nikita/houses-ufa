<template>
  <div class="tw-relative">
    <slot v-bind="exposed" />

    <transition
      leave-active-class="animate__animated anim-300ms animate__fadeOut"
      enter-active-class="animate__animated anim-300ms animate__fadeIn"
    >
      <div
        v-if="showed"
        v-click-outside="outside"
        class="popup tw-absolute tw-left-0 tw-top-full tw-z-[9900] tw-translate-y-2"
      >
        <slot name="popup" v-bind="exposed" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  const showed = ref(false);

  function open() {
    showed.value = true;
  }

  function close() {
    showed.value = false;
  }

  function toggle() {
    showed.value = !showed.value;
  }

  function outside() {
    close();
  }

  const exposed = {
    showed,
    open,
    close,
    toggle
  }
</script>
