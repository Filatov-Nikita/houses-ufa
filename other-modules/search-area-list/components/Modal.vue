<template>
  <BaseModal v-model="showed" v-slot="{ hide }">
    <BaseModalCard>
      <div class="tender-app">
        <div class="tender-app__text">
          <p class="tender-app__title">Заявка на земельный участок</p>
          <p class="tender-app__subtitle">
            Оставьте свои контактные данные и мы свяжемся с вами
          </p>
        </div>
        <BtnsActionsBase class="tender-app__hide" icon="close" @click="hide" />
      </div>
      <Form />
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { useSyncProps } from '@/composables/useSyncProp';
  import Form from './Form.vue';

  const props = defineProps<{
    showed: boolean,
  }>();

  defineEmits<{ (event: 'update:showed', val: boolean): void }>();

  const showed = useSyncProps(props, 'showed');
</script>

<style scoped lang="scss">
  .tender-app {
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
