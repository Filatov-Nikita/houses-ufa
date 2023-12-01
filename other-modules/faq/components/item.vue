<template>
  <article class="faq-item" @click="showed = !showed">
    <div class="faq-item__header">
      <h3 class="faq-item__title">{{ title }}</h3>
      <BtnsActionsBase class="faq-item__btn" :class="{ 'faq-item__btn--active': showed }" icon="forward" />
    </div>
    <transition name="show">
      <div class="faq-item__body" v-if="showed">
        <p v-html="body"></p>
      </div>
    </transition>
  </article>
</template>

<script setup lang="ts">
  defineProps<{
    title: string,
    body: string,
  }>();

  const showed = ref(false);
</script>

<style scoped lang="scss">
  .faq-item {
    padding: 24px;
    border-radius: 16px;
    cursor: pointer;
    user-select: none;
    @apply tw-bg-white;

    @include md {
      padding: 24px 16px;
    }

    &__header {
      display: flex;
      gap: 48px;

      @include md {
        gap: 16px;
      }
    }

    &__title {
      flex-grow: 1;
      align-self: center;
      @apply tw-text-text00 tw-text-xl;

      @include md {
        @apply tw-text-lg;
      }
    }

    &__btn {
      transition: transform 200ms;
      transform: rotate(90deg);
      flex-shrink: 0;

      &--active {
        transform: rotate(-90deg);
      }
    }

    &__body {
      padding-top: 16px;
      padding-right: 80px;
      font-size: 16px;
      line-height: 28px;
      white-space: pre-wrap;
      @apply tw-text-text01;

      @include md {
        padding-right: 8px;
      }
    }
  }

  .show-enter-active,
  .show-leave-active {
    transform: translateX(0);
    transition: all 250ms linear;
    opacity: 1;
  }

  .show-enter-from,
  .show-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
</style>
