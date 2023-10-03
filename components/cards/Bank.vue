<template>
  <div class="card-bank" :class="{ active }">
    <div class="tw-flex tw-items-center tw-gap-4">
      <div class="card-bank__logo">
        <img v-if="logo" :src="logo" alt="" />
      </div>
      <span> {{ name }} </span>
    </div>
    <div>
      <div class="tw-mb-4">
        <h4 class="tw-text-text02 tw-text-body_s tw-mb-2">Ставка</h4>
        <p class="tw-text-h4 tw-mb-2">{{ perсent }}%</p>
        <p>
          <span class="tw-text-text02"> от </span>
          <span v-pretty="monthlyPayment"> </span>
          ₽/мес
        </p>
      </div>
      <div>
        <h4 class="tw-text-text02 tw-text-body_s2 -tw-tracking-875 tw-mb-2">
          Программа
        </h4>
        <p class="tw-text-h6">
          {{ program }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const bankProps = defineProps<{
  active?: boolean
  logo: string
  name: string
  perсent: string
  monthlyPayment: string
  program: string
}>()
</script>

<style scoped>
.card-bank {
  @apply tw-rounded-2xl tw-p-6 tw-grid tw-gap-8 tw-bg-white tw-border tw-border-border00 tw-text-left;
}
.card-bank__logo {
  @apply tw-rounded-lg tw-p-3 tw-grid tw-place-content-center tw-bg-[#F5F5F5] tw-w-12 tw-h-12;
}
.card-bank.active {
  @apply tw-bg-primary01;
}
.card-bank.active .card-bank__logo {
  @apply tw-bg-white;
}
@media (hover: hover) {
  .card-bank {
    @apply hover:tw-bg-secondary;
  }
  .card-bank .card-bank__logo {
    @apply tw-bg-white;
  }
}
@media (hover: none) {
  .card-bank:active {
    @apply active:tw-bg-secondary;
  }
  .card-bank:active .card-bank__logo {
    @apply tw-bg-white;
  }
}
</style>
