<template>
  <div class="flat-card">
    <div class="flat-card__img">
      <img :src="flat.plan_image_url" alt="">
    </div>
    <div class="flat-card__data">
      <div class="flat-card__left">
        <div class="flat-card__param">{{flat.number_of_rooms}}-комнатная</div>
        <div class="flat-card__price">{{ $amount(flat.price_total) }}</div>
      </div>
      <div class="flat-card__right">
        <div class="flat-card__param">от {{ flat.area_total }} м²</div>
        <div class="flat-card__actions">
          <button class="flat-card__action">
            <BaseIcon class="tw-w-6 tw-h-6" color="tw-text-text01" name="lock2" />
          </button>
          <button class="flat-card__action">
            <BaseIcon class="tw-w-6 tw-h-6" color="tw-text-text01" name="heart" />
          </button>
        </div>
      </div>
    </div>
    <BaseButton theme="gray" class="flat-card__close" @click="$emit('close')">
      Закрыть
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import type { Flat } from '../../store/filter-plan/composables/usePlan';

  interface Props {
    flat: Flat
  }

  defineProps<Props>();

  defineEmits<{ (event: 'close'): void }>();
</script>

<style scoped lang="scss">
  .flat-card {
    padding: 16px;
    border-radius: 16px;
    box-shadow: 0px 5px 16px 0px rgba(0, 0, 0, 0.07), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    @apply tw-bg-white;

    &__data {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      @apply tw-text-text00;
    }

    &__left {
      flex-grow: 1;
    }

    &__right {
      flex-grow: 1;
      text-align: right;
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    &__action {
      width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;
      @apply tw-bg-base00;
    }

    &__price {
      padding-top: 12px;
      @apply tw-text-xl;
    }

    &__param {
      padding-bottom: 16px;
      @apply tw-text-base;
    }

    &__close {
      width: 100%;
    }

    &__img {
      width: 100%;
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 24px;
      @apply tw-bg-base00;

      img {
        width: 100%;
        height: 100%;
        max-height: 300px;
        object-fit: contain;
        object-position: center;
      }
    }
  }
</style>
