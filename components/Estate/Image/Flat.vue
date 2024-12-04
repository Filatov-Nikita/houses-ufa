<template>
  <div class="estate-image-contr">
    <div class="estate-image-contr__toolbar">
      <BaseTabsGroup v-if="floorImage" v-model="tabCurrent">
        <BaseTabsGroupItem name="plan">Планировка</BaseTabsGroupItem>
        <BaseTabsGroupItem name="floor">На этаже</BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
    <BaseTabsTabContent enter-classes="" leave-classes="" keep-alive v-model="tabCurrent">
      <BaseTabsTabContentItem key="plan" name="plan">
        <EstateImageFlatSlider
          class="estate-image-contr__img"
          :class="fullscreen ? 'estate-image-contr__img' : 'estate-image-contr__img-full'"
          :images="planImages"
          :fullscreen="fullscreen"
          @showImg="emit('showModalImg')"
        />
      </BaseTabsTabContentItem>
      <BaseTabsTabContentItem key="floor" name="floor">
        <EstateImageFlatSlider
          :class="fullscreen ? 'estate-image-contr__img' : 'estate-image-contr__img-full'"
          :images="floorImages"
          :fullscreen="fullscreen"
          @showImg="emit('showModalImg')"
        />
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    planImages: Array<string>,
    floorImage: string | null,
    tabCurrent: string,
    fullscreen?: boolean,
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    (event: 'showModalImg'): void,
    (event: 'update:tabCurrent', tab: string): void,
  }>();

  const tabCurrent = useSyncProps(props, 'tabCurrent');
  const floorImages = computed(() => props.floorImage ? [ props.floorImage ] : []);
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

      @include sm {
        height: 311px;
      }
    }

    &__img-full {
      height: 100vh;
      max-height: 1000px;
      min-height: 900px;

      @include md {
        min-height: auto;
        max-height: min-content;
      }

      @include sm {
        min-width: 700px;
      }
    }
  }
</style>
