<template>
  <div class="item" :class="{ active: show }">
    <div class="item__head tw-flex tw-justify-between tw-items-center tw-gap-4">
      <h4 class="tw-text-body_l">{{ title }}</h4>
      <button class="btn" @click="show = !show">
        <BaseSquareIcon>
          <svg
            class="icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0307 9.53104L12.5307 17.031C12.461 17.1008 12.3783 17.1561 12.2873 17.1938C12.1962 17.2316 12.0986 17.251 12.0001 17.251C11.9015 17.251 11.8039 17.2316 11.7128 17.1938C11.6218 17.1561 11.5391 17.1008 11.4694 17.031L3.96943 9.53104C3.8287 9.39031 3.74963 9.19944 3.74963 9.00042C3.74963 8.80139 3.8287 8.61052 3.96943 8.46979C4.11016 8.32906 4.30103 8.25 4.50005 8.25C4.69907 8.25 4.88995 8.32906 5.03068 8.46979L12.0001 15.4401L18.9694 8.46979C19.0391 8.40011 19.1218 8.34483 19.2129 8.30712C19.3039 8.26941 19.4015 8.25 19.5001 8.25C19.5986 8.25 19.6962 8.26941 19.7872 8.30712C19.8783 8.34483 19.961 8.40011 20.0307 8.46979C20.1004 8.53947 20.1556 8.6222 20.1933 8.71324C20.2311 8.80429 20.2505 8.90187 20.2505 9.00042C20.2505 9.09896 20.2311 9.19654 20.1933 9.28759C20.1556 9.37863 20.1004 9.46136 20.0307 9.53104Z"
              fill="#8F8F8F"
            />
          </svg>
        </BaseSquareIcon>
      </button>
    </div>

    <div class="item__body">
      <div class="item__body-content">
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const faqProps = defineProps<{
  title: string
  text: string
}>()
const show = ref(false)
</script>
<style lang="scss" scoped>
.item {
  @apply tw-bg-white tw-rounded-2xl tw-px-4 tw-py-6 tw-grid tw-gap-0;
  @apply tw-transition-all transition-base;
  &__head {
    .icon {
      @apply tw-transition-transform transition-base;
      & > path {
        @apply tw-transition-fill transition-base;
      }
    }
  }
  &__body {
    @apply tw-grid  tw-overflow-hidden;
    grid-template-rows: 0fr;
    @apply tw-transition-all transition-base;
    &-content {
      @apply tw-min-h-0;
    }
  }
  &.active {
    @apply tw-gap-4;
    & .item__head .icon {
      @apply tw-transform tw-rotate-180;
      & > path {
        @apply tw-fill-text00;
      }
    }
    & .item__body {
      grid-template-rows: 1fr;
    }
  }
}
</style>
