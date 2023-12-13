<template>
  <Form @submit="register" v-slot="{ meta }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5">
      <BaseInput
        rules="required"
        name="bank_name"
        label="Наименование банка"
        placeholder="Начните вводить ..."
        v-model="form.bank_name"
      />
      <BaseInput rules="required" name="bik" label="БИК банка" placeholder="000000000" v-model="form.bank_bik" />
      <BaseInput
        rules="required"
        name="raschet"
        label="Расчетный счет"
        placeholder="00000000000000000000"
        v-model="form.account_checking"
      />
      <BaseInput
        rules="required"
        name="korr"
        label="Корр. счет"
        placeholder="00000000000000000000"
        v-model="form.account_corresponding"
      />
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
        :theme="'green'"
        type="submit"
        >Далее</BaseButton
      >
    </div>
  </Form>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores/auth'
import { Form } from 'vee-validate'

const authStore = useAuthStore()
const { selectRole } = storeToRefs(authStore)
const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()

const form = authStore.agencyStore.form;

const register = () => {
  emits('next')
}
</script>
<style lang="scss" scoped></style>
