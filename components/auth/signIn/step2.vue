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

  <Form class="tw-grid tw-gap-8" @submit="signIn" v-slot="{ meta, isSubmitting }">
    <BaseInput
      rules="required"
      name="cellphone"
      label="Телефон"
      placeholder="+7 (999) 999 99-99"
      maska="+7 (###) ### ## ##"
      v-model="form.cellphone"
    />
    <div
      id="captcha-container"
      class="smart-captcha"
      style="height: 100px"
    >
      <input id="captcha-token" type="hidden" name="smart-token" value="">
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
        :disabled="!meta.valid || !captchaReady || isSubmitting"
        :theme="(!meta.valid || !captchaReady) ? 'gray' : 'green'"
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
import { FetchError } from 'ofetch';
import { useNotifyStore } from '@/stores/notify';

const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()

const config = useRuntimeConfig();
const notify = useNotifyStore();

const authStore = useAuthStore()
const { openPopup, selectRole } = storeToRefs(authStore)

const form = reactive({
  cellphone: '',
});

const captchaReady = ref(false);
const captchaToken = ref<string | null>(null);

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
    captcha: captchaToken.value,
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
  try {
    await createVisitor();
    authStore.setCurrentPhone(form.cellphone);
    emits('next')
  } catch(e) {
    if(e instanceof FetchError) {
      if(e.status === 422) {
        const data = e.data as any;
        notify.create({ type: 'error', message: data.message ?? 'Произошла ошибка!' });
      }
    }
    throw e;
  }
}

function resultCaptcha(token: string) {
  captchaReady.value = false;
  captchaToken.value = null;
  if(token) {
    captchaReady.value = true;
    captchaToken.value = token;
  }
}

function renderCaptcha() {
  if(window.smartCaptcha) {
    const cont = document.querySelector('#captcha-container');
    if(!cont) return;
    window.smartCaptcha.render(cont, {
      sitekey: config.public.captchaClientKey,
      hl: 'ru',
      callback: resultCaptcha,
    });
  }
}

onMounted(() => {
  renderCaptcha();
});
</script>
<style lang="scss" scoped></style>
