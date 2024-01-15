<template>
  <div class="products-slider tw-relative" ref="compare">
    <div class="products-slider__wrapper">
      <TransitionGroup :name="nameAnimation">
        <CompareHead
          v-for="(item, index) in windowData"
          :description="item"
          :key="item.id"
        >
          {{ item }}
        </CompareHead>
      </TransitionGroup>
    </div>
    <button
      v-if="currentIndex > 0"
      class="tw-w-10 tw-h-10 tw-bg-secondary tw-rounded tw-grid tw-place-content-center prev tw-absolute lg:tw-top-[132px] xl:tw-top-[140px] tw-transform -tw-translate-y-1/2 -tw-translate-x-full -tw-left-6"
      @click="prev"
    >
      <img
        src="/images/icons/arrow_left.svg"
        alt=""
        width="24"
        height="24"
      />
    </button>
    <button
      v-if="currentIndex < values.length - countData"
      class="tw-w-10 tw-h-10 tw-bg-secondary tw-rounded tw-grid tw-place-content-center next tw-absolute lg:tw-top-[132px] xl:tw-top-[140px] tw-transform -tw-translate-y-1/2 tw-translate-x-full -tw-right-6"
      @click="next"
    >
      <img
        src="/images/icons/arrow_left.svg"
        alt=""
        width="24"
        height="24"
        class="tw-transform tw-rotate-180"
      />
    </button>
  </div>

  <div
    class="products-slider__fixed"
    ref="visibleEL"
    v-show="isVisibleCompareAbsolute"
  >
    <div class="wrapper">
      <div
        class="tw-relative mx-[88px] tw-rounded-2xl tw-py-4 tw-px-[68px] tw-bg-white tw-shadow-shadow00"
      >
        <div class="products-slider__fixed-wrapper">
          <div v-for="(item, index) in windowData" class="tw-grid tw-gap-2">
            <div class="tw-flex tw-justify-between">
              <h3 class="tw-text-h5">{{ item.title }}</h3>
            </div>
            <div class="tw-text-body_s2">
            </div>
            <div class="tw-text-body_s2 -tw-tracking-875">
              {{ item.townName }}
            </div>
          </div>
        </div>
        <button
          v-if="currentIndex > 0"
          class="tw-w-10 tw-h-10 tw-bg-secondary tw-rounded tw-grid tw-place-content-center prev tw-absolute tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-translate-x-1/2 tw-left-0"
          @click="prev"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="24"
            height="24"
          />
        </button>
        <button
          v-if="currentIndex < values.length - countData"
          class="tw-w-10 tw-h-10 tw-bg-secondary tw-rounded tw-grid tw-place-content-center next tw-absolute tw-top-1/2 tw-transform -tw-translate-y-1/2 -tw-translate-x-1/2 tw-right-0"
          @click="next"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="24"
            height="24"
            class="tw-transform tw-rotate-180"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// @ts-nocheck
import CompareHead from './HeadTown.vue';
import {
  decriptionHeadApartment,
  apartmentGeneralDescriptionT,
  cottageGeneralDescriptionT,
} from './models'
const headListProps = defineProps<{
  values: Array<apartmentGeneralDescriptionT | cottageGeneralDescriptionT>
  parentEl: HTMLElement
}>()
const headListEmits = defineEmits(['updateGeneralValue'])
const { values } = toRefs(headListProps)
const { compare, isVisibleCompareAbsolute, visibleEL } = useVisibleCompareCard(
  headListProps.parentEl
)
const headValues = computed(() => {
  return values.value.map(
    (item): decriptionHeadApartment & { payment_month: number } => {
      return {
        id: item.id,
        title: item['layout.name'],
        images: item['layout.feed_images'],
        townName: item['town.name']
      }
    }
  )
})
const isSelected = ref(false)
const nameAnimation = ref('')
const countData = ref(0)
const windowData = ref<
  Array<decriptionHeadApartment & { payment_month: number }>
>([])

const currentIndex = ref(0)

const prev = () => {
  nameAnimation.value = 'fade'
  if (currentIndex.value > 0) currentIndex.value -= 1
}
const next = () => {
  nameAnimation.value = 'fade'
  if (currentIndex.value < values.value.length - countData.value)
    currentIndex.value += 1
}
onMounted(() => {
  if (window.screen.width <= 1024 && window.screen.width < 1440)
    countData.value = 3
  else if (window.screen.width >= 1440) countData.value = 4
  windowData.value = headValues.value.slice(0, countData.value)
})

watch(currentIndex, (val, oldVal) => {
  if (val > oldVal) {
    windowData.value = headValues.value.slice(
      currentIndex.value,
      countData.value + currentIndex.value
    )
  } else {
    windowData.value = headValues.value.slice(
      currentIndex.value,
      countData.value + currentIndex.value
    )
  }
})

watchEffect(() => {
  const generalValues = windowData.value.map((item) => item.id)
  headListEmits('updateGeneralValue', generalValues)
})
</script>
<style lang="scss" scoped>
.products-slider__wrapper {
  @apply tw-flex tw-flex-wrap tw-overflow-hidden tw-gap-5 tw-justify-between;
  & > div {
    @apply tw-inline-block;
    @screen lg {
      width: calc(33% - 1.25rem);
    }
    @screen xl {
      width: calc(25% - 1.25rem);
    }
    &.w {
      @apply tw-w-0;
    }
  }
}

.products-slider__fixed {
  @apply tw-fixed tw-top-4 tw-left-4  tw-right-4 tw-z-10;

  &-wrapper {
    @apply tw-flex tw-flex-wrap tw-overflow-hidden tw-gap-5 tw-justify-between;
    & > div {
      @screen lg {
        width: calc(33% - 1.25rem);
      }
      @screen xl {
        width: calc(25% - 1.25rem);
      }
      &.w {
        @apply tw-w-0;
      }
    }
  }
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */

.fade-enter-from,
.fade-leave-to {
  width: 0 !important;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
}

.heart {
  &.active > path {
    @apply tw-fill-primary tw-stroke-none;
  }
}
</style>
