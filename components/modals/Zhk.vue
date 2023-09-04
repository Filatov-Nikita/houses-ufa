<template>
  <BaseModal v-model="open" v-slot="{ hide }" :forMob="true">
    <div class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 tw-grid tw-gap-6">
      <div class="tw-flex tw-justify-between tw-items-center">
        <div>
          <h6 class="tw-text-h6 tw-mb-1">Малина</h6>
          <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">Литер 1</p>
        </div>
        <div
          class="tw-rounded-lg tw-w-fit tw-bg-base01 tw-text-body_s tw-px-3 tw-py-[5px] tw-grid tw-place-content-center"
        >
          Новый
        </div>
      </div>
      <div class="tw-flex tw-justify-between">
        <div>
          <h5 class="tw-text-h5 tw-text-primary tw-mb-1">2-22</h5>
          <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">этажей</p>
        </div>
        <div>
          <h5 class="tw-text-h5 tw-text-primary tw-mb-1">45</h5>
          <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">
            свободных квартир
          </p>
        </div>
      </div>
      <div class="tw-grid tw-gap-2">
        <div
          class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-flex tw-justify-between"
        >
          <span> 1-комн. квартиры </span>
          <span class="tw-text-text00"> от 3.4 млн ₽ </span>
        </div>
        <div
          class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-flex tw-justify-between"
        >
          <span> 1-комн. квартиры </span>
          <span class="tw-text-text00"> от 3.4 млн ₽ </span>
        </div>
        <div
          class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-flex tw-justify-between"
        >
          <span> 1-комн. квартиры </span>
          <span class="tw-text-text00"> от 3.4 млн ₽ </span>
        </div>
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
