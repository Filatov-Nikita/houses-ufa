<template>
  <!-- Карточка бестселлеры -->
  <div class="card">
    <div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
      <div class="">
        <div class="tw-mb-1">1-комнатная, 36 м²</div>
        <div
          class="tw-flex tw-gap-2 tw-text-text02 tw-text-body_s2 -tw-tracking-875"
        >
          <div>Этаж 2</div>
          <div>·</div>
          <div>Литер 8</div>
        </div>
      </div>
      <div>
        <button class="btn">
          <img
            src="/assets/images/icons/dots_three_vertical.svg"
            width="24"
            height="24"
          />
        </button>
      </div>
    </div>
    <div
      class="tw-relative tw-bg-white tw-rounded-2xl tw-overflow-hidden tw-h-[257px] tw-w-full tw-mb-6"
    >
      <img
        src="/assets/images/img/test.png"
        alt=""
        class="tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2 tw-h-full tw-object-cover"
      />
    </div>
    <div>
      <h3 class="tw-text-body_m tw-mb-4">
        ЖК «Михайловка Green Place», с. Михайловка
      </h3>
      <p class="tw-text-h5">20 256 296 ₽</p>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.card {
  @apply tw-bg-base00 tw-rounded-2xl tw-overflow-hidden tw-p-6;
  .btn {
    @apply tw-bg-white tw-grid tw-place-content-center tw-w-10 tw-h-10 tw-rounded-lg;
  }
}
</style>
