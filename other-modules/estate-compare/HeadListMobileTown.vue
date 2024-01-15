<template>
  <div class="products-slider tw-gap-2" ref="compare">
    <div v-if="firstItem" class="tw-overflow-x-hidden">
      <!-- <Transition
        :enter-active-class="animationFirst[0]"
        :leave-active-class="animationFirst[1]"
      > -->
        <CompareHead
          :description="firstItem"
          :key="'first' + firstItem?.id"
        >
        </CompareHead>
      <!-- </Transition> -->
      <div class="tw-flex tw-items-center tw-gap-4 tw-mt-3">
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center prev"
          :class="{ 'tw-invisible': !canPrevFirst }"
          @click="prevFirst"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
          />
        </button>
        <span class="tw-text-body_xs">
          {{ keyFirst }} / {{ values.length }}
        </span>
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center next"
          :class="{ 'tw-invisible': !canNextFirst }"
          @click="nextFirst"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
            class="tw-transform tw-rotate-180"
          />
        </button>
      </div>
    </div>
    <div v-if="lastItem" class="tw-overflow-hidden">
      <!-- <Transition
        :enter-active-class="animationLast[0]"
        :leave-active-class="animationLast[1]"
      > -->
        <CompareHead
          :description="lastItem"
          :key="'last' + lastItem?.id"
        >
        </CompareHead>
      <!-- </Transition> -->
      <div class="tw-flex tw-items-center tw-gap-4 tw-mt-3">
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center prev"
          :class="{ 'tw-invisible': !canPrevLast }"
          @click="prevLast"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
          />
        </button>
        <span class="tw-text-body_xs">
          {{ keyLast }} / {{ values.length }}
        </span>
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center next"
          :class="{ 'tw-invisible': !canNextLast }"
          @click="nextLast"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
            class="tw-transform tw-rotate-180"
          />
        </button>
      </div>
    </div>
  </div>
  <div
    class="products-slider__fixed"
    ref="visibleEL"
    v-show="isVisibleCompareAbsolute"
  >
    <div v-if="firstItem" class="tw-overflow-x-hidden">
      <div>{{ firstItem.title }}</div>
      <div class="tw-text-text01 tw-text-xs tw-mt-2">
        {{ firstItem.townName }}
      </div>
      <div class="tw-flex tw-items-center tw-gap-4 tw-mt-2">
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center prev"
          :class="{ 'tw-invisible': !canPrevFirst }"
          @click="prevFirst"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
          />
        </button>
        <span class="tw-text-body_xs">
          {{ keyFirst }} / {{ values.length }}
        </span>
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center next"
          :class="{ 'tw-invisible': !canNextFirst }"
          @click="nextFirst"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
            class="tw-transform tw-rotate-180"
          />
        </button>
      </div>
    </div>
    <div v-if="lastItem" class="tw-overflow-hidden">
      <div>{{ lastItem.title }}</div>
      <div class="tw-text-text01 tw-text-xs tw-mt-2">
        {{ lastItem.townName }}
      </div>
      <div class="tw-flex tw-items-center tw-gap-4 tw-mt-2">
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center prev"
          :class="{ 'tw-invisible': !canPrevLast }"
          @click="prevLast"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
          />
        </button>
        <span class="tw-text-body_xs">
          {{ keyLast }} / {{ values.length }}
        </span>
        <button
          class="tw-w-6 tw-h-6 tw-bg-secondary tw-rounded tw-grid tw-place-content-center next"
          :class="{ 'tw-invisible': !canNextLast }"
          @click="nextLast"
        >
          <img
            src="/images/icons/arrow_left.svg"
            alt=""
            width="16"
            height="16"
            class="tw-transform tw-rotate-180"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
//@ts-nocheck
import CompareHead from './HeadTown.vue';
import { decriptionHeadApartment } from './models'
const headListMobProps = defineProps<{
  values: decriptionHeadApartment[]
  parentEl: HTMLElement
}>()
const headListMobEmits = defineEmits(['updateGeneralValue'])
const { values } = toRefs(headListMobProps)
const { compare, isVisibleCompareAbsolute, visibleEL } = useVisibleCompareCard(
  headListMobProps.parentEl
)

const keyFirst = computed(() => {
  let idx
  values.value.every((item, index) => {
    if (currentFirstItem.value && item.id === currentFirstItem.value.id) {
      idx = index + 1
      return false
    }
    return true
  })
  return idx
})
const animationFirst = ref(['', ''])
const animationLast = ref(['', ''])
const keyLast = computed(() => {
  let idx
  values.value.every((item, index) => {
    if (currentLastItem.value && item.id === currentLastItem.value.id) {
      idx = index + 1
      return false
    }
    return true
  })
  return idx
})

const nameAnimation = ref('')

const windowDataFirst = computed(() => {
  if (currentLastItem.value)
    return values.value.filter((item) => item.id !== currentLastItem.value.id)
})
const windowDataLast = computed(() => {
  if (currentFirstItem.value)
    return values.value.filter((item) => item.id !== currentFirstItem.value.id)
})
const currentFirstItem = ref<decriptionHeadApartment>()
const currentLastItem = ref<decriptionHeadApartment>()

const lastItem = computed(() => {
  if(!currentLastItem.value) return null;
  const item = currentLastItem.value;
  return {
    id: item.id,
    title: item['layout.name'],
    images: item['layout.feed_images'],
    townName: item['town.name']
  }
});

const firstItem = computed(() => {
  if(!currentFirstItem.value) return null;
  const item = currentFirstItem.value;
  return {
    id: item.id,
    title: item['layout.name'],
    images: item['layout.feed_images'],
    townName: item['town.name']
  }
});

const canPrevFirst = computed(() => {
  if(!windowDataFirst.value || !currentFirstItem.value) return false;
  const ind = windowDataFirst.value.findIndex(item =>  item.id === currentFirstItem.value.id);
  return ind - 1 >= 0;
});

const canNextFirst = computed(() => {
  if(!windowDataFirst.value || !currentFirstItem.value) return false;
  const ind = windowDataFirst.value.findIndex(item => item.id === currentFirstItem.value.id);
  return ind + 1 <= windowDataFirst.value.length - 1;
});

const prevFirst = () => {
  animationFirst.value = ['tw-animate-slideInLeft', 'tw-animate-slideOutRight']
  animationLast.value = ['', '']

  windowDataFirst.value?.every((item, index) => {
    if (index - 1 >= 0) {
      if (item.id === currentFirstItem.value.id) {
        currentFirstItem.value = windowDataFirst.value[index - 1]
        return false
      }
      return true
    }
    return true
  })
}
const nextFirst = () => {
  animationFirst.value = ['tw-animate-slideInRight', 'tw-animate-slideOutLeft']
  animationLast.value = ['', '']

  windowDataFirst.value?.every((item, index) => {
    if (index + 1 <= Number(windowDataFirst.value?.length) - 1) {
      if (item.id === currentFirstItem.value.id) {
        currentFirstItem.value = windowDataFirst.value[index + 1]
        return false
      }
      return true
    }
    return false
  })
}

const canPrevLast = computed(() => {
  if(!windowDataLast.value || !currentLastItem.value) return false;
  const ind = windowDataLast.value.findIndex(item =>  item.id === currentLastItem.value.id);
  return ind - 1 >= 0;
});

const canNextLast = computed(() => {
  if(!windowDataLast.value || !currentLastItem.value) return false;
  const ind = windowDataLast.value.findIndex(item => item.id === currentLastItem.value.id);
  return ind + 1 <= windowDataLast.value.length - 1;
});

const prevLast = () => {
  animationLast.value = ['tw-animate-slideInLeft', 'tw-animate-slideOutRight']

  windowDataLast.value?.every((item, index) => {
    if (index - 1 >= 0) {
      if (item.id === currentLastItem.value.id) {
        currentLastItem.value = windowDataLast.value[index - 1]
        return false
      }
      return true
    }
    return true
  })
}
const nextLast = () => {
  animationLast.value = ['tw-animate-slideInRight', 'tw-animate-slideOutLeft']

  windowDataLast.value?.every((item, index) => {
    if (index + 1 <= Number(windowDataFirst.value?.length) - 1) {
      if (item.id === currentLastItem.value.id) {
        currentLastItem.value = windowDataLast.value[index + 1]
        return false
      }
      return true
    }
    return false
  })
}

onMounted(() => {


  if (values.value.length > 0) {
    currentFirstItem.value = values.value[0]
    currentLastItem.value = values.value.find(
      (item) => item.id !== currentFirstItem.value.id
    )
  }
})

watchEffect(() => {
  const generalValues = [currentFirstItem.value?.id, currentLastItem.value?.id]
  headListMobEmits('updateGeneralValue', generalValues)
})
</script>
<style lang="scss" scoped>
.products-slider {
  @apply tw-grid tw-grid-cols-2 tw-gap-4;
  & > div {
    @apply tw-inline-block;

    & > div {
      // @apply tw-h-[200px];
    }

    &.w {
      @apply tw-w-0;
    }
  }
  &__fixed {
    @apply tw-fixed tw-top-4 tw-left-4  tw-right-4 tw-z-10;
    @apply tw-rounded-lg tw-p-4 tw-bg-white tw-shadow-shadow00;
    @apply tw-grid tw-grid-cols-2 tw-gap-4;
  }
}

// .product-list-enter:not(.products-slider__item_locked),
// .product-list-leave-to:not(.products-slider__item_locked) {
//   overflow: hidden;
//   opacity: 0;
//   white-space: nowrap;
//   width: 0 !important;
//   transition: 0.1s;
// }

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
</style>
