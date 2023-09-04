<template>
  <BaseModal v-model="open" v-slot="{ hide }" :forMob="true">
    <div class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4">
      <div
        class="tw-w-full tw-h-[220px] tw-rounded-xl tw-overflow-hidden tw-mb-4 tw-relative"
      >
        <img
          format="avif,webp"
          src="/assets/images/img/country_real_estate.png"
          class="tw-object-cover tw-absolute tw-h-full tw-w-full"
        />
      </div>
      <div class="tw-mb-6">
        <h5 class="tw-text-h6 tw-mb-2">Михайловка Green Place</h5>
        <p class="tw-text-text02 tw-text-body_s">с. Михайловка Green Place</p>
      </div>
      <div class="tw-grid tw-grid-cols-[1fr_auto] tw-gap-4">
        <BaseButton> Подробнее </BaseButton>

        <BaseButton
          type="button"
          @click="() => hide()"
          theme="gray"
          padding-classes=" tw-p-4"
          class=""
        >
          <BaseIcon name="close" class="tw-w-6 tw-h-6" />
        </BaseButton>
      </div>
    </div>
  </BaseModal>
</template>
<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', val: boolean): void
}>()
const open = ref(false)
watch(
  () => props.modelValue,
  (v) => {
    open.value = v
  }
)
watch(open, (v) => {
  if (!v) emit('update:modelValue', false)
})
</script>
<style lang="scss" scoped></style>
