<template>
  <Teleport to="body">
    <div v-if="!leaved" class="base-modal" :class="{
      'base-modal__full-mob': isFullMob
    }">
      <transition
        appear
        :enter-active-class="animate[0]"
        :leave-active-class="animate[1]"
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
    modelValue?: boolean,
    isFullMob?:boolean
  }

  const disallowScrollClass = 'tw-overflow-hidden';

  const props = withDefaults(defineProps<Props>(), {
    modelValue: true,
    isFullMob:false
  });

  const leaved = ref(!props.modelValue);
  const animate = ref([
    '',
    ''
  ])
  const updateWindow = ()=>{
    
    
    if(window.screen.width < 1024) animate.value=[
    'animate__animated anim-300ms animate__fadeInUp',
    'animate__animated anim-300ms animate__fadeOutDown'
    ]
    else animate.value = [
    'animate__animated anim-300ms animate__zoomIn',
    'animate__animated anim-300ms animate__zoomOut'
    ]
    
  }
  onMounted(() => {
    if(props.modelValue) {
      console.log(props.modelValue);
      
      scrollOff();
      updateWindow()
      window.addEventListener('resize',updateWindow)
    }
  });

  onUnmounted(() => {
    scrollOn();
    window.removeEventListener('resize',updateWindow)
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
    if(newVal) {
      scrollOff();
      updateWindow()
      window.addEventListener('resize',updateWindow)
    }
    else{ 
      window.removeEventListener('resize',updateWindow)
      scrollOn()};
  });

  watch(() => props.modelValue,  (newVal) => {
    if(newVal) leaved.value = false;
  });
</script>

<style lang="scss">
.base-modal__wrap > div {
  overflow: auto;
  pointer-events: all;
  will-change: scroll-position;
  max-height: calc(100vh - 32px);
  
}
.base-modal.base-modal__full-mob .base-modal__wrap > div {
  max-height: 100vh;
  @screen lg {
    max-height: calc(100vh - 32px);
  }
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
      padding: 32px 16px;
      display: grid;
      align-content: end;
      @screen lg {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 55px 24px;
      }

      @apply tw-inset-0;
    }
    &__full-mob &__wrap {
      padding: 0;
      @screen lg {
        padding: 55px 24px;
      }
    }
  }
  .overlay {
    position: absolute;
    background: rgba(0, 0, 0, 0.34);
    z-index: -1;
    @apply tw-inset-0;
  }
</style>
