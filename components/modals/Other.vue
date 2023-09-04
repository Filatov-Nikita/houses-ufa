<template>
  <BaseModal
    v-model="popup"
    v-slot="{ hide }"
    :is-full-mob="isFullMob"
    :forMob="forMob"
  >
    <BaseModalCard
      :is-full-mob="isFullMob"
      :is-full="isFull"
      class="tw-h-auto"
      v-bind="$attrs"
    >
      <div
        class="tw-grid tw-gap-4 tw-grid-rows-[1fr,auto] lg:tw-gap-8 tw-h-full lg:tw-grid-rows-none"
      >
        <div
          class="tw-h-full"
          :class="[
            isFullMob
              ? 'tw-p-4 lg:tw-p-0 tw-bg-white tw-rounded-2xl lg:tw-rounded-none tw-overflow-hidden'
              : '',
          ]"
        >
          <div
            class="tw-self-start tw-grid tw-overflow-hidden tw-relative tw-h-full lg:tw-grid-rows-[auto_1fr]"
          >
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
              <div class="lg:tw-hidden" v-if="closeBtnMob">
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

            <div class="tw-mb-6 lg:tw-mb-8">
              <h4
                class="tw-text-h6 lg:tw-text-h4 tw-min-h-[32px] lg:tw-block"
                :class="[titlePos]"
              >
                {{ title }}
              </h4>
            </div>
            <div
              class="tw-overflow-auto"
              :style="{ paddingBottom: offset + 'px' }"
            >
              <slot />
            </div>
          </div>
        </div>
        <div
          v-if="isActionSlot"
          ref="actionContent"
          class="tw-bg-white tw-rounded-t-lg tw-fixed tw-left-0 tw-bottom-0 tw-px-4 tw-pt-3 tw-w-full tw-h-[100px]"
        >
          <slot name="action" />
        </div>
        <slot name="action-second" />
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
  isFullMob?: boolean
  closeBtnMob?: boolean
  titlePos?: string
  forMob?: boolean
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
  isFullMob: false,
  closeBtnMob: true,
  titlePos: 'tw-text-center',
  forMob: false,
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
