<template>
  <div class="lk-progress">
    <div class="lk-progress-one" v-for="(item, index) in items">
      <div class="lk-progress-one__label">
        <span class="lk-progress-one__text">{{ item.label }}</span>
        <BaseIcon
          class="lk-progress-one__icon"
          color="tw-fill-text02"
          name="check-line"
        />
      </div>
      <div class="lk-progress-one__cover-line">
        <div
          class="lk-progress-one__active-line"
          :class="{ 'lk-progress-one__active-line--active': isActive(index) }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Item {
    label: string,
  }

  interface Props {
    items: Item[],
    current: number,
  }

  const props = defineProps<Props>();

  function isActive(i: number) {
    return props.current >= i;
  }
</script>

<style scoped lang="scss">
  .lk-progress {
    display: flex;
    gap: 24px;
  }

  .lk-progress-one {
    width: 100%;

    &__label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 8px 0px;
    }

    &__icon {
      width: 16px;
      height: 16px;
    }

    &__text {
      @apply tw-text-text01 tw-text-sm;
    }

    &__cover-line {
      border-radius: 8px;
      height: 4px;
      @apply tw-bg-base01;
    }

    &__active-line {
      height: 4px;
      border-radius: 8px;
      width: 0px;
      transition: width 300ms;
      @apply tw-bg-primary;

      &--active {
        width: 100%;
      }
    }
  }
</style>
