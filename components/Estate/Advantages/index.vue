<template>
  <div class="adv" :class="`adv-${items.length}`">
    <div class="list">
      <div
        class="item"
        v-for="item in items"
        :key="item.id"
        @click="openModal(item.label)"
      >
        <img :src="item.images[0].url" alt="" />
        <span class="item__title">{{ item.label }}</span>
      </div>
    </div>
  </div>
  <BaseModal v-model="isOpenModal" v-slot="{ hide }">
    <div class="estate-adv">
      <div class="estate-adv__top">
        <div class="estate-adv__filter scroll-y">
          <BaseTabsGroup class="estate-adv-tabs" v-model="tab">
            <BaseTabsGroupItem v-for="tab in tabs" :key="tab" :name="tab">
              {{ tab }}
            </BaseTabsGroupItem>
          </BaseTabsGroup>
        </div>
        <div class="estate-adv__btn">
          <BaseButton @click="hide" theme="gray" class="!tw-p-5">
            <BaseIcon name="close" class="tw-w-4 tw-h-4 tw-text-text00" />
          </BaseButton>
        </div>
      </div>
      <BaseTabsTabContent v-model="tab">
        <BaseTabsTabContentItem
          v-for="item in _items"
          :key="item.label"
          :name="item.label"
        >
          <div class="estate-adv-one">
            <div class="estate-adv-one__left">
              <h3 class="estate-adv-one__title">{{ item.title }}</h3>
              <div class="estate-adv-one__left--content">
                <p class="estate-adv-one__text">{{ item.description }}</p>
                <div class="estate-adv__btn">
                  <BaseButton
                    v-if="!hideAction"
                    class="estate-adv-one__action"
                    theme="gray"
                    @click="onAction"
                  >
                    {{ actionLabel }}
                  </BaseButton>
                </div>
              </div>
            </div>
            <div class="estate-adv-one__right">
              <EstateImageSlider
                v-if="item.images.length > 0"
                class="estate-adv-one__slider"
                imgClasses="estate-adv-one__slider-img"
                v-bind="sliderProps"
                :images="item.images"
              />
              <div class="estate-adv__btns">
                <BaseButton
                  v-if="!hideAction"
                  class="estate-adv-one__action"
                  theme="gray"
                  @click="onAction"
                >
                  {{ actionLabel }}
                </BaseButton>

                <BaseButton @click="hide" theme="gray" class="!tw-p-5">
                  <BaseIcon name="close" class="tw-w-4 tw-h-4 tw-text-text00" />
                </BaseButton>
              </div>
            </div>
          </div>
        </BaseTabsTabContentItem>
      </BaseTabsTabContent>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import type { AdvantageOne } from '@/types/estate/advantages'

interface Props {
  items: AdvantageOne[]
  actionLabel?: string
  hideAction?: boolean
}

const props = withDefaults(defineProps<Props>(), { hideAction: false })

const emit = defineEmits<{ (event: 'action'): void }>()
const isOpenModal = ref(false)
const openModal = (label: string) => {
  isOpenModal.value = true
  tab.value = label
}
const tabs = computed(() => props.items.map((item) => item.label))
const tab = ref<string | null>(null)

const _items = computed(() =>
  props.items.map((i) => ({ ...i, images: i.images.map((img) => img.url) }))
)

const sliderProps = {
  effect: 'fade',
  fadeEffect: { crossFade: true },
}

function onAction() {
  emit('action')
}

watch(
  tabs,
  () => {
    tab.value = tabs.value[0] ?? null
  },
  { immediate: true }
)
</script>

<style lang="scss">
.estate-adv-one {
  &__slider &__slider-img {
    border-radius: 16px;
  }
}
</style>

<style scoped lang="scss">
.estate-adv {
  padding: 16px;
  background: theme('colors.white');
  border-radius: 16px;
  @screen lg {
    padding: 24px;
  }
  @screen xl {
    padding: 40px;
  }
  &__top {
    @apply lg:tw-grid lg:tw-grid-cols-[1fr_56px] lg:tw-gap-6 lg:tw-items-center;
    margin-bottom: 32px;
    @include sm {
      margin-bottom: 24px;
    }
    .estate-adv__btn {
      @apply tw-hidden lg:tw-block;
    }
  }
  &__filter {
    width: 100%;
    max-width: 100%;
    overflow-y: hidden;
  }
}

.estate-adv-tabs {
  background: #f5f5f5;
}

.estate-adv-one {
  &__left {
    display: grid;

    margin-bottom: 16px;
    @apply tw-bg-white lg:tw-grid-cols-2;

    @include lg {
      margin-bottom: 24px;
    }
    &--content {
      .estate-adv__btn {
        display: none;
      }
      @screen lg {
        display: grid;
        gap: 16px;
        .estate-adv__btn {
          display: block;
        }
      }
    }
  }

  &__right {
    min-height: 180px;
    @apply tw-bg-white;
    .estate-adv__btns {
      @apply tw-grid tw-grid-cols-[1fr_56px] tw-gap-4 lg:tw-hidden tw-mt-4;
    }
  }

  &__title {
    font-size: 32px;
    line-height: 1.25;
    margin-bottom: 8px;
    @apply tw-text-text00;

    @include sm {
      @apply tw-text-2xl;
    }
  }

  &__text {
    color: #4f4f4f;

    @apply tw-text-base tw-text-text02;
  }

  &__action {
    width: 100%;
    margin-top: auto;
  }

  &__slider {
    height: 180px;

    @screen lg {
      height: 460px;
    }
    @screen xl {
      height: 560px;
    }
  }
}
.adv-6 {
  .list {
    @apply tw-grid tw-gap-5;

    grid-template-areas:
      'A B'
      'C C'
      'D E'
      'F F';

    @screen lg {
      grid-template-columns: repeat(4, minmax(0, 1fr));
      grid-template-areas:
        'A B C C'
        'D D E E '
        'D D F F';
    }
    .item {
      @apply tw-relative tw-h-[160px]  lg:tw-h-[200px] xl:tw-h-[260px] tw-rounded-2xl tw-overflow-hidden;
      & > *:not(img) {
        position: absolute;
      }
      &:nth-child(1) {
        grid-area: A;
      }
      &:nth-child(2) {
        grid-area: B;
      }
      &:nth-child(3) {
        grid-area: C;
        height: 220px;
        @screen lg {
          height: 200px;
        }
        @screen xl {
          height: 260px;
        }
      }
      &:nth-child(4) {
        grid-area: D;

        @screen xl {
          height: 100%;
        }
      }
      &:nth-child(5) {
        grid-area: E;
        @screen lg {
          height: 200px;
        }
        @screen xl {
          height: 260px;
        }
      }
      &:nth-child(6) {
        grid-area: F;
        height: 220px;
        @screen lg {
          height: 200px;
        }
        @screen xl {
          height: 260px;
        }
      }
      img {
        @apply tw-w-full tw-h-full tw-object-cover;
      }
      &__title {
        color: white;
        @apply tw-text-body_s2 tw-left-4 tw-bottom-4 lg:tw-text-h6 lg:tw-left-6 lg:tw-bottom-6;
      }
    }
  }
}
.adv-7 {
  .list {
    @apply tw-grid tw-gap-5;

    grid-template-areas:
      'A B'
      'C C'
      'D D'
      'E F'
      'G G';

    @screen lg {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-areas:
        'A B C'
        'D D E'
        'F G E';
    }
    .item {
      @apply tw-relative tw-h-[160px]  lg:tw-h-[200px] xl:tw-h-[260px] tw-rounded-2xl tw-overflow-hidden;
      & > *:not(img) {
        position: absolute;
      }
      &:nth-child(1) {
        grid-area: A;
      }
      &:nth-child(2) {
        grid-area: B;
      }
      &:nth-child(3) {
        grid-area: C;
        height: 220px;
        @screen lg {
          height: 100%;
        }
      }
      &:nth-child(4) {
        grid-area: D;
        height: 220px;
        @screen lg {
          height: 200px;
        }
        @screen xl {
          height: 260px;
        }
      }
      &:nth-child(5) {
        grid-area: E;
      }
      &:nth-child(6) {
        grid-area: F;
      }
      &:nth-child(7) {
        grid-area: G;
        height: 220px;
        @screen lg {
          height: 100%;
        }
      }
      img {
        @apply tw-w-full tw-h-full tw-object-cover;
      }
      &__title {
        color: white;
        @apply tw-text-body_s2 tw-left-4 tw-bottom-4 lg:tw-text-h6 lg:tw-left-6 lg:tw-bottom-6;
      }
    }
  }
}

.adv-8 {
  .list {
    @apply tw-grid tw-gap-5;

    grid-template-areas:
      'A B'
      'C C'
      'D E'
      'F G'
      'H H';

    @screen lg {
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-template-areas:
        'A A A A B B B B C C C C'
        'D D D D D E E E C C C C'
        'F F F G G G G G H H H H';
    }
    .item {
      @apply tw-relative tw-min-h-[160px] lg:tw-min-h-[200px] xl:tw-min-h-[260px] tw-rounded-2xl tw-overflow-hidden;
      & > *:not(img) {
        position: absolute;
      }
      &:nth-child(1) {
        grid-area: A;
      }
      &:nth-child(2) {
        grid-area: B;
      }
      &:nth-child(3) {
        grid-area: C;
        height: 220px;
        @screen lg {
          height: 100%;
        }
      }
      &:nth-child(4) {
        grid-area: D;
      }
      &:nth-child(5) {
        grid-area: E;
      }
      &:nth-child(6) {
        grid-area: F;
      }
      &:nth-child(7) {
        grid-area: G;
      }
      &:nth-child(8) {
        grid-area: H;
        height: 220px;
        @screen lg {
          height: 100%;
        }
      }
      img {
        @apply tw-w-full tw-h-full tw-object-cover;
      }
      &__title {
        color: white;
        @apply tw-text-body_s2 tw-left-4 tw-bottom-4 lg:tw-text-h6 lg:tw-left-6 lg:tw-bottom-6;
      }
    }
  }
}
</style>
