<template>
  <BaseModal v-model="model">
    <BaseModalCard class="keys-alert-modal">
      <div class="tw-text-center">
        <span class="keys-alert-modal__icon-wrap">
          <BaseIcon name="check" fit color="#4FBA78" />
        </span>
      </div>
      <div class="keys-alert-modal__title">
        Заявка на получение ключей успешна отправлена
      </div>
      <div class="keys-alert-modal__body tw-py-4">
        <p>Дата и время получения ключей</p>
        <p class="tw-text-xl tw-text-text00 tw-mt-2" >{{ dateLabel }}</p>
      </div>
      <BaseButton class="tw-w-full" theme="gray" @click="$emit('ok')">
        Хорошо
      </BaseButton>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { formatKeyDate } from '../helpers';
  import { SlotResponse } from '../composables/useOrder';

  const props = defineProps<{
    slot: SlotResponse | null,
  }>();

  const model = defineModel<boolean>({ default: false });

  defineEmits<{
    (event: 'ok'): void,
  }>();

  const dateLabel = computed(() => {
    if(!props.slot) return '-';
    return formatKeyDate(props.slot.starts_at, props.slot.ends_at);
  });
</script>

<style lang="scss" src="../styles/keys-alert-modal.scss"></style>
