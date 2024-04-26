<template>
  <div class="edit-profile">
    <VForm class="edit-profile__form" @submit="submit">
      <BaseInput class="edit-profile__input" label="Название" name="legal_name" rules="required" v-model="form.legal_name" />
      <BaseInput class="edit-profile__input" label="E-mail" name="email" rules="required|email" v-model="form.email" />
      <div class="edit-profile__actions">
        <BaseButton theme="green" type="submit" :disabled="loading">Сохранить</BaseButton>
        <BaseButton theme="gray" @click="cancel">Отмена</BaseButton>
      </div>
    </VForm>
  </div>
</template>

<script setup lang="ts">
  import { Form as VForm } from 'vee-validate';

  interface Form {
    email: string,
    legal_name: string,
  }

  const props = defineProps<{
    loading?: boolean,
    initalForm: Form,
  }>();

  const emit = defineEmits<{
    (event: 'cancel'): void,
    (event: 'submit', form: Form): void,
  }>();

  const form: Form = reactive({
    legal_name: props.initalForm.legal_name,
    email: props.initalForm.email,
  });

  function submit() {
    emit('submit', { ...form });
  }

  function cancel() {
    emit('cancel');
  }
</script>

<style scoped lang="scss">
  .edit-profile {
    &__input {
      width: 100%;

      & + & {
        margin-top: 20px;
      }
    }

    &__actions {
      margin-top: 32px;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
</style>
