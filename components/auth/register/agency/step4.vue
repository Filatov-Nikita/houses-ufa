<template>
  <Form @submit="register" v-slot="{ isSubmitting }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5">
      <BaseInput
        rules="required"
        name="fio"
        label="ФИО"
        placeholder="Иванов Иван Иванович"
        v-model="form.applicant_full_name"
      />
      <BaseInput rules="required|email" name="email" label="E-mail" placeholder="mail@mail.com" v-model="form.applicant_email" />
      <BaseInput
        disabled
        name="phone"
        label="Телефон"
        placeholder="+7 (999) 999 99-99"
        v-model="authStore.currentPhone"
      />
      <div>
        <label class="tw-text-text02 tw-text-sm tw-font-normal tw-block tw-mb-2" for="partFile">Карта партнера*</label>
        <input id="partFile" type="file" @change="uploadFile">
      </div>
    </div>
    <div class="tw-flex tw-gap-5">
      <BaseButton
        theme="gray"
        paddingClasses="tw-px-4"
        @click="() => $emit('prev')"
      >
        Назад
      </BaseButton>
      <BaseButton
        :disabled="isSubmitting"
        class="tw-grow"
        :theme="'green'"
        type="submit"
        >Зарегистрироваться</BaseButton
      >
    </div>
  </Form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { Form } from 'vee-validate'
import { useNotifyStore } from '@/stores/notify';
import { FetchError } from 'ofetch';

const authStore = useAuthStore()
const { selectRole } = storeToRefs(authStore)
const emits = defineEmits<{
  (event: 'prev'): void,
  (event: 'next'): void,
}>();

const form = authStore.agencyStore.form;

const register = async () => {
  await createUser();
  emits('next')
}

const config = useRuntimeConfig();

type ServerError = {
  errors: Record<string, string[]>,
  message: string,
}

async function createUser() {
  if(!form.partner_card_file_id) {
    notify.create({ type: 'error', message: 'Загрузите карту партнера, чтобы продолжить' });
    throw new Error();
  }

  try {
    await $fetch<Response>('b2v/b2y/registration-forms', {
      method: 'post',
      body: form,
      baseURL: config.public.rootApi,
      headers: {
        Authorization: 'Bearer ' + authStore.tempToken,
      }
    });
  } catch(e) {
    if(e instanceof FetchError) {
      if(e.status === 422) {
        const data = e.data as ServerError;
        Object.values(data.errors).map(e => {
          notify.create({ type: 'error', message: e.join(', ') });
        });
      } else {
        notify.create({ type: 'error', message: 'Не удалось создать заявку' });
      }
    }
    throw e;
  }
}

interface FileRes {
  data: {
    id: number,
    name: string,
    size_in_bytes: number
  }
};

const notify = useNotifyStore();

async function uploadFile(e: Event) {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];
  if(!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await $fetch<FileRes>('b2v/b2y/partner-cards', {
      method: 'post',
      body: formData,
      baseURL: config.public.rootApi,
      headers: {
        Authorization: 'Bearer ' + authStore.tempToken,
      }
    });

    form.partner_card_file_id = res.data.id;

    notify.create({ type: 'success', message: 'Файл успешно загружен' });
  } catch(e) {
    notify.create({ type: 'error', message: 'Не удалось загрузить файл' });
  }
}
</script>
<style lang="scss" scoped></style>
