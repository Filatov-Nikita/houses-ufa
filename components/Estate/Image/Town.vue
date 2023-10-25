<template>
  <div class="estate-image-contr">
    <div class="estate-image-contr__toolbar">
      <BaseTabsGroup v-model="tabCurrent">
        <BaseTabsGroupItem name="render">Рендер</BaseTabsGroupItem>
        <BaseTabsGroupItem name="plan">Планировка</BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
    <BaseTabsTabContent enter-classes="" leave-classes="" keep-alive v-model="tabCurrent">
      <BaseTabsTabContentItem key="render" name="render">
        <EstateImageSlider class="estate-image-contr__img" :images="renderImages" />
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem key="plan" name="plan">
        <EstateImagePlanFloors
          class="estate-image-contr__img"
          :fullscreen="planFullscreen"
          v-model:current-floor="currentFloor"
          :images="planImages"
          @showImg="emit('showPlanImg')"
        />
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>

<script setup lang="ts">
  import { useSyncProps } from '@/composables/useSyncProp';

  interface Props {
    planFullscreen: boolean,
    renderImages: Array<string>,
    planImages: Array<string>,
    tabCurrent: string,
    currentFloor: number,
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (event: 'update:tabCurrent', tab: string): void,
    (event: 'update:currentFloor', tab: string): void,
    (event: 'showPlanImg'): void,
  }>();

  const tabCurrent = useSyncProps(props, 'tabCurrent');
  const currentFloor = useSyncProps(props, 'currentFloor');
</script>

<style scoped lang="scss">
  .estate-image-contr {
    position: relative;

    &__toolbar {
      position: absolute;
      top: 16px;
      left: 0;
      display: flex;
      justify-content: center;
      width: 100%;
      z-index: 50;
    }

    &__img {
      height: 600px;
    }
  }
</style>
