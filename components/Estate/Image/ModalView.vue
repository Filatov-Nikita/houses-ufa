<template>
  <BaseModal v-model="showed" v-slot="{ hide }">
    <BaseModalCard class="estate-image-modal__card">
      <div class="estate-image-modal__header">
        <p class="estate-image-modal__name">{{ title }}</p>
        <BtnsActionsBase theme="gray" icon="close" @click="hide" />
      </div>
      <slot />
    </BaseModalCard>
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
  .estate-image-modal {
    &__header {
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      gap: 24px;
    }

    &__name {
      font-size: 32px;
      line-height: 1.25;
      @apply tw-text-text00;
    }

    &__card {
      width: 100%;
    }
  }
</style>
