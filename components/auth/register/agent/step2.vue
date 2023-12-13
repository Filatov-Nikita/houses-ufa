<template>
  <Form @submit="register" v-slot="{ isSubmitting }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5">
      <BaseInput
        rules="required"
        name="inn"
        label="ИНН"
        placeholder="000000000"
        v-model="form.inn"
      />
      <BaseSelect
        rules="required"
        label="Юр. название организации"
        name="Yr_name"
        v-bind="selectProps(agencies)"
        :modelValue="agency"
        @update:modelValue="updateAgency"
      />
      <BaseInput
        rules="required"
        name="region"
        label="Регион"
        placeholder="Начните вводить ..."
        v-model="form.region"
      />
      <BaseInput rules="required" name="city" label="Город" placeholder="Начните вводить ..."  v-model="form.city" />
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
        class="tw-grow"
        :disabled="isSubmitting"
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
const notify = useNotifyStore();
const { selectRole } = storeToRefs(authStore)
const form = authStore.agentStore.form;

const emits = defineEmits<{
  (event: 'prev'): void,
  (event: 'next'): void
}>()

const register = async () => {
  await createUser();
  emits('next')
}

interface OneAgency {
  id: number,
  legal_name: string,
}

interface AgencyRes {
  data: OneAgency[],
}

const config = useRuntimeConfig();

interface Response {
  data: { id: number },
}

type ServerError = {
  errors: Record<string, string[]>,
  message: string,
}

async function createUser() {
  try {
    await $fetch<Response>('b2v/b2t/registration-forms', {
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

const agencyData = await useFetch<AgencyRes>('b2v/b2t/agencies', {
  baseURL: config.public.rootApi,
  lazy: true,
  headers: {
    Authorization: 'Bearer ' + authStore.tempToken,
  }
});

const agencies = computed(() => agencyData.data.value?.data ?? []);

const agency = computed(() => {
  return agencies.value.find(a => a.id === form.agency_id) ?? null;
});

function updateAgency(val: OneAgency) {
  form.agency_id = val.id;
}

function selectProps<T extends { legal_name: string, id: number }>(options: T[]) {
  return {
    'drop-down-props': {
      getLabel: (opt: T) => opt.legal_name,
      isActive: (opt: T, v: T | null) => opt.id === v?.id,
      options,
    },
    'display-props': {
      getLabel: (v: T | null) => v?.legal_name || 'не выбрано',
    }
  };
}
</script>
<style lang="scss" scoped></style>
