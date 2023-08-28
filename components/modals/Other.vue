<template>
  <BaseModal v-model="popup" v-slot="{ hide }" :is-full-mob="isFull">
    <BaseModalCard
      :is-full-mob="isFull"
      class="tw-h-auto"
      v-bind="({ hide }, $attrs)"
    >
      <div
        class="tw-grid tw-gap-4 lg:tw-gap-8 tw-h-full tw-grid-rows-[auto_1fr]"
        :style="{ paddingBottom: offset + 'px' }"
      >
        <div
          class="tw-p-4 lg:tw-p-0 tw-rounded-2xl lg:tw-rounded-none tw-bg-white tw-self-start tw-grid tw-overflow-hidden tw-h-full"
        >
          <div class="tw-relative">
            <div class="tw-absolute tw-right-0 tw-top-0">
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
              <div class="lg:tw-hidden">
                <BaseButton
                  type="button"
                  @click="() => hide()"
                  theme="transparent"
                  padding-classes=" tw-p-0"
                  class=""
                >
                  <BaseIcon name="close" class="tw-w-8 tw-h-8 tw-text-icon" />
                </BaseButton>
              </div>
            </div>
          </div>
          <div class="tw-mb-6 lg:tw-mb-8">
            <h4
              class="tw-text-h6 lg:tw-text-h4 tw-min-h-[32px] tw-grid tw-place-content-center lg:tw-block"
            >
              {{ title }}
            </h4>
          </div>
          <div class="tw-overflow-auto">
            <slot />
          </div>
        </div>
        <div
          v-if="isActionSlot"
          ref="actionContent"
          class="tw-bg-white tw-rounded-t-lg tw-fixed tw-left-0 tw-bottom-0 tw-px-4 tw-pt-3 tw-w-full tw-h-[100px]"
        >
          <slot name="action" />
        </div>
      </div>
    </BaseModalCard>
  </BaseModal>
</template>
<script lang="ts" setup>
interface Props {
  modelValue?: boolean
  title: string
  height?: string
  isFull?: boolean
}
defineOptions({
  inheritAttrs: false,
})
const emit = defineEmits<{
  (event: 'update:modelValue', val: boolean): void
}>()
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  height: 'auto',
  isFull: false,
})
const slots = useSlots()
const isActionSlot = computed(() => slots.hasOwnProperty('action'))

const { modelValue } = toRefs(props)
const actionContent = ref<HTMLElement>()
const offset = ref(0)
const popup = ref(false)
onMounted(() => {
  popup.value = modelValue.value
})
watchEffect(() => {
  if (actionContent.value) {
    offset.value = actionContent.value.offsetHeight + 10
  }
})
watch(popup, (val) => {
  emit('update:modelValue', val)
})
watch(modelValue, (val) => {
  popup.value = modelValue.value
})
</script>
<style lang="scss" scoped></style>
