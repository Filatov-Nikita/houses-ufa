<template>
  <div class="estate-image-plan">
    <div
      class="estate-image-plan__wrap"
      :class="{ 'estate-image-plan__wrap--disabled': !fullscreen }"
      @click="emit('showImg')"
    >
      <img class="estate-image-plan__img" :src="current" alt="">
      <FullScreenBtn
        v-show="fullscreen"
        class="estate-image-plan__fullscreen"
      />
    </div>
    <div class="estate-image-plan__bottom">
      <div class="estate-image-plan__pag">
        <button
          v-for="(image, ind) in images"
          type="button"
          class="plan-mini"
          :class="{ 'plan-mini--active': currentFloor === ind }"
          @click="changeFloor(ind)"
        >
          <div class="plan-mini__avatar">
            <img class="plan-mini__img" :src="image" alt="">
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import FullScreenBtn from '@/components/sliders/FullScreenBtn.vue';
  import { useSyncProps } from '@/composables/useSyncProp';

  interface Props {
    images: Array<string>,
    currentFloor: number,
    fullscreen: boolean
  }

  const props = defineProps<Props>();
  const emit = defineEmits<{
    (event: 'update:currentFloor', ind: number): void,
    (event: 'showImg'): void,
  }>();

  const currentFloor = useSyncProps(props, 'currentFloor');

  const current = computed(() => props.images[currentFloor.value]);

  function changeFloor(ind: number) {
    currentFloor.value = ind;
  }
</script>

<style scoped lang="scss">
  .estate-image-plan {
    border-radius: 16px;
    padding: 100px 40px 140px;
    position: relative;
    @apply tw-bg-base00;


    &__fullscreen {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 10;
      transition: opacity, 300ms;
      transform: translate(-50%, -50%);
    }

    &__wrap {
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;

      &--disabled {
        pointer-events: none;
      }
    }

    &__wrap:hover &__fullscreen {
      opacity: 1;
    }

    &__img {
      position: absolute;
      object-fit: contain;
      object-position: center;
      width: 100%;
      height: 100%;
    }

    &__pag {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }

    &__bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
    }
  }

  .plan-mini {
    &--active &__avatar{
      border-color: theme('colors.primary');
    }

    &--active &__name{
      @apply tw-text-text00;
    }

    &__avatar {
      width: 80px;
      height: 64px;
      position: relative;
      border-radius: 8px;
      padding: 12px;
      border: 1px solid theme('colors.white');
      @apply tw-bg-white;
    }

    &__img {
      width: 56px;
      height: 40px;
      object-fit: cover;
      object-position: center;
    }

    &__name {
      margin-top: 8px;
      text-align: center;
      @apply tw-text-text02 tw-text-sm;
    }
  }
</style>
