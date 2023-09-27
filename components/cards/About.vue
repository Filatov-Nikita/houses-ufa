<template>
  <div class="card">
    <div class="card__wrapper"></div>
    <div
      class="card__contnet tw-grid lg:tw-grid-cols-2 tw-gap-6 tw-px-4 tw-py-6 lg:tw-p-6 xl:tw-p-10 tw-relative"
    >
      <div class="tw-flex tw-flex-col tw-gap-2">
        <h2 class="tw-text-h5 lg:tw-text-h4">{{ title }}</h2>
      </div>
      <div class="tw-grid tw-gap-6">
        <p>
          {{ text }}
        </p>
        <div class="tw-grid tw-grid-cols-2 tw-gap-6 lg:tw-grid-cols-3">
          <div v-for="item in indicators">
            <h5 class="tw-text-h5 tw-text-primary">{{ item.title }}</h5>
            <p class="tw-text-text02 tw-text-body_m">{{ item.subtitle }}</p>
          </div>
        </div>
        <NuxtLink :to="to">
          <BaseButton theme="gray" class="tw-w-full">
            Перейти к генплану
          </BaseButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  title: string
  text: string
  indicators: { title: string; subtitle: string }[]
  to: string
}
const props = defineProps<Props>()
</script>
<style lang="scss" scoped>
.card {
  @apply tw-bg-white tw-rounded-2xl  tw-relative tw-overflow-hidden;
  &__wrapper {
    @apply tw-absolute tw-w-full tw-h-full tw-overflow-hidden;
    &::before {
      @screen lg {
        @apply tw-absolute;
        content: '';
        top: 0;
        left: 0px;
        background: url(/images/icons/poligon.svg) left center / contain
          no-repeat;
        height: 100%;
        width: 619px;
        left: -200px;
      }
      @screen xl {
        left: 0px;
      }
    }
    &::after {
      @screen lg {
        @apply tw-absolute;
        content: '';
        bottom: 0;
        left: 48px;
        width: 434px;
        height: 260px;
        background: url(/images/icons/group-icons-2.svg) left center /
          contain no-repeat;
      }
    }
  }
  @screen lg {
    height: 356px;
    width: 100%;
  }
}
</style>
