<template>
  <BaseModal v-model="showed" v-slot="{ hide }">
    <BaseModalCard>
      <div class="milav-modal">
        <div class="milav-modal__text">
          <p class="milav-modal__title">Вызвать оценщика</p>
          <p class="milav-modal__subtitle">
            Оценить вашу недвижимость при помощи нашего квалифицированного оценщика
          </p>
        </div>
        <BtnsActionsBase class="milav-modal__hide" icon="close" @click="hide" />
      </div>
      <Form @success="hide" />
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import Form from './Form.vue';
  import { useSyncProps } from '@/composables/useSyncProp';

  const props = defineProps<{
    showed: boolean,
  }>();

  defineEmits<{ (event: 'update:showed', val: boolean): void }>();

  const showed = useSyncProps(props, 'showed');
</script>

<style scoped lang="scss">
  .milav-modal {
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
      margin-bottom: 8px;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__hide {
      flex-shrink: 0;
    }

    &__subtitle {
      @apply tw-text-text02 tw-text-base;
    }
  }
</style>
