<template>
  <div class="question-form">
    <div class="question-form__grid">
      <div class="question-form__left">
        <p class="question-form__title">
          <slot name="title"></slot>
        </p>
        <p class="question-form__text">
          <slot name="text"></slot>
        </p>
      </div>
      <div class="question-form__right">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  .question-form {
    padding: 40px;
    border-radius: 16px;
    position: relative;
    z-index: 0;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }

    &::before {
      content: '';
      display: block;
      background: url(../assets/images/decor.svg);
      background-size: var(--bg-size, contain);
      background-position: var(--bg-x, initial);
      background-repeat: no-repeat;
      border-radius: 16px 0 0 16px;
      top: 0;
      left: 0;
      width: calc(50% - 30px);
      height: 100%;
      position: absolute;
      z-index: -1;

      @include lg {
        background-size: var(--bg-size-lg, cover);
        background-position-x: var(--bg-x-lg, -114px);
      }

      @include md {
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

      @include md {
        width: calc(100% - 20px);
      }
    }

    &__right {
      margin: 10px;
      width: calc(100% / 12 * 6 - 20px);

      @include md {
        width: calc(100% - 20px);
      }
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 8px;
      @apply tw-text-text00;

    }

    &__text {
      @apply tw-text-text02 tw-text-base;

      @include lg {
        max-width: 300px;
      }
    }
  }
</style>
