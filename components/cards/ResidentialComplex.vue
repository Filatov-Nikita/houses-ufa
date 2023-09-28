<template>
  <NuxtLink to="/" class="card">
    <div
      class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-bg-base01 tw-grid tw-place-content-center"
    >
      <img
        v-if="img"
        :src="img"
        :alt="alt"
        :width="width"
        :height="374"
        class="img tw-absolute tw-w-full tw-h-full tw-object-cover"
      />
      <BaseIcon v-else name="home" class="tw-w-16 tw-h-16" />
      <div class="tw-absolute tw-left-4 tw-top-4 tw-grid tw-gap-1">
        <h4 class="tw-text-h4 tw-text-white">{{ title }}</h4>
        <p class="tw-text-body_l tw-text-white">
          <span>{{ typeApartment }}</span>
          <span> от {{ price }} ₽</span>
        </p>
      </div>
      <div class="tw-absolute tw-right-4 tw-bottom-4 tw-grid tw-gap-3">
        <div
          v-if="status"
          class="tw-backdrop-blur-sm tw-rounded-lg tw-py-[5px] tw-px-[11px] tw-text-white tw-bg-text01/40 tw-text-body_s -tw-tracking-875"
        >
          {{ status }}
        </div>
        <div
          v-if="place"
          class="tw-backdrop-blur-sm tw-rounded-lg tw-py-[5px] tw-px-[11px] tw-text-white tw-bg-text01/40 tw-text-body_s -tw-tracking-875 tw-flex tw-items-center tw-gap-3"
        >
          <img
            src="~assets/images/icons/geo.svg"
            alt="location"
            width="24"
            height="24"
          />
          {{ place }}
        </div>
      </div>
      <button class="tw-absolute tw-left-4 tw-bottom-4 button-link">
        <BaseSquareIcon>
          <img
            src="/images/icons/arrow_line_right-green.svg"
            width="24"
            height="24"
          />
        </BaseSquareIcon>
      </button>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
const complexProps = defineProps<{
  img: string
  alt?: string
  width?: number
  height?: number
  title: string
  typeApartment: string
  price: string
  place: string
  status: string
}>()
</script>
<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: 374px auto;
  .img {
    @apply tw-transition-transform transition-base;
  }
  .button-link {
    @apply tw-opacity-0;
    @apply tw-transition-opacity transition-base;
  }

  @media (hover: hover) {
    .img:hover {
      transform: scale(1.1);
    }
    &:hover .button-link {
      @apply tw-opacity-100;
    }
  }

  @media (hover: none) {
    &:active .button-link {
      @apply tw-opacity-100;
    }
    &:active .img {
      transform: scale(1.1);
    }
  }
}
</style>
