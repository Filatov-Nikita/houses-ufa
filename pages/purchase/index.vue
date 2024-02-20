<template>
  <div class="section">
    <div class="wrapper">
      <PageInfo
        title="Как купить"
        text=""
      >
        <template #icon="attrs">
          <svg v-bind="attrs" viewBox="0 0 344 276" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M322.5 279.5H301V155.27C301 152.295 300.383 149.351 299.187 146.627C297.992 143.902 296.243 141.455 294.053 139.441L186.553 38.0147C186.5 37.9688 186.451 37.9194 186.405 37.8668C182.447 34.2674 177.289 32.2728 171.94 32.2728C166.59 32.2728 161.432 34.2674 157.474 37.8668L157.326 38.0147L49.9472 139.441C47.7568 141.455 46.0084 143.902 44.8126 146.627C43.6168 149.351 42.9995 152.295 43 155.27V279.5H21.5C18.6489 279.5 15.9146 280.633 13.8986 282.649C11.8826 284.665 10.75 287.399 10.75 290.25C10.75 293.101 11.8826 295.835 13.8986 297.851C15.9146 299.867 18.6489 301 21.5 301H322.5C325.351 301 328.085 299.867 330.101 297.851C332.117 295.835 333.25 293.101 333.25 290.25C333.25 287.399 332.117 284.665 330.101 282.649C328.085 280.633 325.351 279.5 322.5 279.5ZM204.25 279.5H139.75V215C139.75 212.149 140.883 209.415 142.899 207.399C144.915 205.383 147.649 204.25 150.5 204.25H193.5C196.351 204.25 199.085 205.383 201.101 207.399C203.117 209.415 204.25 212.149 204.25 215V279.5Z" fill="#8F8F8F" />
          </svg>
        </template>
        <template #text>
          <p class="tw-text-error tw-text-xl tw-max-w-[585px]">
            *Мы предлагаем вам широкий выбор >14 жилых комплексов
          </p>
        </template>
      </PageInfo>
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <NavItems />
    </div>
  </section>
</template>

<script setup lang="ts">
import NavItems from '@/other-modules/purchase/components/NavItems.vue';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs'

const bread = useBreadcrumbsStore();

bread.set([
  { label: 'Главная', to: '/' },
  { label: 'Как купить', to: '/purchase' },
]);
</script>
