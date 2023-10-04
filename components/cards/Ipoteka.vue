<template>
  <!-- карточка ипотеки -->
  <div class="card">
    <slot/>
    <!-- <img :src="icons[0]" alt="" class="card-icon1" >
    <img :src="icons[1]" alt="" class="card-icon2" >
    <img :src="icons[2]" alt="" class="card-icon3" > -->
    <div class=" tw-relative"> 
      <h4 class="title">{{ title }}</h4>
    </div>
    <div class="procent tw-relative">{{ procent }}</div>
    
    
  </div>
</template>
<script setup lang="ts">
const propsIpoteka = defineProps<{
  title: string
  text?: string
  procent: string,
  icons: string[]
}>()
</script>
<style lang="scss" scoped>
.card {
  @apply tw-h-[380px] lg:tw-h-[425px] xl:tw-h-[440px] tw-rounded-2xl tw-overflow-hidden tw-relative;
  @apply tw-p-6 tw-grid tw-content-between;
  @apply tw-bg-base01;
  &::before {
    content: "";
    background: url(/images/icons/ipoteka-bg.svg) center no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 763px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  &-icon1,
  &-icon2,
  &-icon3 {
    @apply tw-absolute;
  }
  &-icon1 {
    @apply tw-top-[40px] tw-right-[35px];
  }
  &-icon2 {
    @apply tw-top-[120px] tw-right-[180px];
  }
  &-icon3 {
    @apply tw-bottom-[40px] tw-right-[65px];
  }
  

  .title {
    @apply tw-text-h5 xl:tw-text-h4;
  }
  .text {
    @apply tw-hidden lg:tw-block;
  }
  .procent {
    @apply tw-rounded-lg tw-grid tw-place-content-center tw-p-2 lg:tw-p-4 tw-bg-base02 tw-w-fit;
    @apply tw-text-body_l lg:tw-text-h6 tw-text-white;
    transition: background-color 0.3s ease;
  }
  &:hover {
    &::before {
      transform: translateX(75%);
      @screen lg {

        transform: translateX(40%);
      }
    }
    

    .procent {
      @apply tw-bg-primary;
    }

  }
  
}
</style>
