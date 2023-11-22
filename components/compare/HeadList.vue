<template>
  <div class="products-slider tw-relative" ref="compare">
    <div class="products-slider__wrapper">
      <TransitionGroup :name="nameAnimation" mode="out-in">
        <CompareHead
          v-for="(item, index) in windowData"
          :description="item"
          :key="item.id"
          >{{ item }}</CompareHead
        >
      </TransitionGroup>
    </div>
    <button
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
              <h3 class="tw-text-h5">{{ item.price }} ₽</h3>
              <button @click="isSelected = !isSelected">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="heart"
                  :class="{ active: isSelected }"
                >
                  <path
                    d="M22.5 9.18607C22.5016 9.90031 22.3616 10.6078 22.088 11.2675C21.8144 11.9273 21.4128 12.5263 20.9062 13.0298L12.5344 21.5254C12.4646 21.5963 12.3814 21.6526 12.2897 21.691C12.1979 21.7294 12.0994 21.7492 12 21.7492C11.9005 21.7492 11.8021 21.7294 11.7103 21.691C11.6186 21.6526 11.5354 21.5963 11.4656 21.5254L3.09374 13.0298C2.07307 12.0104 1.49917 10.6273 1.49829 9.1847C1.49741 7.74214 2.06963 6.35831 3.08905 5.33764C4.10848 4.31697 5.49161 3.74307 6.93418 3.74219C8.37674 3.74131 9.76057 4.31352 10.7812 5.33295L12 6.47201L13.2272 5.3292C13.9888 4.57131 14.958 4.05608 16.0122 3.84854C17.0665 3.641 18.1586 3.75047 19.1507 4.16311C20.1428 4.57576 20.9904 5.27309 21.5865 6.16706C22.1826 7.06104 22.5005 8.11158 22.5 9.18607Z"
                    stroke="#2D2D2D"
                    stroke-width="1"
                  />
                </svg>
              </button>
            </div>
            <div class="tw-text-body_s2">
              <div class=" ">
                <span class="tw-text-text02"> В ипотеку — </span>
                <span class="tw-text-primary">
                  от {{ item.payment_month }} ₽ / мес
                </span>
              </div>
            </div>
            <div class="tw-text-body_s2 -tw-tracking-875">
              {{ item.title }}
            </div>
          </div>
        </div>
        <button
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
        title: item.title,
        price: item.price,
        images: item.images,
        href: item.href,
        typeHome: item.typeHome,
        payment_month: item.payment_month,
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
