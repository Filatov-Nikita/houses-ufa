<template>
  <BaseModal v-model="model" v-slot="{ hide }">
    <BaseModalCard>
      <div class="modal-header">
        <p class="modal-header__title">Заявка на получение ключей</p>
        <BtnsActionsBase class="modal-header__hide" icon="close" @click="hide" />
      </div>
      <Form class="keys-form" v-slot="{ isSubmitting }" @submit="onSubmit">
        <div class="keys-form__inputs">
          <BaseInput label="Имя" name="name" placeholder="Имя" rules="required" v-model="form.visitor_name" />
          <BaseInput label="Телефон" placeholder="Телефон" name="phone" maska="+7 (9##) ### ## ##" rules="required" v-model="form.visitor_phone" />
          <BaseInput
            class="book-passport-form-grid__item"
            name="visit_date"
            label="Дата приемки"
            v-model="form.visit_date"
            type="date"
            rules="required"
          />
          <BaseSelect label="Время" name="time" :drop-down-props="{ options: timeOpts }" rules="required" v-model="time" @update:modelValue="form.visit_time = $event?.value ?? ''" />
          <BaseInput class="keys-form__comment" label="Комментарий" name="comment" placeholder="Текст комментария"  v-model="form.comment" />
        </div>
        <BaseButton class="keys-form__btn" type="submit" :disabled="isSubmitting">
          Отправить
        </BaseButton>
      </Form>
    </BaseModalCard>
  </BaseModal>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import useOrder from './composables/useOrder';

  const props = defineProps<{
    flatId: number,
  }>();

  const emit = defineEmits<{
    (event: 'success'): void,
  }>();

  const model = defineModel<boolean>({ default: false });

  const { form, time, send } = useOrder();

  async function onSubmit() {
    await send(props.flatId, form, () => {
      emit('success');
    });
  }

  const timeOpts = [
    {
      label: '12:00 - 14:00',
      value: '12:00 - 14:00',
    },
    {
      label: '14:00 - 16:00',
      value: '14:00 - 16:00',
    },
    {
      label: '16:00 - 18:00',
      value: '16:00 - 18:00',
    },
  ];
</script>

<style scoped lang="scss">
  .modal-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 32px;

    @include sm {
      margin-bottom: 24px;
    }

    &__title {
      font-size: 32px;
      line-height: 1.25;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__hide {
      flex-shrink: 0;
    }
  }

  .keys-form {
    &__inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    &__comment {
      grid-column: 1 / 3;
    }

    &__btn {
      margin-top: 32px;
      width: 100%;
    }
  }
</style>
