<template>
  <div class="order-time-list">
    <div class="order-time-list__label">
      Выберите время
    </div>
    <div class="order-time-list__slots">
      <button
        type="button"
        class="time-slot"
        v-for="slot in labels"
        :class="{ 'time-slot--active': slot.starts_at === model }"
        @click="model = slot.starts_at"
      >
        {{ slot.text }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Slot } from '../store/timeSlots';

  const model = defineModel<string | null>();

  const props = defineProps<{
    slots: Slot[],
  }>();

  const labels = computed(() => {
    return props.slots.map(getLabel);
  });

  function getLabel(slot: Slot) {
    const [_fromDate, fromTime] = slot.starts_at.split(' ');
    const [_toDate, toTime] = slot.ends_at.split(' ');
    return {
      text: fromTime.slice(0, 5) + ' - ' + toTime.slice(0, 5),
      ...slot,
    };
  }
</script>

<style scoped lang="scss">
  .order-time-list {
    &__label {
      margin-bottom: 8px;
      @apply tw-text-text02 tw-text-sm;
    }

    &__slots {
      display: flex;
      flex-wrap: wrap;
      margin: -4px;
    }
  }

  .time-slot {
    text-align: center;
    border-radius: 8px;
    padding: 12px;
    margin: 4px;
    width: fit-content;
    @apply tw-bg-base00 tw-text-text00 tw-text-base;

    &--active {
      @apply tw-bg-primary tw-text-white;
    }
  }
</style>
