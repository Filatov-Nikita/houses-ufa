<template>
  <BaseModal v-model="openPopup">
    <div class="tw-w-[507px]">
      <div class="tw-p-12 tw-bg-white tw-rounded-2xl">
        <!-- <SignInStep1 v-if="currentStep === 'signInStep1'" @next="next" />
        <SignInStep1 v-if="currentStep === 'signInStep1'" @next="next" /> -->
        <AuthSignIn v-if="type === 'signIn'" />
        <template v-if="type === 'register'">
          <RegisterStep1 v-if="selectRole === null" />
          <AuthRegisterBuyer v-if="selectRole === 'buyer'" />
          <AuthRegisterOwner v-if="selectRole === 'owner'" />

          <AuthRegisterAgent v-if="selectRole === 'agent'" />
          <AuthRegisterAgency v-if="selectRole === 'agency'" />
        </template>
      </div>
    </div>
  </BaseModal>
</template>
<script setup lang="ts">
import SignInStep1 from './signIn/step1.vue'
import RegisterStep1 from './register/step1.vue'
import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { openPopup, selectRole, type } = storeToRefs(authStore)
const currentStep = ref('signInStep1')
const next = () => {}
console.log(openPopup.value)
</script>
<style lang="scss" scoped></style>
