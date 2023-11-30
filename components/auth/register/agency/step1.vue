<template>
  <Form @submit="register" v-slot="{ meta }" class="tw-grid tw-gap-8">
    <div class="tw-grid tw-gap-5 tw-grid-cols-2">
      <BaseSelect
        class="tw-col-span-2"
        label="Тип организации"
        name="typeOrg"
        v-bind="selectProps(typeOpts)"
        :model-value="currentType"
        @update:model-value="updateType"
      />
      <BaseInput
        name="ogrn"
        label="ОГРН / ОГРНИП"
        placeholder="000000000000 / 00000000000000"
        class="tw-col-span-2"
        v-model="form.ogrn_ogrnip"
      />
      <BaseInput name="inn" label="ИНН" placeholder="000000000" v-model="form.inn" />
      <BaseInput name="kpp" label="КПП" placeholder="000000000" v-model="form.kpp" />
    </div>
    <div class="tw-flex tw-gap-5">
      <BaseButton theme="gray" paddingClasses="tw-px-4" @click="() => $emit('prev')">
        Назад
      </BaseButton>
      <BaseButton
        class="tw-grow"
        :disabled="!meta.valid"
        :theme="!meta.valid ? 'gray' : 'green'"
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
const form = authStore.agencyStore.form;

const emits = defineEmits<{
  (event: 'next'): void
  (event: 'prev'): void
}>()

const register = () => {
  emits('next')
}

interface Type { label: string, value: string };

const typeOpts: Type[] = [
  { label: 'ИП', value: 'sp' },
  { label: 'ООО', value: 'llc' },
];

const currentType = computed(() => {
  return typeOpts.find(t => t.value === form.legal_entity_type) ?? null;
});

function updateType(val: Type) {
  form.legal_entity_type = val.value;
}

function selectProps<T extends { label: string, value: string }>(options: T[]) {
  return {
    'drop-down-props': {
      getLabel: (opt: T) => opt.label,
      isActive: (opt: T, v: T | null) => opt.value === v?.value,
      options,
    },
    'display-props': {
      getLabel: (v: T | null) => v?.label || 'не выбрано',
    }
  };
}
</script>
<style lang="scss" scoped></style>
