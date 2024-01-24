<template>
  <article class="support-item">
    <div class="support-item__title-wrap">
      <h2 class="support-item__title">Обращение от {{ $formatDate(item.created_at) }}</h2>
      <p class="support-item__status">
        <BaseIcon class="support-item__status-icon" name="clock" color="tw-fill-primary" />
        <span>{{ item.status.title }}</span>
      </p>
    </div>
    <div class="support-item__question">
      <p>{{ item.problem }}</p>
    </div>
    <div class="support-item__answer-wrap" v-if="item.solution">
      <div class="support-item__logo-wrap">
        <img class="support-item__logo" src="../assets/gk-logo.svg" width="25" height="24" alt="лого жилого квартала" loading="lazy" />
      </div>
      <div class="support-item__answer">
        <p>{{ item.solution }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import type { SupportOne } from '../types';

  defineProps<{
    item: SupportOne,
  }>();
</script>

<style scoped lang="scss">
  .support-item {
    border-radius: 16px;
    padding: 16px 24px;
    @apply tw-bg-base00;

    &__title {
      font-size: 20px;
      line-height: 1.6;
    }

    &__title-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      margin-bottom: 16px;
    }

    &__question {
      margin-bottom: 16px;
      max-width: 800px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__answer {
      border-radius: 8px;
      padding: 8px;
      @apply tw-text-text01 tw-text-base tw-bg-white;

      &-wrap {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        max-width: 800px;
      }
    }

    &__logo {
      width: 24px;
      height: 24px;

      &-wrap {
        flex-shrink: 0;
        border-radius: 8px;
        padding: 8px;
        @apply tw-bg-white;
      }
    }

    &__status {
      border-radius: 8px;
      padding: 4px 8px;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      gap: 10px;
      @apply tw-bg-white tw-text-text00;

      &-icon {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
