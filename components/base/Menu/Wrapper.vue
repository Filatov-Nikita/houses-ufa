<template>
  <slot v-bind="{ open, close, showed }" />
</template>

<script setup lang="ts">
  const showed = ref(false);

  function open() {
    showed.value = true;
  }

  function close() {
    showed.value = false;
  }
</script>
