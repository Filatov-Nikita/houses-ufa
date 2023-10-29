<template>
  <div>
    <BaseTabsGroup class="estate-adv-tabs" v-model="tab">
      <BaseTabsGroupItem
        v-for="tab in tabs"
        :key="tab"
        :name="tab"
      >
        {{ tab }}
      </BaseTabsGroupItem>
    </BaseTabsGroup>
    <BaseTabsTabContent v-model="tab">
      <BaseTabsTabContentItem
        v-for="item in _items"
        :key="item.label"
        :name="item.label"
      >
        <div class="estate-adv-one">
          <div class="estate-adv-one__left">
            <h3 class="estate-adv-one__title">{{ item.title }}</h3>
            <p class="estate-adv-one__text">{{ item.description }}</p>
            <BaseButton
              v-if="!hideAction"
              class="estate-adv-one__action"
              theme="gray"
              @click="onAction"
            >
              {{ actionLabel }}
            </BaseButton>
          </div>
          <div class="estate-adv-one__right">
            <EstateImageSlider
              v-if="item.images.length > 0"
              class="estate-adv-one__slider"
              imgClasses="estate-adv-one__slider-img"
              v-bind="sliderProps"
              :images="item.images"
            />
          </div>
        </div>
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>

<script setup lang="ts">
  import type { AdvantageOne } from '@/types/estate/advantages';

  interface Props {
    items: AdvantageOne[],
    actionLabel?: string,
    hideAction?: boolean
  }

  const props =  withDefaults(defineProps<Props>(), { hideAction: false });
  const emit = defineEmits<{ (event: 'action'): void }>();

  const tabs = computed(() => props.items.map(item => item.label));
  const tab = ref(tabs.value[0]);

  const _items = computed(() => props.items.map(
    i => ({ ...i, images: i.images.map(img => img.url) })
  ));

  const sliderProps = {
    effect: 'fade',
    fadeEffect: { crossFade: true },
  };

  function onAction() {
    emit('action');
  };
</script>

<style lang="scss">
.estate-adv-one {
  &__slider &__slider-img {
    border-radius: 0px 16px 16px 0px;
  }
}
</style>

<style scoped lang="scss">
  .estate-adv-one {
    display: flex;
    flex-wrap: wrap;

    &__left {
      display: flex;
      flex-direction: column;
      padding: 40px;
      border-radius: 16px 0px 0px 16px;
      width: 50%;
      @apply tw-bg-white;
    }

    &__right {
      width: 50%;
      @apply tw-bg-white;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 32px;
      @apply tw-text-text00;
    }

    &__text {
      color: #4F4F4F;
      margin-bottom: 32px;
      @apply tw-text-base;
    }

    &__action {
      width: 100%;
      margin-top: auto;
    }

    &__slider {
      width: 100%;
      height: 488px;
    }
  }

  .estate-adv-tabs {
    margin-bottom: 32px;
  }
</style>
