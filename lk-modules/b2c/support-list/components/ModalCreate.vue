<template>
  <BaseModal v-model="showed" v-slot="{ hide }">
    <BaseModalCard>
      <div class="modal-header tw-mb-4">
        <p class="modal-header__title">Создать обращение</p>
        <BtnsActionsBase class="modal-header__hide" icon="close" @click="hide" />
      </div>
      <Form class="modal-form" v-slot="{ isSubmitting }" @submit="submit">
        <BaseInput class="modal-form__input" label="Текст обращения" name="problem" rules="required" v-model="form.problem" />
        <BaseButton class="modal-form__btn" type="submit" :disabled="isSubmitting">
          Создать
        </BaseButton>
      </Form>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { useNotifyStore } from '@/stores/notify';
  import { Form } from 'vee-validate';

  const notify = useNotifyStore();

  const props = defineProps<{
    showed: boolean,
  }>();

  const form = reactive({
    problem: '',
  });

  const emit = defineEmits<{
    (event: 'update:showed', val: boolean): void,
    (event: 'success'): void,
  }>();

  const showed = useSyncProps(props, 'showed');

  async function submit() {
    const { error } = await useDataFetch('b2c/appeals', {
      key: 'createSupport',
      method: 'POST',
      baseURL: useRuntimeConfig().public.rootApi,
      body: form,
      watch: false,
    });

    if(error.value) {
      notify.create({ type: 'error', message: 'Не удалось создать обращение' });
    } else {
      form.problem = '';
      notify.create({ type: 'success', message: 'Обращение успешно отправлено!' });
      emit('success');
      showed.value = false;
    }
  }
</script>

<style scoped lang="scss">
  .modal-form {
    &__input {
      width: 100%;
    }

    &__btn {
      width: 100%;
      margin-top: 24px;
    }
  }
</style>
