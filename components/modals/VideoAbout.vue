<template>
  <BaseModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" v-slot="{ hide }">
    <div
      class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-6 xl:tw-p-10 tw-flex tw-flex-col tw-gap-6 lg:tw-h-full lg:tw-grid tw-w-full lg:tw-grid-rows-[auto_1fr]"
    >
      <div class="tw-flex tw-justify-end tw-items-center">
        <div class="tw-hidden lg:tw-block">
          <BaseButton
            type="button"
            @click="() => hide()"
            theme="gray"
            padding-classes=" tw-p-3"
            class=""
          >
            <BaseIcon name="close" class="tw-w-6 tw-h-6" />
          </BaseButton>
        </div>
      </div>
      <div class="tw-relative tw-overflow-hidden">
        <div
          class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-px-3 tw-py-8 tw-bg-base00 tw-grid tw-place-content-center tw-h-[230px] lg:tw-h-full tw-mb-6 lg:tw-mb-0"
        >
          <img
            format="avif,webp"
            src="/images/img/country_real_estate.png"
            class="tw-object-cover tw-absolute tw-h-full tw-w-full"
          />
        </div>
        <div class="lg:tw-hidden">
          <BaseButton theme="gray" @click="() => hide()" class="tw-w-full">
            Закрыть
          </BaseButton>
        </div>
      </div>
    </div>
  </BaseModal>
</template>
<script lang="ts" setup>
defineProps<{
  modelValue: boolean
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', val: boolean): void
}>();
</script>
<style lang="scss" scoped></style>
