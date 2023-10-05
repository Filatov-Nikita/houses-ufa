<template>
  <div class="flat-statuses">
    <div class="flat-statuses__status">
      <div class="flat-statuses__icon flat-statuses__icon--available"></div>
      <span>в продаже</span>
    </div>
    <div class="flat-statuses__status">
      <div class="flat-statuses__icon">
        <BaseIcon class="tw-w-4 tw-h-4" color="tw-fill-base02" name="lock" />
      </div>
      <span>бронь</span>
    </div>
    <div class="flat-statuses__status">
      <div class="flat-statuses__icon">
        <BaseIcon class="tw-w-4 tw-h-4" color="tw-fill-base02" name="clock" />
      </div>
      <span>продано</span>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .flat-statuses {
    padding: 24px 0;
    display: flex;
    gap: 24px;

    &__status {
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
      @apply tw-text-text00;
    }

    &__icon {
      width: 24px;
      height: 24px;
      padding: 4px;
      border-radius: 8px;

      &--available {
        @apply tw-bg-primary01;
      }
    }
  }

</style>
