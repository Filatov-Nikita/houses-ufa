<template>
  <Teleport to="body">
    <div v-if="!leaved" class="base-modal">
      <transition
        appear
        enter-active-class="animate__animated anim-300ms animate__zoomIn"
        leave-active-class="animate__animated anim-300ms animate__zoomOut"
        @after-leave="leaved = true"
      >
        <div class="base-modal__wrap" v-if="modelValue">
          <slot v-bind="{ hide }" />
        </div>
      </transition>
      <div v-if="!leaved" class="overlay" @click="hide"></div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  interface Props {
    modelValue?: boolean
  }

  const disallowScrollClass = 'tw-overflow-hidden';

  const props = withDefaults(defineProps<Props>(), {
    modelValue: true,
  });

  const leaved = ref(!props.modelValue);

  onMounted(() => {
    if(props.modelValue) {
      scrollOff();
    }
  });

  onUnmounted(() => {
    scrollOn();
  });

  const emit = defineEmits<{
    (event: 'update:modelValue', val: boolean): void
  }>();

  function hide() {
    emit('update:modelValue', false);
  }

  function scrollOff() {
    if(process.server) return;
    const body = document.body;
    if(!body.classList.contains(disallowScrollClass)) {
      body.classList.add(disallowScrollClass);
    }
  }

  function scrollOn() {
    if(process.server) return;
    const body = document.body;
    if(body.classList.contains(disallowScrollClass)) {
      body.classList.remove(disallowScrollClass);
    }
  }

  watch(() => props.modelValue,  (newVal) => {
    if(newVal) scrollOff();
    else scrollOn();
  });

  watch(() => props.modelValue,  (newVal) => {
    if(newVal) leaved.value = false;
  });
</script>

<style>
.base-modal__wrap > div {
  overflow: auto;
  max-height: calc(100vh - 32px);
  pointer-events: all;
  will-change: scroll-position;
}
</style>

<style scoped lang="scss">
  .base-modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 9900;

    &__wrap {
      pointer-events: none;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px;
      @apply tw-inset-0;
    }
  }
  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.34);
    z-index: -1;
    @apply tw-inset-0;
  }
</style>
