<template>
  <SectionFirst
    :history-list="[{ name: 'Главная', to: '/' }, { name: 'Ипотека' }]"
  >
    <template #title> Ипотека </template>
    <template #text>
      Настройте ипотеку сами. Выберите свой льготный период
      <br class="tw-hidden xl:tw-block" />
      с пониженной <br class="tw-hidden lg:tw-block xl:tw-hidden" />
      ставкой. Чем меньше срок — тем ниже процент
    </template>
    <template #icon>
      <img
        src="/assets/images/icons/first-section/procent.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>
  <section>
    <div class="tw-container">
      <div class="tw-hidden lg:tw-grid tw-grid-cols-2 tw-gap-5">
        <CardsIpotekaItem
          v-for="(item, index) in ipotekaList"
          :title="item.title"
          :procent="item.procent"
          :img="item.img"
          :to="item.to"
          :is-images="index === 0 || (index + 3) % 3 === 0 ? true : false"
          :class="[
            index === 0 || (index + 3) % 3 === 0 ? 'tw-col-span-2' : '',
            index,
          ]"
        />
      </div>
      <div class="lg:tw-hidden">
        <Swiper
          :modules="[SwiperPagination, SwiperNavigation]"
          :slides-per-view="1"
          :pagination="{
            type: 'bullets',
            el: '.swiper-pagination',
            bulletActiveClass: 'dot-active',
            bulletClass: 'dot',
          }"
          :navigation="{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }"
        >
          <SwiperSlide v-for="(item, index) in ipotekaList" :key="index">
            <CardsIpotekaItem
              :title="item.title"
              :procent="item.procent"
              :img="item.img"
              :to="item.to"
              :class="[
                index === 0 || (index + 3) % 3 === 0 ? 'tw-col-span-2' : '',
                index,
              ]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const ipotekaList = [
  {
    title: 'Льготная',
    text: 'Ипотечная программа с господдержкой и специальные условия от банка МКБ. Просто заполните анкету и получите одобрение. Всего один шаг, и квартира — ваша. Субсидированная ставка действует первые два года, далее 8% или 7,7% при сумме кредита до 12 млн рублей и первом взносе от 15%. При сумме от 12 до 30 млн рублей ставка равна 6,5% годовых.',
    img: '/assets/images/img/ipoteka/family.png',
    procent: 'от 3%',
    to: 'ipoteka/1',
  },
  {
    title: 'Стандартная',
    text: 'Выгодная ипотечная программы и специальные условия. Просто заполните анкету и получите одобрение. Всего один шаг, и квартира — ваша. Ставка действует первые 5 лет, далее 11,3% при сумме кредита до 100 млн рублей и первом взносе от 15%.',
    img: '/assets/images/img/ipoteka/family.png',
    procent: '9%',
    to: 'ipoteka/1',
  },
  {
    title: 'IT-специалистам',
    text: 'Ставка на весь срок кредита от 3%, сумма до 18 млн. рублей. Первый взнос от 15%',
    img: '/assets/images/img/ipoteka/family.png',
    procent: '3.5%',
    to: 'ipoteka/1',
  },
  {
    title: 'Семейная',
    text: 'Программа с господдержкой для семей с детьми, где ребенок родился, начиная с 2018 года. Просто заполните анкету и получите одобрение. Всего один шаг, и квартира — ваша. Субсидированная ставка действует первые 3 года, далее 6% или 5,7% при сумме кредита до 12 млн рублей и первом взносе от 15%. При сумме от 12 до 30 млн рублей ставка равна 5,74% год.',
    img: '/assets/images/img/ipoteka/family.png',
    procent: '6%',
    to: 'ipoteka/1',
  },
  {
    title: 'Военная  ипотека',
    text: 'Выгодная ипотечная программы и специальные условия. Просто заполните анкету и получите одобрение. Всего один шаг, и квартира — ваша. Ставка действует первые 5 лет, далее 11,3% при сумме кредита до 100 млн рублей и первом взносе от 15%.',
    img: '/assets/images/img/ipoteka/family.png',
    procent: '11.5%',
    to: 'ipoteka/1',
  },
  {
    title: 'Коммерческая недвижимость',
    text: 'Ипотечные программы от ведущих банков с господдержкой и специальные для клиентов Инград. Ипотека доступна для физических и юридических лиц, по ставкам от 6,5% на весь срок, сумма кредита до 100 млн рублей, первый взнос от 15%',
    img: '/assets/images/img/ipoteka/family.png',
    procent: '6.5%',
    to: 'ipoteka/1',
  },
  {
    title: 'Загородная недвижимость',
    text: 'Позвольте себе удовольствие и комфорт загородной жизни на выгодных условиях от INGRAD. Дома с участками в ипотеку от ведущих банков по программам господдержки. Первый взнос от 15%.',
    img: '/assets/images/img/ipoteka/family.png',
    procent: '15%',
    to: 'ipoteka/1',
  },
]
</script>
<style lang="scss" scoped></style>
