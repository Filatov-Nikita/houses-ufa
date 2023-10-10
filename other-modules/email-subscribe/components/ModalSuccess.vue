<template>
  <BaseModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" v-slot="{ hide }" >
    <div class=" tw-rounded-2xl tw-p-10 tw-bg-white tw-max-w-[507px]">
      <div class=" tw-grid tw-justify-items-center tw-text-center tw-mb-6 ">
        <div class=" tw-bg-base00 tw-rounded-lg tw-p-3 tw-w-fit tw-mb-6">
          <BaseIcon name="check" class=" tw-w-8 tw-h-8 tw-text-primary"/>
        </div>
        <div class=" tw-text-h5 tw-mb-4">
          Спасибо, что подписались на рассылку
        </div>
        <div class=" tw-text-text02">
          Все обновления и письма будут приходить на почту
        </div>
      </div>
      <BaseButton theme="gray" class="tw-w-full" @click="hide">
        Хорошо
      </BaseButton>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
  defineProps<{ modelValue: boolean }>();
  defineEmits<{  (event: 'update:modelValue', val: boolean): void }>();
</script>
