<template>
  <div class="section">
    <div class="wrapper">
      <PageInfo
        class="purchase-info"
        title="Ипотека"
        text="Настройте ипотеку сами. Выберите свой льготный период с&nbsp;пониженной ставкой. Чем меньше срок — тем ниже процент"
      >
        <template #icon="attrs">
          <svg v-bind="attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 233">
            <path d="M193.5 188.125C193.5 191.314 192.554 194.432 190.782 197.084C189.011 199.735 186.492 201.802 183.546 203.023C180.599 204.243 177.357 204.562 174.229 203.94C171.101 203.318 168.228 201.782 165.973 199.527C163.718 197.272 162.182 194.399 161.56 191.271C160.938 188.143 161.257 184.901 162.477 181.954C163.698 179.008 165.765 176.489 168.416 174.718C171.068 172.946 174.186 172 177.375 172C181.652 172 185.753 173.699 188.777 176.723C191.801 179.747 193.5 183.848 193.5 188.125ZM80.625 86C83.8142 86 86.9318 85.0543 89.5836 83.2824C92.2353 81.5106 94.3021 78.9922 95.5226 76.0458C96.743 73.0993 97.0623 69.8571 96.4402 66.7292C95.818 63.6012 94.2822 60.728 92.0271 58.4729C89.772 56.2178 86.8988 54.682 83.7708 54.0598C80.6429 53.4376 77.4007 53.757 74.4542 54.9774C71.5078 56.1979 68.9894 58.2647 67.2176 60.9164C65.4457 63.5682 64.5 66.6858 64.5 69.875C64.5 74.1516 66.1989 78.2531 69.2229 81.2771C72.2469 84.3011 76.3484 86 80.625 86ZM258 21.5V236.5C258 242.202 255.735 247.671 251.703 251.703C247.671 255.735 242.202 258 236.5 258H21.5C15.7978 258 10.3292 255.735 6.2972 251.703C2.26517 247.671 0 242.202 0 236.5V21.5C0 15.7978 2.26517 10.3292 6.2972 6.2972C10.3292 2.26517 15.7978 0 21.5 0H236.5C242.202 0 247.671 2.26517 251.703 6.2972C255.735 10.3292 258 15.7978 258 21.5ZM43 69.875C43 77.3165 45.2067 84.5909 49.341 90.7783C53.4752 96.9657 59.3515 101.788 66.2265 104.636C73.1016 107.484 80.6667 108.229 87.9653 106.777C95.2638 105.325 101.968 101.742 107.23 96.4799C112.492 91.2179 116.075 84.5138 117.527 77.2153C118.979 69.9167 118.234 62.3516 115.386 55.4765C112.538 48.6015 107.716 42.7252 101.528 38.591C95.3409 34.4567 88.0665 32.25 80.625 32.25C70.6462 32.25 61.0762 36.2141 54.0201 43.2701C46.9641 50.3262 43 59.8962 43 69.875ZM215 188.125C215 180.683 212.793 173.409 208.659 167.222C204.525 161.034 198.649 156.212 191.773 153.364C184.898 150.516 177.333 149.771 170.035 151.223C162.736 152.675 156.032 156.258 150.77 161.52C145.508 166.782 141.925 173.486 140.473 180.785C139.021 188.083 139.766 195.648 142.614 202.523C145.462 209.399 150.284 215.275 156.472 219.409C162.659 223.543 169.933 225.75 177.375 225.75C187.354 225.75 196.924 221.786 203.98 214.73C211.036 207.674 215 198.104 215 188.125ZM211.856 46.1444C210.857 45.1449 209.672 44.352 208.367 43.811C207.062 43.27 205.663 42.9915 204.25 42.9915C202.837 42.9915 201.438 43.27 200.133 43.811C198.828 44.352 197.643 45.1449 196.644 46.1444L46.1444 196.644C44.1272 198.662 42.994 201.397 42.994 204.25C42.994 207.103 44.1272 209.838 46.1444 211.856C48.1615 213.873 50.8973 215.006 53.75 215.006C56.6027 215.006 59.3385 213.873 61.3556 211.856L211.856 61.3556C212.855 60.3572 213.648 59.1716 214.189 57.8666C214.73 56.5616 215.008 55.1627 215.008 53.75C215.008 52.3373 214.73 50.9384 214.189 49.6334C213.648 48.3284 212.855 47.1428 211.856 46.1444Z" />
          </svg>
        </template>
      </PageInfo>
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <h2 class="section__title section__top">
        Условия для оформления ипотеки:
      </h2>
      <StepItems />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <div class="section__top">
        <h1 class="section__title">Ипотека Жилой квартал</h1>
      </div>
      <CreditList />
    </div>
  </section>
  <section class="section" id="credit-calc">
    <div class="wrapper">
      <CreditCalc />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>

<script setup lang="ts">
  import CreditCalc from '@/other-modules/credit-program-calc/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import CreditList from '@/other-modules/credit-list/index.vue';
  import StepItems from '@/other-modules/purchase/components/ipoteka/StepItems.vue';
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';
  import { data } from '@/seo/pages/ipoteka';

  const bread = useBreadcrumbsStore();

  bread.set([
    { label: 'Главная', to: '/' }, { label: 'Ипотека', to: '/ipoteka' },
  ]);

  useHead({
  title: data.title,
  meta: [
    { name: 'description', content: data.description },
  ],
});
</script>

<style lang="scss" src="@/other-modules/purchase/styles/style.scss"></style>
