<template>
  <Form ref="formRef" class="promo-form" v-slot="{ isSubmitting }" @submit="onSubmit">
    <div class="promo-form__inputs">
      <BaseInput
        class="promo-form__input"
        rules="required"
        label="Имя"
        name="name"
        placeholder="Иван"
        v-model="form.first_name"
      />
      <BaseInput
        class="promo-form__input"
        rules="required"
        label="Телефон"
        name="phone"
        placeholder="+7 (XXX) XXX XX XX"
        maska="+7 (###) ### ## ##"
        v-model="form.phone"
      />
      <BaseInput
        class="promo-form__input"
        label="Сообщение"
        name="text"
        placeholder="У меня есть вопрос..."
        v-model="form.message"
      />
    </div>
    <div class="promo-form__actions">
      <div class="promo-form__section">
        <p class="promo-form__column promo-form__perc">
          Нажимая кнопку, вы соглашаетесь с&nbsp;<a href="/docs/sogl.pdf" target="_blank">условиями обработки персональных данных</a>
        </p>

        <BaseButton class="promo-form__column" type="submit" :disabled="isSubmitting">
          Отправить
        </BaseButton>
      </div>
    </div>
  </Form>
</template>

<script setup lang="ts">
  import { useNotifyStore } from '@/stores/notify';
  import { Form } from 'vee-validate';
  import { cleanPhone } from '@/helpers/index';
  import type { PromotionDetailed } from '@/types/promotions';
  import { useGoal } from '@/composables/useGoal';

  const props = defineProps<{
    item: PromotionDetailed,
  }>();

  const emit = defineEmits<{
    (event: 'success'): void,
  }>();

  const notify = useNotifyStore();
  const formRef = ref<any>(null);

  const form = reactive({
    first_name: '',
    phone: '',
    message: '',
  });

  async function onSubmit() {
    const { error } = await useDataFetch('/lead/recall', {
      method: 'POST',
      body: {
        ...form,
        phone: cleanPhone(form.phone),
        theme: `Заявка на недвижимость по акции "${props.item.title}"`,
      },
    });

    if(error.value) {
      notify.create({ type: 'error', message: 'Не удалось создать заявку' });
    } else {
      emit('success');
      formRef.value.resetForm();
      notify.create({ type: 'success', message: 'Заявка успешно отправлена' });
      useGoal('aksiya_burger').execute();
    }
  }
</script>

<style scoped lang="scss">
  .promo-form {
    &__inputs {
      width: 100%;
    }

    &__input {
      & + & {
        margin-top: 20px;
      }
    }

    &__column {
      margin: 10px;
      width: calc(50% - 20px);

      @include sm {
        width: calc(100% - 20px);
      }

      & + & {
        @include sm {
          margin-top: 16px;
        }
      }
    }

    &__section {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__actions {
      margin-top: 32px;
    }

    &__perc {
      @apply tw-text-sm tw-text-text02;

      a {
        @apply tw-text-primary;
      }
    }
  }
</style>
