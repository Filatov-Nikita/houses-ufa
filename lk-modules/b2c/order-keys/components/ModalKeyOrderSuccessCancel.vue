<template>
  <BaseModal v-model="model">
    <BaseModalCard class="keys-alert-modal">
      <div class="tw-text-center">
        <span class="keys-alert-modal__icon-wrap">
          <BaseIcon name="check" fit color="#4FBA78" />
        </span>
      </div>
      <div class="keys-alert-modal__title">
        Ваша заявка на получение ключей была успешно отменена
      </div>
      <div class="keys-alert-modal__body">
        <p>Вы можете в любой время оформить заявку повторно</p>
      </div>
      <BaseButton class="tw-w-full" theme="gray" @click="$emit('ok')">
        Хорошо
      </BaseButton>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  const model = defineModel<boolean>({ default: false });

  defineEmits<{
    (event: 'ok'): void,
  }>();
</script>

<style lang="scss" src="../styles/keys-alert-modal.scss"></style>
