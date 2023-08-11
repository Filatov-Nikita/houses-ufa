<template>
  <section class="section-first">
    <div class="tw-container">
      <div class="section-first__wrapper">
        <BreadCrumbs :history-list="historyList" />
        <div class="content">
          <h2 class="title">
            <slot name="title" />
          </h2>
          <p class="text">
            <slot name="text" />
          </p>
        </div>
        <slot name="icon" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const propsSection = defineProps<{
  historyList: { name: string; to?: string }[]
}>()
</script>
<style lang="scss" scoped>
.section-first {
  &__wrapper {
    @apply tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-py-8 tw-px-4 lg:tw-py-12 lg:tw-px-6 xl:tw-py-16 xl:tw-px-10;
    @apply tw-relative;
    &::before {
      content: '';
      background: url(./assets/images/icons/first-section-bg-mob.svg) right
        no-repeat;
      background-size: contain;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 311px;

      transition: transform 0.3s ease;

      @screen lg {
        background: url(./assets/images/icons/first-section-bg.svg) right
          no-repeat;
        height: 300px;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
      @screen xl {
        height: 440px;
        width: 100%;
        top: 14px;
        transform: translateY(0%);
      }
    }
  }
  .content {
    @apply tw-relative;
    @apply tw-grid tw-gap-4 lg:tw-gap-6;
  }
  .title {
    @apply tw-text-h5 lg:tw-text-h2;
  }
  .bread-crumbs {
    @apply tw-relative;
    @apply tw-mb-4;
  }
  .icon {
    @apply tw-absolute;
  }
}
</style>
