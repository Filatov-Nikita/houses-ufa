<template>
  <div class="card-bank">
    <div class="tw-flex tw-items-center tw-gap-4">
      <div
        class="tw-rounded-lg tw-p-3 tw-grid tw-place-content-center tw-bg-secondary tw-w-12 tw-h-12"
      >
        <img v-if="logo" :src="logo" alt="" />
      </div>
      <span> {{ name }} </span>
    </div>
    <div>
      <p class="tw-text-text02 tw-text-body_s tw-mb-2">Ставка</p>
      <div class="tw-flex tw-justify-between lg:tw-flex-col lg:tw-gap-2">
        <h4 class="tw-text-h4">{{ perсent }}%</h4>
        <p>
          <span class="tw-text-text02"> от </span>
          {{ monthlyPayment }} ₽/мес
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const bankProps = defineProps<{
  logo: string
  name: string
  perсent: string
  monthlyPayment: string
}>()
</script>

<style scoped>
.card-bank {
  @apply tw-rounded-2xl tw-p-6 tw-grid tw-gap-8 tw-bg-white tw-border tw-border-border00;
}
@media (hover: hover) {
  .card-bank {
    @apply hover:tw-bg-secondary;
  }
}
@media (hover: none) {
  .card-bank {
    @apply active:tw-bg-secondary;
  }
}
</style>
