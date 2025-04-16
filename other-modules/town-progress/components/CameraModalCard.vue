<template>
  <BaseModalCard class="camera-modal">
    <div class="camera-modal__header">
      <p class="camera-modal__title">Ход строительства</p>
      <BtnsActionsBase icon="close" @click="close" />
    </div>
    <iframe class="camera-modal__frame" :src="camera.url" allowfullscreen></iframe>
  </BaseModalCard>
</template>

<script setup lang="ts">
  import { type OneCamera } from '../store';

  defineProps<{
    camera: OneCamera
  }>();

  const emit = defineEmits<{
    (event: 'close'): void,
  }>();

  function close() {
    emit('close');
  }
</script>

<style scoped lang="scss">
  .camera-modal {
    width: 100%;
    max-width: 1280px;

    &__header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      @apply tw-text-text00;
    }

    &__frame {
      width: 100%;
      height: 500px;
      border-radius: 16px;
    }
  }
</style>
