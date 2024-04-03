<template>
  <div v-if="planImg" class="tw-overflow-y-hidden tw-max-w-full tw-rounded-2xl scroll-y">
    <div class="block-liter">
      <BaseButton class="block-liter__back" theme="white" @click="$emit('back')">
        <div class="tw-flex tw-gap-4">
          <BaseIcon class="tw-w-6 tw-h-6" name="back" />
          <span>Назад</span>
        </div>
      </BaseButton>
      <img class="block-liter__img" :width="dims.width" :height="dims.height" :src="planImg.url" />
      <svg class="block-liter__maket" :viewBox="`0 0 ${dims.width} ${dims.height}`" xmlns="http://www.w3.org/2000/svg">
        <path
          class="block-liter__path"
          v-for="entrance in entrances"
          :key="entrance.id"
          :d="entrance.house_plan_polygon"
          @click="selectEntrance(entrance.id)"
        >
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { House } from './types/house';

  const props = defineProps<{
    liter: House | null,
  }>();

  const planImg = computed(() => {
    if(!props.liter) return;
    return props.liter.master_plan;
  });

  const entrances = computed(() => {
    if(!props.liter?.entrances) return [];
    return props.liter.entrances;
  });

  const dims = computed(() => {
    return {
      width: planImg.value?.width ?? 0,
      height: planImg.value?.height ?? 0,
    }
  });

  const emits = defineEmits<{
    (event: 'back'): void,
    (event: 'update:entrance', id: number): void,
    (event: 'next'): void,
  }>();

  function selectEntrance(id: number) {
    emits('update:entrance', id);
    emits('next');
  }
</script>

<style scoped lang="scss">
  .block-liter {
    border-radius: 16px;
    overflow: hidden;
    position: relative;

    @include md {
      min-width: 1100px;
    }

    &__img {
      width: 100%;
    }

    &__back {
      position: absolute;
      left: 24px;
      top: 28px;
      z-index: 10;
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
      fill: #4FBA78;
    }
  }
</style>
