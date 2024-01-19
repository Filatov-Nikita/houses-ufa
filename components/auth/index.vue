<template>
  <BaseModal v-model="openPopup">
    <div class="lg:tw-w-[507px]">
      <div class="tw-p-12 tw-bg-white tw-rounded-2xl">
        <!-- <SignInStep1 v-if="currentStep === 'signInStep1'" @next="next" />
        <SignInStep1 v-if="currentStep === 'signInStep1'" @next="next" /> -->
        <AuthSignIn v-if="type === 'signIn'" />
        <template v-if="type === 'register'">
          <AuthRegisterBuyer v-if="selectRole === 'b2c'" />
          <AuthRegisterAgent v-if="selectRole === 'b2t'" />
          <AuthRegisterAgency v-if="selectRole === 'b2y'" />
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
</script>
<style lang="scss" scoped></style>
