<template>
  <div class="subscribe-form">
    <div class="subscribe-form__grid">
      <div class="subscribe-form__header">
        <p class="subscribe-form__title">
          Подпишитесь на рассылку
        </p>
      </div>
      <div class="subscribe-form__body">
        <Form class="subscribe-form__form" @submit="onSubmit">
          <BaseInput
            class="subscribe-form__input"
            theme="white"
            placeholder="mail@mail.com"
            name="email"
            rules="required|email"
            label=""
          />
          <div class="subscribe-form__btn">
            <BaseButton
              type="submit"
              class="subscribe-form__submit"
              :disabled="loaders.contains(loaderKey)"
            >
              Подписаться
            </BaseButton>
          </div>
        </Form>
      </div>
    </div>
    <ModalSuccess v-model="successShowed" />
    <ModalUniqueFailed v-model="failedShowed" />
  </div>
</template>

<script setup lang="ts">
  import { Form } from 'vee-validate';
  import ModalSuccess from './ModalSuccess.vue';
  import ModalUniqueFailed from './ModalUniqueFailed.vue';
  import { ref } from 'vue';
  import { useEmailSubscribe } from '../store';
  import { useLoadersStore } from '@/stores/loaders';

  const loaders = useLoadersStore();
  const { subcribe } = useEmailSubscribe();
  const successShowed = ref(false);
  const failedShowed = ref(false);
  const loaderKey = 'subcribing';

  async function onSubmit(values: any, { resetForm }: any) {
    try {
      loaders.append(loaderKey);
      await subcribe(values);
      successShowed.value = true;
    } catch(e: any) {
      if(e.status === 422) {
        failedShowed.value = true;
      } else {
        throw e;
      }
    } finally {
      resetForm();
      loaders.remove(loaderKey);
    }
  }
</script>

<style scoped lang="scss">
  .subscribe-form {
    padding: 24px 40px;
    border-radius: 16px;
    @apply tw-bg-base00;

    @include md {
      padding: 24px 16px;
    }

    &__title {
      @apply tw-text-text02 tw-text-2xl;

      @include md {
        @apply tw-text-xl;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: -10px;

      @include md {
        margin: -12px;
        align-items: flex-start;
      }
    }

    &__header {
      width: calc(50% - 20px);
      margin: 10px;

      @include md {
        width: calc(100% - 24px);
        margin: 12px;
      }
    }

    &__body {
      width: calc(50% - 20px);
      margin: 10px;
      padding-left: 10px;

      @include md {
        width: calc(100% - 24px);
        margin: 12px;
        padding-left: 0px;
      }
    }

    &__form {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }

    &__input {
      flex-grow: 1;

      @include md {
        width: 100%;
      }
    }

    &__btn {
      padding-top: 8px;
      @include md {
        padding-top: 0px;
        width: 100%;
      }
    }

    &__submit {
      @include md {
        width: 100%;
      }
    }
  }
</style>
