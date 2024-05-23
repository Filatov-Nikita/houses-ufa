<template>
  <article class="agency-data">
    <div class="agency-data__wrap">
      <div class="agency-data__item">
        <p class="agency-data__label">Агентство</p>
        <p class="agency-data__value">{{ profile?.legal_name ?? '-' }}</p>
      </div>
      <div class="agency-data__item">
        <p class="agency-data__label">Количество агентов</p>
        <p class="agency-data__value">{{ profile?.agents_count ?? '-' }}</p>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
  import { ProfileB2Y } from '@/lk-modules/b2y/profile/types';

  defineProps<{
    profile?: ProfileB2Y,
  }>();
</script>

<style scoped lang="scss">
  .agency-data {
    border-radius: 16px;
    padding: 24px;
    @apply tw-bg-base00;

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 48px;
    }

    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__value {
      @apply tw-text-2xl tw-text-text00;
    }
  }
</style>
