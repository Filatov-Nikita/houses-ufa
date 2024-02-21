<template>
  <div class="info-block">
    <div class="info-block__grid">
      <div class="info-block__left">
        <p class="info-block__date">{{ $formatDate(item.created_at) }}</p>
        <p>Онлайн-бронирование № {{ item.id }}</p>
      </div>
      <div class="info-block__right">
        <p class="info-block__caption">
          <BaseIcon class="info-block__caption-icon" name="clock" color="tw-fill-primary" />
          <span>{{ item.crm3_status?.name ?? item.status.title }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Booking } from '../types';

  defineProps<{
    item: Booking,
  }>();
</script>

<style scoped lang="scss">
  .info-block {
    border-radius: 16px;
    padding: 16px 24px;
    @apply tw-bg-base00;

    &__date {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 4px;
      @apply tw-text-text02;
    }

    &__grid {
      max-width: 1000px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 24px;
    }

    &__right {
      align-self: flex-end;
      padding-right: 40px;
    }

    &__caption {
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
