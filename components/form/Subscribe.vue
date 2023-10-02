<template>
  <div class="subsForm">
    <p class="subsForm__text tw-pt-2">Подпишитесь на рассылку</p>
    <div class="subsForm__right">
      <form @submit="onSubmit"   class="subsForm__form">
        <BaseInput class="subsForm__input" theme="white" placeholder="mail@mail.com" name="email" rules="email" label="" />
        <div class="subsForm__btn">
          <BaseButton type="submit" class="tw-w-full">Подписаться</BaseButton>
        </div>
      </form>
    </div>
    <BaseModal v-model="open" v-slot="{ hide }" >
      <div class=" tw-rounded-2xl tw-p-10 tw-bg-white tw-max-w-[507px]">
        

        <div v-if="signed" class=" tw-grid tw-justify-items-center tw-text-center tw-mb-6 ">
          <div class=" tw-bg-base00 tw-rounded-lg tw-p-3 tw-w-fit tw-mb-6">
            <BaseIcon name="info" class=" tw-w-8 tw-h-8 tw-text-warning"/>
          </div>
          <div class=" tw-text-h5 tw-mb-4">
            Вы уже подписаны на рассылку
          </div>
          <div class=" tw-text-text02">
            Письма все также приходят :)
          </div>
        </div>

        <div v-else  class=" tw-grid tw-justify-items-center tw-text-center tw-mb-6 ">
          <div class=" tw-bg-base00 tw-rounded-lg tw-p-3 tw-w-fit tw-mb-6">
            <BaseIcon name="check" class=" tw-w-8 tw-h-8 tw-text-primary"/>
          </div>
          <div class=" tw-text-h5 tw-mb-4">
            Спасибо, что подписались на рассылку
          </div>
          <div class=" tw-text-text02">
            Все обновления и письма будут приходить на почту
          </div>
        </div>
        <BaseButton theme="gray" class="tw-w-full" @click="open = false">Хорошо</BaseButton>
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
  
import {  useForm } from 'vee-validate';
  const {handleSubmit } = useForm()
  const config = useRuntimeConfig()
  const open = ref(false)
  const signed = ref(false)
  const onSubmit = handleSubmit(async(val, { resetForm }) => {
  
    try {
      const { error } = await useDataFetch('newsletter/subscribers', {
        method: 'POST',
        baseURL: config.public.baseURL,
        body: val
      })
      open.value = true
      resetForm();
      if(error.value == null){  
        signed.value = false
    
      }else {
    
        if(error.value?.statusCode === 422) signed.value = true
      }
      
      
    
    }
    catch (e){
      console.log(e)
      // throw e
    }
  
});
  
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
    @apply tw-bg-base00;

    &__text {
      font-size: 20px;
      @apply tw-text-text02;
    }

    &__right {
      flex-basis: 100%;
    }

    &__form {
      display: flex;
      // flex-wrap: wrap;
      column-gap: 16px;
    }

    &__input {
      flex-grow: 1;
    }

    &__btn {
      padding-top: 16px;
      flex-basis: 100%;
    }
  }

  @screen lg {
    .subsForm {
      padding: 20px 40px;

      &__text {
        @apply tw-text-2xl;
      }

      &__right {
        flex-basis: 500px;
      }

      &__btn {
        padding-top: 8px;
        flex-basis: auto;
      }
    }
  }
</style>
