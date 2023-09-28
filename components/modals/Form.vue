<template>
  <BaseModal
    :model-value="modelValue"
    v-slot="{ hide }"
    :is-full-mob="true"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <BaseModalCard
      v-bind="{ hide }"
      :is-full-mob="true"
      class="tw-h-screen lg:tw-h-auto"
    >
      <form
        class="tw-grid tw-gap-4 lg:tw-gap-8 tw-h-full tw-grid-rows-[auto_1fr]"
      >
        <div
          class="tw-p-4 lg:tw-p-0 tw-rounded-2xl lg:tw-rounded-none tw-bg-white tw-self-start tw-grid tw-overflow-hidden tw-h-full"
        >
          <div class="tw-relative">
            <div class="tw-absolute tw-right-0 tw-top-0">
              <div class="tw-hidden lg:tw-block">
                <BaseButton
                  type="button"
                  @click="hide"
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
                  @click="hide"
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
              class="tw-text-h6 lg:tw-text-h4 tw-min-h-[32px] tw-grid tw-place-content-center lg:tw-block tw-mb-6 lg:tw-mb-2"
            >
              Получить консультацию
            </h4>
            <p class="tw-text-text02">
              Оставьте свои контактные данные и мы свяжемся с вами
            </p>
          </div>
          <div
            class="tw-grid lg:tw-grid-cols-2 tw-gap-6 lg:tw-gap-5 tw-overflow-auto"
          >
            <BaseInput
              name="name"
              label="Имя"
              placeholder="Иван"
              class="lg:tw-col-span-2"
            />
            <BaseInput
              name="name"
              label="Телефон"
              placeholder="+7 (XXX) XXX XX XX"
            />
            <BaseInput
              name="email"
              label="E-mail"
              placeholder="name@gmail.com"
            />
            <BaseInput
              name="message"
              label="Сообщение"
              placeholder="У меня есть вопрос..."
              class="lg:tw-col-span-2"
            />
          </div>
        </div>
        <div class="tw-bg-white -tw-mx-4 tw-px-4 tw-py-3 tw-self-end">
          <div class="tw-grid lg:tw-grid-cols-2 tw-gap-2 lg:tw-gap-5">
            <BaseButton theme="gray" class="lg:tw-order-2">
              Получить консультацию
            </BaseButton>
            <p
              class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 lg:tw-order-1"
            >
              Нажимая кнопку, вы соглашаетесь
              <br class="tw-hidden lg:tw-block" />
              <a href="#" class="tw-text-primary">
                с условиями обработки персональных данных
              </a>
            </p>
          </div>
        </div>
      </form>
    </BaseModalCard>
  </BaseModal>
</template>
<script lang="ts" setup>
interface Props {
  modelValue?: boolean
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits<{
  (event: 'update:modelValue', val: boolean): void
}>();
</script>
<style lang="scss" scoped></style>
