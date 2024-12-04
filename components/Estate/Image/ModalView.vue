<template>
  <BaseModal class="modal-view" v-model="showed" v-slot="{ hide }">
    <div class="estate-image-modal__card">
      <div class="estate-image-modal__header">
        <BtnsActionsBase theme="gray" icon="close" @click="hide" />
      </div>
      <slot />
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
  import { useSyncProps } from '@/composables/useSyncProp';

  interface Props {
    title: string
    showed: boolean
  }

  const props = defineProps<Props>();

  defineEmits<{ (event: 'update:showed', val: boolean): void }>();

  const showed = useSyncProps(props, 'showed');
</script>

<style scoped lang="scss">
  :global(.modal-view .base-modal__wrap) {
    padding: 24px;
  }

  .estate-image-modal {
    &__header {
      position: absolute;
      top: 24px;
      right: 32px;
      z-index: 100;
    }

    &__name {
      font-size: 32px;
      line-height: 1.25;
      @apply tw-text-text00;
    }

    &__card {
      width: 100%;
      border-radius: 16px;
    }
  }
</style>
