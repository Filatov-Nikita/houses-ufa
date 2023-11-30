<template>
  <div class="tw-flex tw-justify-between tw-items-start tw-mb-8">
    <div>
      <h2 class="tw-text-h4 tw-mb-2">Личный кабинет</h2>
      <p class="tw-text-text02">
        Введите номер телефона, чтобы войти <br />
        или зарегистрироваться в личном кабинете
      </p>
    </div>
    <button
      class="tw-rounded-lg tw-p-3 tw-bg-base00 tw-w-fitt"
      @click="openPopup = false"
    >
      <BaseIcon name="close" class="tw-w-6 tw-h-6" />
    </button>
  </div>

  <Form class="tw-grid tw-gap-8" @submit="signIn" v-slot="{ meta }">
    <BaseInput
      rules="required"
      name="cellphone"
      label="Телефон"
      placeholder="+7 (999) 999 99-99"
      maska="+7 (###) ### ## ##"
      v-model="form.cellphone"
    />
    <div class="tw-flex tw-gap-5">
      <BaseButton
        theme="gray"
        paddingClasses="tw-px-4"
        @click="() => $emit('prev')"
      >
        Назад
      </BaseButton>
      <BaseButton
        class="tw-grow"
        :disabled="!meta.valid"
        :theme="!meta.valid ? 'gray' : 'green'"
        type="submit"
        >Далее</BaseButton
      >
    </div>
    <!-- <SpinnerDotPulse /> -->
  </Form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { Form } from 'vee-validate'

const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()

const config = useRuntimeConfig();

const authStore = useAuthStore()
const { openPopup, selectRole } = storeToRefs(authStore)

const form = reactive({
  cellphone: '',
});

interface VisitorRes {
  data: {
    cellphone: string,
    id: number,
    type: string,
  }
}

async function createVisitor(): Promise<VisitorRes> {
  const body = {
    cellphone: '+' + form.cellphone.replace(/[^0-9]+/g, ''),
    type: selectRole.value,
  };

  const data = await $fetch<VisitorRes>('b2v/visitors', {
    method: 'post',
    body,
    baseURL: config.public.rootApi
  });

  authStore.setVisitorId(data.data.id);

  return data;
}

const signIn = async (value: { phone: string }, { resetForm }: any) => {
  await createVisitor();
  authStore.setCurrentPhone(form.cellphone);
  emits('next')
}
</script>
<style lang="scss" scoped></style>
