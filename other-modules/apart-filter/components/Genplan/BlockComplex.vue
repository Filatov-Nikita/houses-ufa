<template>
  <div v-if="planImg" class="tw-max-w-full tw-overflow-y-hidden scroll-y tw-rounded-2xl">
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
          v-for="house in houses"
          :key="house.id"
          :d="house.complex_plan_polygon"
          @click="selectLiter(house.id)"
        >
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Complex } from './types/complex';

  const props = defineProps<{
    complex: Complex | null,
  }>();

  const emits = defineEmits<{
    (event: 'back'): void,
    (event: 'update:liter', id: number): void,
    (event: 'next'): void,
  }>();

  function selectLiter(id: number) {
    emits('update:liter', id);
    emits('next');
  }

  const planImg = computed(() => {
    if(!props.complex) return;
    return props.complex.master_plan;
  });

  const dims = computed(() => {
    return {
      width: planImg.value?.width ?? 0,
      height: planImg.value?.height ?? 0,
    }
  });

  const houses = computed(() => {
    if(!props.complex?.houses) return [];
    return props.complex.houses;
  });
</script>

<style scoped lang="scss">
  .block-liter {
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
