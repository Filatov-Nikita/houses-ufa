<template>
  <div class="base-dropdown">
    <button class="base-dropdown__title-btn" :class="titleClass" @click="toggle">
      <slot name="title" />
      <BaseIcon
        class="base-dropdown__icon"
        :color="showed ? 'tw-fill-text00' : 'tw-fill-icon'"
        :class="{ 'base-dropdown__icon--active': showed }"
        name="forward"
      />
    </button>
    <Transition name="show">
      <div :class="bodyClass" v-show="showed">
        <slot name="body" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      showInitial?: boolean,
      titleClass?: string,
      bodyClass?: string,
    }>(),
    {
      showInitial: false,
    },
  );

  const showed = ref(props.showInitial);

  function toggle() {
    showed.value = !showed.value;
  }
</script>


<style scoped lang="scss">
  .base-dropdown {
    &__title-btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    &__icon {
      width: 24px;
      height: 24px;
      transform: rotate(90deg);

      &--active {
        transform: rotate(-90deg);
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
