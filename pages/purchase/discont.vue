<template>
  <div class="section">
    <div class="wrapper">
      <PageInfo
        class="purchase-info"
        title="Программа лояльности<br>от ГК «Жилой Квартал»"
        text=""
      >
        <template #icon="attrs">
          <svg v-bind="attrs" viewBox="0 0 280 244" xmlns="http://www.w3.org/2000/svg">
            <path d="M204.5 113.125C204.5 123.104 200.536 132.674 193.48 139.73C186.424 146.786 176.854 150.75 166.875 150.75H118.5V75.5H166.875C176.854 75.5 186.424 79.4641 193.48 86.5201C200.536 93.5762 204.5 103.146 204.5 113.125ZM279.75 140C279.75 167.64 271.554 194.659 256.198 217.641C240.842 240.623 219.016 258.535 193.48 269.112C167.944 279.69 139.845 282.457 112.736 277.065C85.6273 271.672 60.7263 258.363 41.1819 238.818C21.6375 219.274 8.32761 194.373 2.93532 167.264C-2.45696 140.155 0.310552 112.056 10.8879 86.52C21.4652 60.984 39.3774 39.158 62.3591 23.8021C85.3409 8.4462 112.36 0.25 140 0.25C177.052 0.289128 212.575 15.0253 238.775 41.225C264.975 67.4248 279.711 102.948 279.75 140ZM226 113.125C225.982 97.4495 219.747 82.4212 208.663 71.337C197.579 60.2527 182.551 54.0178 166.875 54H107.75C104.899 54 102.165 55.1326 100.149 57.1486C98.1326 59.1646 97.0001 61.8989 97.0001 64.75V150.75H75.5001C72.649 150.75 69.9147 151.883 67.8987 153.899C65.8826 155.915 64.7501 158.649 64.7501 161.5C64.7501 164.351 65.8826 167.085 67.8987 169.101C69.9147 171.117 72.649 172.25 75.5001 172.25H97.0001V193.75H75.5001C72.649 193.75 69.9147 194.883 67.8987 196.899C65.8826 198.915 64.7501 201.649 64.7501 204.5C64.7501 207.351 65.8826 210.085 67.8987 212.101C69.9147 214.117 72.649 215.25 75.5001 215.25H97.0001V236.75C97.0001 239.601 98.1326 242.335 100.149 244.351C102.165 246.367 104.899 247.5 107.75 247.5C110.601 247.5 113.335 246.367 115.351 244.351C117.367 242.335 118.5 239.601 118.5 236.75V215.25H172.25C175.101 215.25 177.835 214.117 179.851 212.101C181.867 210.085 183 207.351 183 204.5C183 201.649 181.867 198.915 179.851 196.899C177.835 194.883 175.101 193.75 172.25 193.75H118.5V172.25H166.875C182.551 172.232 197.579 165.997 208.663 154.913C219.747 143.829 225.982 128.8 226 113.125Z" fill="#6AD091"/>
          </svg>
        </template>
      </PageInfo>
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <PromoCard />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <h2 class="section__title section__top">
        Хотите получить подарок быстрее?
      </h2>
      <StepItems />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBreadcrumbsStore } from '@/stores/breadcrumbs';
import StepItems from '@/other-modules/purchase/components/discont/StepItems.vue';
import PromoCard from '@/other-modules/purchase/components/discont/PromoCard.vue';
import QuestionForm from '@/other-modules/question-form/index.vue';

useCanonical();

useSeoMeta({
  title: 'Программа лояльности от ГК «Жилой Квартал»',
});

const bread = useBreadcrumbsStore();

bread.set([
  { label: 'Главная', to: '/' },
  { label: 'Как купить', to: '/purchase' },
  { label: 'Программа лояльности', to: '/purchase/discont' },
]);
</script>

<style lang="scss" src="@/other-modules/purchase/styles/style.scss"></style>
