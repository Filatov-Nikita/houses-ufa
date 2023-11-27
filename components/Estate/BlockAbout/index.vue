<template>
  <div class="about-block">
    <div class="about-block__grid">
      <div class="about-block__left">
        <h2 class="about-block__title">{{ title }}</h2>
      </div>
      <div class="about-block__right">
        <p class="about-block__text">{{ text }}</p>
        <div class="about-adv">
          <div
            class="about-adv__item"
            v-for="adv in advantages"
            :key="adv.title"
          >
            <p class="about-adv__number">{{ adv.title }}</p>
            <p class="about-adv__value">{{ adv.value }}</p>
          </div>
        </div>
        <BaseButton
          v-if="!hideAction"
          class="about-block__action"
          theme="gray"
          @click="onAction"
        >
          {{ actionTitle }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Advantage {
    title: string,
    value: string
  }

  interface Props {
    advantages: Advantage[],
    text: string,
    title: string,
    actionTitle: string,
    hideAction?: boolean
  }

  withDefaults(defineProps<Props>(), { hideAction: false });
  const emit = defineEmits<{ (event: 'action'): void }>();

  function onAction() {
    emit('action');
  }
</script>

<style scoped lang="scss">
  .about-block {
    padding: 40px;
    border-radius: 16px;
    position: relative;
    z-index: 0;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include lg {
      padding: 24px 16px;
    }

    &::before {
      content: '';
      display: block;
      background: url(./images/decor.svg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;
      border-radius: 16px 0 0 16px;
      top: 0;
      left: 0;
      width: calc(50% - 30px);
      height: 100%;
      position: absolute;
      z-index: -1;

      @include md {
        width: 30%;
      }

      @include sm {
        display: none;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__left {
      margin: 10px;
      width: calc(100% / 12 * 6 - 20px);

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__right {
      margin: 10px;
      width: calc(100% / 12 * 6 - 20px);

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 8px;
      @apply tw-text-text00;

      @include sm {
        margin-bottom: 4px;
        @apply tw-text-2xl;
      }
    }

    &__text {
      margin-bottom: 24px;
      @apply tw-text-text00 tw-text-base;
    }

    &__action {
      width: 100%;
      margin-top: 24px;
    }
  }

  .about-adv {
    display: flex;
    flex-wrap: wrap;
    margin: -12px;

    &__item {
      margin: 12px;
      width: calc(100% / 12 * 4 - 24px);

      @include md {
        width: calc(100% / 12 * 6 - 24px);
      }
    }

    &__number {
      margin-bottom: 4px;
      @apply tw-text-primary tw-text-2xl;
    }

    &__value {
      @apply tw-text-text02 tw-text-base;
    }
  }
</style>
