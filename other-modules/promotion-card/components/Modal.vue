<template>
  <BaseModal v-model="showed" v-slot="{ hide }">
    <BaseModalCard>
      <div class="promo-modal">
        <div class="promo-modal__text">
          <p class="promo-modal__title">Выбрать недвижимость<br/>по акции</p>
        </div>
        <BtnsActionsBase class="promo-modal__hide" icon="close" @click="hide" />
      </div>
      <Form :item="item" @success="showed = false" />
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { useSyncProps } from '@/composables/useSyncProp';
  import Form from './Form.vue';
  import type { PromotionDetailed } from '@/types/promotions';

  const props = defineProps<{
    showed: boolean,
    item: PromotionDetailed,
  }>();

  defineEmits<{ (event: 'update:showed', val: boolean): void }>();

  const showed = useSyncProps(props, 'showed');
</script>

<style scoped lang="scss">
  .promo-modal {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 32px;

    @include sm {
      margin-bottom: 24px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__hide {
      flex-shrink: 0;
    }
  }
</style>
