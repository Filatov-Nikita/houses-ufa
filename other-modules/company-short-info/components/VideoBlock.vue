<template>
  <div class="company-info-video">
    <button class="video-btn" @click="showedModal = true">
      <div class="video-btn__play">
        <BaseIcon class="video-btn__icon" color="tw-fill-white" name="play" />
      </div>
      <span>Смотреть ролик <br> о компании</span>
    </button>
    <img width="115" height="44" src="@/assets/images/logo.svg" loading="lazy" alt="Логотип ЖК">

    <BaseModal v-model="showedModal" v-slot="{ hide }">
      <BaseModalCard class="video-modal-card">
        <div class="video-modal-card__header">
          <BtnsActionsBase icon="close" @click="hide" />
        </div>
        <iframe
          width="100%"
          height="500"
          :src="videoUrl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </BaseModalCard>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
  import { videoUrl } from '../data';
  const showedModal = ref(false);
</script>

<style scoped lang="scss">
  .company-info-video {
    border-radius: 16px;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    @apply tw-bg-secondary;
  }

  .video-btn {
    display: flex;
    align-items: center;
    gap: 24px;
    text-align: left;

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
