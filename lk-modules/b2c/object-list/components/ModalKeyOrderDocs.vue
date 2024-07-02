<template>
  <BaseModal v-model="model" v-slot="{ hide }">
    <BaseModalCard>
      <div class="modal-header tw-mb-4">
        <p class="modal-header__title">Документы для получения ключей на квартиру</p>
        <BtnsActionsBase class="modal-header__hide" icon="close" @click="hide" />
      </div>
      <DocumentsAlert />
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import DocumentsAlert from '@/lk-modules/b2c/order-keys/components/DocumentsAlert.vue';

  const model = defineModel<boolean>({ default: false });
</script>
