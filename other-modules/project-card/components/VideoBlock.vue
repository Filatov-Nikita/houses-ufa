<template>
  <button class="video-btn" @click="showedModal = true">
    <div class="video-btn__play">
      <BaseIcon class="video-btn__icon" color="tw-fill-white" name="play" />
    </div>
    <span>Смотреть ролик</span>
  </button>

  <BaseModal v-model="showedModal" v-slot="{ hide }">
    <BaseModalCard class="video-modal-card">
      <div class="video-modal-card__header">
        <BtnsActionsBase icon="close" @click="hide" />
      </div>
      <iframe
        width="100%"
        height="500"
        :src="videoUrl"
        frameBorder="0"
        allow="clipboard-write; autoplay"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
      ></iframe>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  defineProps<{
    videoUrl: string,
  }>();

  const showedModal = ref(false);
</script>

<style scoped lang="scss">
  .video-btn {
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
    margin-bottom: 24px;

    &:hover {
      opacity: 0.8;
    }

    &__play {
      border-radius: 8px;
      padding: 12px;
      @apply tw-bg-primary;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }

    &__label {
      @apply tw-text-text01 tw-text-base;
    }
  }

  .video-modal-card {
    max-width: 1000px;
    width: 100% !important;

    &__header {
      text-align: right;
      margin-bottom: 24px;
    }
  }
</style>
