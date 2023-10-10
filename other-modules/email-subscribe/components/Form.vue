<template>
  <div class="subsForm">
    <p class="subsForm__text tw-pt-2">
      Подпишитесь на рассылку
    </p>
    <div class="subsForm__right">
      <Form @submit="onSubmit" class="subsForm__form">
        <BaseInput
          class="subsForm__input"
          theme="white"
          placeholder="mail@mail.com"
          name="email"
          rules="required|email"
          label=""
        />
        <div class="subsForm__btn">
          <BaseButton type="submit" class="tw-w-full" :disabled="loaders.contains(loaderKey)">
            Подписаться
          </BaseButton>
        </div>
      </Form>
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
  .subsForm {
    padding: 20px 16px;
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 16px;
    row-gap: 24px;
    @apply tw-bg-base00 lg:tw-grid lg:tw-grid-cols-2;

    &__text {
      font-size: 20px;
      @apply tw-text-text02;
    }

    &__right {
      flex-basis: 100%;
    }

    &__form {
      @apply tw-gap-4 tw-grid lg:tw-grid-cols-[421px_auto];
    }

    &__input {
      flex-grow: 1;
    }

    &__btn {
      // padding-top: 16px;
      flex-basis: 100%;
    }
  }

  @screen lg {
    .subsForm {
      padding: 20px 40px;

      &__text {
        @apply tw-text-2xl;
      }



      &__btn {
        padding-top: 8px;
        flex-basis: auto;
      }
    }
  }
</style>
