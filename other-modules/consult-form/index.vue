<template>
  <BaseModal v-model="showed" v-slot="{ hide }">
    <BaseModalCard>
      <div class="consult-header">
        <div class="consult-header__text">
          <p class="consult-header__title">Получить консультацию</p>
          <p class="consult-header__subtitle">
            Оставьте свои контактные данные и мы свяжемся с вами
          </p>
        </div>
        <BtnsActionsBase icon="close" @click="hide" />
      </div>
      <Form />
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import Form from './components/Form.vue';
  import { useSyncProps } from '@/composables/useSyncProp';

  const props = defineProps<{
    showed: boolean
  }>();

  defineEmits<{ (event: 'update:showed', val: boolean): void }>();

  const showed = useSyncProps(props, 'showed');
</script>

<style scoped lang="scss">
  .consult-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 32px;

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 8px;
    }

    &__subtitle {
      @apply tw-text-text02 tw-text-base;
    }
  }
</style>
