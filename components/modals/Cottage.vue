<template>
  <BaseModal v-model="open" v-slot="{ hide }" :forMob="true">
    <div class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 tw-grid tw-gap-6">
      <div class="tw-flex tw-justify-between tw-items-center">
        <div
          class="tw-rounded-lg tw-overflow-hidden tw-h-16 tw-w-[5.75rem] tw-relative"
        >
          <img
            class="tw-absolute tw-w-full tw-h-full tw-object-cover"
            src="/assets/images/img/country_real_estate.png"
            alt=""
          />
        </div>
        <div
          class="tw-rounded-lg tw-w-fit tw-bg-base01 tw-text-body_s tw-px-3 tw-py-[5px] tw-grid tw-place-content-center"
        >
          Новый
        </div>
      </div>
      <div>
        <h6 class="tw-text-h6 tw-mb-1">Участок №XX</h6>
        <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">
          с домом {Название проекта}
        </p>
      </div>
      <div class="tw-flex tw-justify-between">
        <div>
          <h5 class="tw-text-h5 tw-text-primary tw-mb-1">20 сот.</h5>
          <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">
            площадь участка
          </p>
        </div>
        <div>
          <h5 class="tw-text-h5 tw-text-primary tw-mb-1">120 м²</h5>
          <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">
            площадь дома
          </p>
        </div>
      </div>

      <div class="tw-flex tw-gap-4">
        <BaseButton class="tw-grow"> Подробнее </BaseButton>
        <BaseButton
          padding-classes=" tw-p-4"
          theme="gray"
          class=" "
          @click="hide"
        >
          <BaseIcon name="close" class="tw-w-6 tw-h-6" />
        </BaseButton>
      </div>
      <BaseButton theme="gray" class="tw-grow" @click="hide">
        Закрыть
      </BaseButton>
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
