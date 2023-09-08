<template>
  <div class="card">
    <div
      class="tw-relative tw-rounded-2xl tw-overflow-hidden tw-mb-4 tw-bg-base01 tw-grid tw-place-content-center"
    >
      <img
        v-if="src"
        :src="src"
        :alt="alt"
        :width="width"
        :height="374"
        class="tw-absolute tw-w-full tw-h-full tw-object-cover"
      />
      <BaseIcon v-else name="home" class=" tw-w-16 tw-h-16"/>
      <div
        v-if="status"
        class="tw-absolute tw-right-4 tw-top-4 tw-backdrop-blur-sm tw-rounded-lg tw-py-[5px] tw-px-[11px] tw-text-white tw-text-body_s -tw-tracking-875"
        :class="[src ? 'tw-bg-white/40' : 'tw-bg-text01/40']"
      >
        {{ status }}
      </div>
    </div>
    <div class="">
      <div class="tw-flex tw-justify-between tw-gap-4 tw-mb-2">
        <h4 class="tw-text-h6 lg:tw-text-h5">{{ title }}</h4>
        <span class="lg:tw-hidden">
          <span v-if="price" class="tw-text-text00 tw-whitespace-nowrap">{{
            price
          }}</span>
        </span>
      </div>
      <p class="tw-text-text02">
        <span> {{ place }} </span>
        <span>
          <span> · </span>
          <span> {{ destance }} </span>
        </span>
        <span v-if="price" class="tw-hidden lg:tw-inline">
          <span> · </span>
          <span class="tw-text-text00">{{ price }}</span>
        </span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const countryProps = defineProps<{
  src?: string
  alt?: string
  width?: number
  height?: number
  status?: string
  title: string
  place: string
  destance: string
  price?: string
}>()
</script>
<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: 374px auto;
}
</style>
