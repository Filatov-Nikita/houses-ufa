<template>
  <div class="estate-header">
    <BaseBreadcrumbs class="estate-header__bread" />
    <h1 class="estate-header__title">{{ name }}</h1>
    <p class="estate-header__location">{{ location }}</p>
    <div class="estate-header__bottom">
      <BaseButton class="estate-header__action" theme="white" @click="onAction">
        {{ actionTitle }}
      </BaseButton>
      <p class="estate-header__caption">{{ caption }}</p>
    </div>
    <img v-if="img" class="estate-header__img" :src="img.url" alt="">
  </div>
</template>

<script setup lang="ts">
  import { Image } from '@/types/share';

  interface Props {
    name: string,
    location: string,
    actionTitle: string,
    caption: string,
    img: Image | null,
  }

  defineProps<Props>();
  const emit = defineEmits<{ (event: 'action'): void }>();

  function onAction() {
    emit('action');
  }
</script>

<style scoped lang="scss">
  .estate-header {
    border-radius: 16px;
    position: relative;
    height: 640px;
    padding: 64px 40px;
    display: flex;
    flex-direction: column;
    @apply tw-text-white;

    &__bread {
      margin-bottom: 16px;
    }

    &__location {
      @apply tw-text-2xl
    }

    &__caption {
      opacity: 0.85;
      @apply tw-text-sm;
    }

    &__bottom {
      margin-top: auto;
    }

    &__title {
      margin-bottom: 8px;
      line-height: 1.2;
      font-size: 48px;
    }

    &__action {
      margin-bottom: 16px;
    }

    &__img {
      position: absolute;
      z-index: -2;
      object-position: center;
      object-fit: cover;
      border-radius: 16px;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      @apply tw-inset-0;
    }

    &::after {
      content: '';
      border-radius: 16px;
      display: block;
      z-index: -1;
      position: absolute;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%);
      @apply tw-inset-0;
    }
  }
</style>
