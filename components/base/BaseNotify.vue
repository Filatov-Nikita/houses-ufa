<template>
  <ClientOnly>
    <teleport to="body">
      <div class="base-notify">
        <transition-group
          leave-active-class="animate__animated anim-300ms animate__fadeOutDown"
          enter-active-class="animate__animated anim-300ms animate__fadeInUp"
        >
            <div
              class="base-notify__item" :class="`base-notify__item--${item.type}`"
              v-for="item in items" :key="item.id"
            >
              <div>{{ item.message }}</div>
              <button class="base-notify__close" @click="remove(item.id)">
                <BaseIcon class="tw-w-full tw-h-full" name="close" />
              </button>
            </div>
          </transition-group>
        </div>
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
  import { useNotifyStore } from '@/stores/notify';

  const notifyStore = useNotifyStore();

  const items = computed(() => {
    return notifyStore.items;
  });

  const timeouts: Record<number, unknown> = {};

  function remove(id: number) {
    if(timeouts[id]) {
      clearTimeout(id);
      delete timeouts[id];
    };
    notifyStore.remove(id);
  }

  watch(items, () => {
    items.value.filter(item => !timeouts[item.id]).forEach(item => {
      timeouts[item.id] = setTimeout(() => {
        remove(item.id);
      }, notifyStore.timeout);
    });
  }, { immediate: true, deep: true });
</script>

<style scoped lang="scss">
  .base-notify {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 30px;
    z-index: 9999;

    &__item {
      min-width: 300px;
      max-width: 400px;
      padding: 20px;
      margin: 20px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: space-between;
      @apply tw-text-base tw-leading-tight;

      &--warning {
        @apply tw-bg-warning tw-text-white;
      }

      &--error {
        @apply tw-bg-error tw-text-white;
      }

      &--success {
        @apply tw-bg-primary tw-text-white;
      }
    }

    &__close {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      @apply tw-text-white;
    }
  }
</style>
