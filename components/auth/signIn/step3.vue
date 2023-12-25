<template>
  <div class="tw-flex tw-justify-between tw-items-start tw-mb-8">
    <div>
      <h2 class="tw-text-h4 tw-mb-2">Личный кабинет</h2>
      <p class="tw-text-text02 tw-text-body_s2 -tw-tracking-875">
        Мы отправили сообщение на номер
        <br />
        <span class="tw-text-text00"> {{ authStore.currentPhone }} </span>
      </p>
    </div>
    <button
      class="tw-rounded-lg tw-p-3 tw-bg-base00 tw-w-fitt"
      @click="openPopup = false"
    >
      <BaseIcon name="close" class="tw-w-6 tw-h-6" />
    </button>
  </div>
  <Form class="tw-grid tw-gap-8" @submit="verifiedPhone" v-slot="{ meta }">
    <BaseInputCode name="kod" class="tw-justify-center" @filled="filled" />
    <div class="tw-flex tw-gap-5">
      <BaseButton
        theme="gray"
        paddingClasses="tw-px-4"
        @click="() => $emit('prev')"
      >
        Назад
      </BaseButton>
      <BaseButton
        class="tw-w-full"
        :disabled="seconds > 0"
        @click="requestCode"
      >
        {{
          seconds > 0 ?
          `Запросить код через 00:${seconds < 10 ? '0' + seconds : seconds}` :
          'Запросить код'
        }}
      </BaseButton>
    </div>
  </Form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { Form } from 'vee-validate'
import { useNotifyStore } from '@/stores/notify'

const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()
const authStore = useAuthStore()
const notify = useNotifyStore();
const { openPopup } = storeToRefs(authStore)
const verifiedPhone = () => {}
const seconds = ref(59)
let ticker: any;
const tick = () => {
  seconds.value--
}
const start = () => {
  ticker = setInterval(() => {
    tick()
  }, 1000)
}

const stop = () => {
  clearInterval(ticker)
}

const requestCode = async () => {
  seconds.value = 59
  start()
  await repeatCode();
}

const filled = async (code: string) => {
  const data = await login(code);
  if(data.data.domain === 'b2v') {
    authStore.toRegister()
  } else if(data.data.domain) {
    authStore.userType = data.data.domain;
    authStore.showLK();
  }
}
onMounted(() => start())

watch(seconds, (newVal) => {
  if (newVal < 1) {
    stop()
  }
})

const config = useRuntimeConfig();

interface LoginRes {
  data: {
    domain: 'b2v' | 'b2c' | 'b2y' | 'b2t' | null,
    token: string,
    'b2v-register-powers': {
      b2c: boolean,
      b2t: boolean,
      b2y: boolean
    } | null,
  }
}

async function repeatCode() {
  const body = {
    cellphone: authStore.cellphoneRaw,
    visitor_id: authStore.visitorId,
  };

  await $fetch('b2v/resend-verification-code', {
    method: 'post',
    body,
    baseURL: config.public.rootApi,
  });

  return true;
}

async function login(code: string) {
  const body = {
    code,
    visitor_id: authStore.visitorId,
  };

  try {
    const data = await $fetch<LoginRes>('b2v/login', {
      method: 'post',
      body,
      baseURL: config.public.rootApi,
    });

    if(data.data.domain === 'b2v') {
      authStore.setTempToken(data.data.token);
    } else {
      authStore.setToken(
        data.data.token,
        data.data.domain ?? authStore.selectRole
      );
    }

    return data;
  } catch(e: any) {
    if(e.statusCode === 409) {
      notify.create({ type: 'error', message: 'Неправильный код' });
    }

    throw e;
  }
};
</script>
<style lang="scss" scoped></style>
