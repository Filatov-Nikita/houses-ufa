<template>
  <div class="estate-grid-item">
    <div>
      <div class="estate-grid-item__name" v-html="item.name"></div>
      <div class="estate-grid-item__text" v-html="item.text"></div>
    </div>
    <div class="estate-grid-item__bottom">
      <div class="estate-grid-item__badge" v-if="item.location">
        <BaseIcon class="estate-grid-item__badge-icon" name="geo" />
        <span>{{ item.location }}</span>
      </div>
    </div>
    <img class="estate-grid-item__img" :src="item.image" alt="">
    <!-- <Modal v-model:showed="showedMilav" /> -->
  </div>
</template>

<script setup lang="ts">
  import { type Milav, showedMilav } from '../data';
  import Modal from './ModalMilav/index.vue';

  const props = defineProps<{
    item: Milav,
  }>();
</script>

<style scoped lang="scss">
  .estate-grid-item {
    display: block;
    border-radius: 16px;
    position: relative;
    height: 374px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    @apply tw-text-white;

    &__name {
      font-weight: 600;
      margin-bottom: 16px;
      font-size: 32px;
      line-height: 1.375;

      @include sm {
        margin-bottom: 10px;
        font-size: 24px;
      }
    }

    &__text {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.5;
    }

    &__bottom {
      margin-top: auto;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: flex-end;
      row-gap: 15px;
      column-gap: 20px;

      @include sm {
        justify-content: flex-end;
      }
    }

    &__location {
      padding: 4px 12px;
      margin-bottom: 12px;
    }

    &__badge {
      padding: 10px 12px;
      display: flex;
      gap: 12px;
    }

    &__badge-icon {
      width: 24px;
      height: 24px;
    }

    &__location, &__badge {
      border-radius: 8px;
      backdrop-filter: blur(4px);
      background: rgba(79, 79, 79, 0.4);
      @apply tw-text-base;
    }

    &__img {
      border-radius: 16px;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      object-fit: cover;
      object-position: center;
      z-index: -2;
    }

    &__next {
      position: absolute;
      bottom: 24px;
      left: 24px;
      opacity: 0;
      width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;
      transition: opacity 300ms;
      @apply tw-text-primary tw-bg-white;
    }

    &:hover &__next {
      opacity: 1;
    }

    &__next-icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
