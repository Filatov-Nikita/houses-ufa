<template>
  <div class="list-item">
    <div class="list-item__data">
      <div class="list-item__left">
        <div class="list-item__param">{{ placeName }} {{ number }}</div>
        <div class="list-item__price">{{ $amount(price_total) }}</div>
      </div>
      <div class="list-item__right">
        <div class="list-item__param">{{ area_total }} м²</div>
        <div class="list-item__actions">
          <button class="list-item__action">
            <BaseIcon class="tw-w-6 tw-h-6" color="tw-text-text01" name="lock2" />
          </button>
          <button class="list-item__action">
            <BaseIcon class="tw-w-6 tw-h-6" color="tw-text-text01" name="heart" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    placeName: string,
    area_total: string,
    price_total: string,
    number: string
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .list-item {
    padding: 16px;
    border-radius: 16px;
    @apply tw-border tw-border-solid tw-border-border00;

    &__data {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
      @apply tw-text-text00;
    }

    &__left {
      flex-grow: 1;
    }

    &__right {
      flex-grow: 1;
      text-align: right;
    }

    &__actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }

    &__action {
      width: 48px;
      height: 48px;
      padding: 12px;
      border-radius: 8px;
      @apply tw-bg-base00;
    }

    &__price {
      padding-top: 12px;
      @apply tw-text-xl;
    }

    &__param {
      padding-bottom: 16px;
      @apply tw-text-base;
    }
  }
</style>
