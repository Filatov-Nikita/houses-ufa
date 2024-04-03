<template>
  <div class="storey-plan">
    <div class="storey-plan__top">{{ streets?.top ?? '-' }}</div>
    <div class="storey-plan__bottom">{{ streets?.bottom ?? '-' }}</div>
    <div class="storey-plan__left">{{ streets?.left ?? '-' }}</div>
    <div class="storey-plan__right">{{ streets?.right ?? '-' }}</div>
    <div class="storey-plan__status flat-status">
      <div class="flat-status__item">
        <span class="flat-status__icon-green"></span>
        <div class="flat-status__label">в продаже</div>
      </div>
      <div class="flat-status__item">
        <span class="flat-status__icon">
          <BaseIcon fit name="lock" />
        </span>
        <div class="flat-status__label">продано</div>
      </div>
      <div class="flat-status__item">
        <span class="flat-status__icon">
          <BaseIcon fit name="clock" />
        </span>
        <div class="flat-status__label">бронь</div>
      </div>
    </div>
    <div v-if="planImg" class="tw-overflow-y-hidden tw-max-w-full scroll-y">
      <div class="storey-plan__body">
        <img class="storey-plan__img" :width="dims.width" :height="dims.height" :src="planImg.url" />
        <svg class="storey-plan__maket" :viewBox="`0 0 ${dims.width} ${dims.height}`" xmlns="http://www.w3.org/2000/svg">
          <path
            class="storey-plan__path"
            :class="{
              'storey-plan__path--free': flat.status === 'for_sale',
              'storey-plan__path--booked': flat.status === 'booked',
              'storey-plan__path--sold': flat.status === 'sold',
            }"
            v-for="flat in flats"
            :key="flat.id"
            :d="flat.floor_plan_polygon"
            @click="showFlat(flat)"
          >
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Entrance } from './types/entrance';
  import type { Storey, Flat } from './types/storey';

  const props = defineProps<{
    streets: Entrance['streets'] | null,
    storey: Storey | null,
  }>();

  const planImg = computed(() => {
    if(!props.storey) return;
    return props.storey.master_plan;
  });

  const dims = computed(() => {
    return {
      width: planImg.value?.width ?? 0,
      height: planImg.value?.height ?? 0,
    }
  });

  const flats = computed(() => {
    if(!props.storey) return [];
    return props.storey.flats;
  });

  function showFlat(flat: Flat) {
    window.open('/apartments/' + flat.id, '_blank');
  }
</script>

<style scoped lang="scss">
  .storey-plan {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 110px;
    padding-left: 80px;
    padding-right: 80px;

    @include md {
      padding-top: 30px;
      padding-bottom: 65px;
      padding-left: 30px;
      padding-right: 30px;
    }

    %street {
      position: absolute;
      @apply tw-text-text02 tw-text-sm;
    }

    &__top {
      top: 32px;
      left: 50%;
      transform: translateX(-50%);
      @extend %street;

      @include md {
        top: 0px;
      }
    }

    &__bottom {
      @extend %street;
      bottom: 82px;
      left: 50%;
      transform: translateX(-50%);

      @include md {
        bottom: 35px;
      }
    }

    &__left {
      @extend %street;
      top: 50%;
      left: 48px;
      writing-mode: vertical-rl;
      transform: translateY(-50%) rotate(-180deg);

      @include md {
        left: 0px;
      }
    }

    &__right {
      @extend %street;
      top: 50%;
      right: 48px;
      writing-mode: vertical-rl;
      transform: translateY(-50%) rotate(-180deg);

      @include md {
        right: 0px;
      }
    }

    &__status {
      position: absolute;
      bottom: 24px;
      width: 100%;
      left: 0px;
      gap: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      @include md {
        bottom: 0px;
      }
    }

    &__body {
      position: relative;

      @include sm {
        min-width: 800px;
      }
    }

    &__maket {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 5;
      left: 0;
      top: 0;
    }

    &__path {
      cursor: pointer;
      fill-opacity: 0.4;

      &--free {
        fill: theme('colors.primary');
      }

      &--booked {
        fill: theme('colors.base03');
      }

      &--sold {
        fill: theme('colors.error');
        pointer-events: none;
      }
    }

    &__img {
      width: 100%;
    }
  }

  .flat-status {
    &__item {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    &__icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      @apply tw-text-icon;
    }

    &__icon-green {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      border-radius: 8px;
      @apply tw-bg-primary01;
    }

    &__label {
      @apply tw-text-sm tw-text-text00;
    }
  }
</style>
