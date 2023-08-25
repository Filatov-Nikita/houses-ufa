<template>
  <section class="tw-mb-4">
    <div class="tw-container">
      <Swiper
        :modules="[SwiperPagination, SwiperNavigation]"
        :slides-per-view="1"
        :breakpoints="{
          '1024': {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          '1440': {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }"
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
        <SwiperSlide v-for="(category, idx) in categoryList" :key="idx">
          <CardsCategory
            :title="category.title"
            :text="category.text"
            :img="category.img"
            :to="category.to"
          />
        </SwiperSlide>

        <div
          class="swiper-next tw-w-8 tw-h-8 tw-rounded-lg tw-backdrop-blur-sm tw-bg-text01/40 tw-grid tw-place-content-center tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-6 tw-z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0306 12.531L9.53055 20.031C9.46087 20.1007 9.37815 20.156 9.2871 20.1937C9.19606 20.2314 9.09847 20.2508 8.99993 20.2508C8.90138 20.2508 8.8038 20.2314 8.71276 20.1937C8.62171 20.156 8.53899 20.1007 8.4693 20.031C8.39962 19.9614 8.34435 19.8786 8.30663 19.7876C8.26892 19.6965 8.24951 19.599 8.24951 19.5004C8.24951 19.4019 8.26892 19.3043 8.30663 19.2132C8.34435 19.1222 8.39962 19.0395 8.4693 18.9698L15.4396 12.0004L8.4693 5.03104C8.32857 4.89031 8.24951 4.69944 8.24951 4.50042C8.24951 4.30139 8.32857 4.11052 8.4693 3.96979C8.61003 3.82906 8.80091 3.75 8.99993 3.75C9.19895 3.75 9.38982 3.82906 9.53055 3.96979L17.0306 11.4698C17.1003 11.5394 17.1556 11.6222 17.1933 11.7132C17.2311 11.8043 17.2505 11.9019 17.2505 12.0004C17.2505 12.099 17.2311 12.1966 17.1933 12.2876C17.1556 12.3787 17.1003 12.4614 17.0306 12.531Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="swiper-prev tw-w-8 tw-h-8 tw-rounded-lg tw-backdrop-blur-sm tw-bg-text01/40 tw-grid tw-place-content-center tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-6 tw-z-10"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5307 18.9698C15.6004 19.0395 15.6557 19.1222 15.6934 19.2132C15.7311 19.3043 15.7505 19.4019 15.7505 19.5004C15.7505 19.599 15.7311 19.6965 15.6934 19.7876C15.6557 19.8786 15.6004 19.9614 15.5307 20.031C15.461 20.1007 15.3783 20.156 15.2873 20.1937C15.1962 20.2314 15.0986 20.2508 15.0001 20.2508C14.9016 20.2508 14.804 20.2314 14.7129 20.1937C14.6219 20.156 14.5392 20.1007 14.4695 20.031L6.96948 12.531C6.89974 12.4614 6.84443 12.3787 6.80668 12.2876C6.76894 12.1966 6.74951 12.099 6.74951 12.0004C6.74951 11.9019 6.76894 11.8043 6.80668 11.7132C6.84443 11.6222 6.89974 11.5394 6.96948 11.4698L14.4695 3.96979C14.6102 3.82906 14.8011 3.75 15.0001 3.75C15.1991 3.75 15.39 3.82906 15.5307 3.96979C15.6715 4.11052 15.7505 4.30139 15.7505 4.50042C15.7505 4.69944 15.6715 4.89031 15.5307 5.03104L8.56041 12.0004L15.5307 18.9698Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          class="swiper-pagination tw-absolute !tw-bottom-6 !tw-left-auto tw-z-10 tw-right-6"
        ></div>
      </Swiper>
    </div>
    <!-- <Compare /> -->
    <!-- <CompareContentMobile /> -->
    <!-- <CompareContent /> -->
    <!-- <MapCategory />
    <MapComplex /> -->
  </section>
  <section class="section">
    <div class="tw-container">
      <div
        class="tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-px-6 xl:tw-p-10 tw-bg-white"
      >
        <div class="section__top">
          <h2 class="section__title">Спецпредложения</h2>
        </div>
        <div>
          <!-- <div class="tw-flex tw-justify-between tw-mb-6 lg:tw-mb-8">
            <div>
              <h5 class="tw-text-body_s2 tw-text-text02 tw-mb-2">
                Комнатность
              </h5>
              <div class="tw-flex tw-gap-2">
                <BaseButton>Студия</BaseButton>
                <BaseButton theme="secondary">1</BaseButton>
                <BaseButton theme="secondary">2</BaseButton>
                <BaseButton theme="secondary">3+</BaseButton>
              </div>
            </div>
            <div>
              <BaseButton>Квартиры</BaseButton>
              <BaseButton theme="secondary">Коттеджи</BaseButton>
              <BaseButton theme="secondary">Таунхаусы</BaseButton>
            </div>
          </div> -->
          <Swiper
            :modules="[SwiperPagination, SwiperNavigation]"
            :slides-per-view="1"
            :breakpoints="{
              '1024': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '1440': {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }"
            :pagination="{
              type: 'bullets',
              dynamicBullets: true,
              dynamicMainBullets: 3,
              el: '.swiper-pagination',
              bulletActiveClass: 'dot-bullet-active',
              bulletClass: 'dot-bullet',
            }"
            :navigation="{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }"
          >
            <SwiperSlide v-for="(category, idx) in 9" :key="idx">
              <CardsBestseller />
            </SwiperSlide>
            <button
              class="swiper-next tw-w-8 tw-h-8 tw-rounded-lg tw-backdrop-blur-sm tw-bg-text01/40 tw-grid tw-place-content-center tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-3 tw-z-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0306 12.531L9.53055 20.031C9.46087 20.1007 9.37815 20.156 9.2871 20.1937C9.19606 20.2314 9.09847 20.2508 8.99993 20.2508C8.90138 20.2508 8.8038 20.2314 8.71276 20.1937C8.62171 20.156 8.53899 20.1007 8.4693 20.031C8.39962 19.9614 8.34435 19.8786 8.30663 19.7876C8.26892 19.6965 8.24951 19.599 8.24951 19.5004C8.24951 19.4019 8.26892 19.3043 8.30663 19.2132C8.34435 19.1222 8.39962 19.0395 8.4693 18.9698L15.4396 12.0004L8.4693 5.03104C8.32857 4.89031 8.24951 4.69944 8.24951 4.50042C8.24951 4.30139 8.32857 4.11052 8.4693 3.96979C8.61003 3.82906 8.80091 3.75 8.99993 3.75C9.19895 3.75 9.38982 3.82906 9.53055 3.96979L17.0306 11.4698C17.1003 11.5394 17.1556 11.6222 17.1933 11.7132C17.2311 11.8043 17.2505 11.9019 17.2505 12.0004C17.2505 12.099 17.2311 12.1966 17.1933 12.2876C17.1556 12.3787 17.1003 12.4614 17.0306 12.531Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              class="swiper-prev tw-w-8 tw-h-8 tw-rounded-lg tw-backdrop-blur-sm tw-bg-text01/40 tw-grid tw-place-content-center tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-left-3 tw-z-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5307 18.9698C15.6004 19.0395 15.6557 19.1222 15.6934 19.2132C15.7311 19.3043 15.7505 19.4019 15.7505 19.5004C15.7505 19.599 15.7311 19.6965 15.6934 19.7876C15.6557 19.8786 15.6004 19.9614 15.5307 20.031C15.461 20.1007 15.3783 20.156 15.2873 20.1937C15.1962 20.2314 15.0986 20.2508 15.0001 20.2508C14.9016 20.2508 14.804 20.2314 14.7129 20.1937C14.6219 20.156 14.5392 20.1007 14.4695 20.031L6.96948 12.531C6.89974 12.4614 6.84443 12.3787 6.80668 12.2876C6.76894 12.1966 6.74951 12.099 6.74951 12.0004C6.74951 11.9019 6.76894 11.8043 6.80668 11.7132C6.84443 11.6222 6.89974 11.5394 6.96948 11.4698L14.4695 3.96979C14.6102 3.82906 14.8011 3.75 15.0001 3.75C15.1991 3.75 15.39 3.82906 15.5307 3.96979C15.6715 4.11052 15.7505 4.30139 15.7505 4.50042C15.7505 4.69944 15.6715 4.89031 15.5307 5.03104L8.56041 12.0004L15.5307 18.9698Z"
                  fill="white"
                />
              </svg>
            </button>
            <div
              class="swiper-pagination !tw-static !tw-justify-center !tw-flex !tw-w-auto !tw-mt-9 !tw-translate-x-0"
            ></div>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">География наших комплексов</h2>
      </div>
      <ClientOnly>
        <MapComplex />
      </ClientOnly>
    </div>
  </section>
  <section class="section">
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Объекты</h2>
      </div>
      <div class="complex-list">
        <CardsResidentialComplex
          class="item"
          v-for="item in residentialComplexs"
          :img="item.img"
          :title="item.title"
          :typeApartment="item.typeApartment"
          :price="item.price"
          :place="item.place"
          :status="item.status"
        />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="tw-container">
      <div class="section__top tw-flex tw-justify-between tw-items-center">
        <h2 class="section__title">Варианты покупки объектов недвижимости</h2>
        <div class="tw-hidden lg:tw-block">
          <NuxtLink to="/" class="tw-flex tw-gap-2">
            <span class="tw-text-primary"> Все ипотечные предложения </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7806 12.531L14.0306 19.281C13.8899 19.4218 13.699 19.5008 13.5 19.5008C13.301 19.5008 13.1101 19.4218 12.9694 19.281C12.8286 19.1403 12.7496 18.9494 12.7496 18.7504C12.7496 18.5514 12.8286 18.3605 12.9694 18.2198L18.4397 12.7504H3.75C3.55109 12.7504 3.36032 12.6714 3.21967 12.5307C3.07902 12.3901 3 12.1993 3 12.0004C3 11.8015 3.07902 11.6107 3.21967 11.4701C3.36032 11.3294 3.55109 11.2504 3.75 11.2504H18.4397L12.9694 5.78104C12.8286 5.64031 12.7496 5.44944 12.7496 5.25042C12.7496 5.05139 12.8286 4.86052 12.9694 4.71979C13.1101 4.57906 13.301 4.5 13.5 4.5C13.699 4.5 13.8899 4.57906 14.0306 4.71979L20.7806 11.4698C20.8504 11.5394 20.9057 11.6222 20.9434 11.7132C20.9812 11.8043 21.0006 11.9019 21.0006 12.0004C21.0006 12.099 20.9812 12.1966 20.9434 12.2876C20.9057 12.3787 20.8504 12.4614 20.7806 12.531Z"
                fill="#4FBA78"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
      <div class="tw-grid lg:tw-grid-cols-2 tw-gap-5">
        <CardsIpoteka
          title="Льготная"
          procent="от 3%"
          :icons="[
            '/assets/images/icons/ipoteka/smile.svg',
            '/assets/images/icons/ipoteka/smile.svg',
            '/assets/images/icons/ipoteka/smile.svg',
          ]"
        >
          <img
            src="/assets/images/img/ipoteka/family.png"
            alt=""
            class="tw-absolute tw-top-[50px] -tw-right-[65px] tw-w-[521px] tw-h-[521px] tw-object-cover"
          />
        </CardsIpoteka>
        <CardsIpoteka
          title="Льготная"
          procent="от 3%"
          :icons="[
            '/assets/images/icons/ipoteka/smile.svg',
            '/assets/images/icons/ipoteka/smile.svg',
            '/assets/images/icons/ipoteka/smile.svg',
          ]"
        >
          <img
            src="/assets/images/img/ipoteka/family.png"
            alt=""
            class="tw-absolute tw-top-[50px] -tw-right-[65px] tw-w-[521px] tw-h-[521px] tw-object-cover"
          />
        </CardsIpoteka>
      </div>
      <div class="lg:tw-hidden tw-mt-9">
        <NuxtLink to="/" class="tw-flex tw-gap-2">
          <span class="tw-text-primary"> Все ипотечные предложения </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7806 12.531L14.0306 19.281C13.8899 19.4218 13.699 19.5008 13.5 19.5008C13.301 19.5008 13.1101 19.4218 12.9694 19.281C12.8286 19.1403 12.7496 18.9494 12.7496 18.7504C12.7496 18.5514 12.8286 18.3605 12.9694 18.2198L18.4397 12.7504H3.75C3.55109 12.7504 3.36032 12.6714 3.21967 12.5307C3.07902 12.3901 3 12.1993 3 12.0004C3 11.8015 3.07902 11.6107 3.21967 11.4701C3.36032 11.3294 3.55109 11.2504 3.75 11.2504H18.4397L12.9694 5.78104C12.8286 5.64031 12.7496 5.44944 12.7496 5.25042C12.7496 5.05139 12.8286 4.86052 12.9694 4.71979C13.1101 4.57906 13.301 4.5 13.5 4.5C13.699 4.5 13.8899 4.57906 14.0306 4.71979L20.7806 11.4698C20.8504 11.5394 20.9057 11.6222 20.9434 11.7132C20.9812 11.8043 21.0006 11.9019 21.0006 12.0004C21.0006 12.099 20.9812 12.1966 20.9434 12.2876C20.9057 12.3787 20.8504 12.4614 20.7806 12.531Z"
              fill="#4FBA78"
            />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="tw-container">
      <div class="section__top">
        <h2 class="section__title">Познакомимся поближе</h2>
      </div>
      <div
        class="tw-grid tw-gap-4 lg:tw-grid-cols-2 xl:tw-grid-cols-4 tw-mb-4 lg:tw-mb-5"
      >
        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              №1
            </h3>
            <h4 class="tw-text-primary tw-text-h5">девелопер</h4>
          </div>
          <p class="tw-text-text02">в загородном строительстве</p>
        </div>

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              14
            </h3>
            <h4 class="tw-text-primary tw-text-h5">комплексов</h4>
          </div>
          <p class="tw-text-text02">построено и еще строится</p>
        </div>

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              2001
            </h3>
            <h4 class="tw-text-primary tw-text-h5">год —</h4>
          </div>
          <p class="tw-text-text02">год основания компании</p>
        </div>

        <div class="tw-rounded-2xl tw-bg-white tw-p-6 tw-grid tw-gap-12">
          <div>
            <h3
              class="tw-text-primary tw-text-h2 -tw-tracking-3 tw-font-freesetdemi"
            >
              1.5
            </h3>
            <h4 class="tw-text-primary tw-text-h5">млн м2</h4>
          </div>
          <p class="tw-text-text02">введено в эксплуатацию</p>
        </div>
      </div>
      <div
        class="tw-bg-secondary tw-p-6 tw-rounded-2xl tw-h-[227px] lg:tw-h-auto tw-grid tw-content-between lg:tw-flex lg:tw-justify-between"
      >
        <div class="tw-flex tw-gap-6">
          <button
            class="tw-rounded-lg tw-w-12 tw-h-12 tw-bg-primary tw-grid tw-place-content-center"
          >
            <img src="/assets/images/icons/play.svg" alt="play" />
          </button>
          <p>
            Смотреть ролик <br />
            о компании
          </p>
        </div>
        <img
          src="/assets/images/icons/logo-green.svg"
          alt="logo"
          class="tw-w-[157px]"
        />
      </div>
    </div>
  </section>

  <section class="section">
    <div class="tw-container">
      <div class="section__top tw-flex tw-justify-between">
        <h2 class="section__title">Новости</h2>
        <NuxtLink to="/" class="tw-flex tw-gap-2">
          <span class="tw-text-primary"> Все новости </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7806 12.531L14.0306 19.281C13.8899 19.4218 13.699 19.5008 13.5 19.5008C13.301 19.5008 13.1101 19.4218 12.9694 19.281C12.8286 19.1403 12.7496 18.9494 12.7496 18.7504C12.7496 18.5514 12.8286 18.3605 12.9694 18.2198L18.4397 12.7504H3.75C3.55109 12.7504 3.36032 12.6714 3.21967 12.5307C3.07902 12.3901 3 12.1993 3 12.0004C3 11.8015 3.07902 11.6107 3.21967 11.4701C3.36032 11.3294 3.55109 11.2504 3.75 11.2504H18.4397L12.9694 5.78104C12.8286 5.64031 12.7496 5.44944 12.7496 5.25042C12.7496 5.05139 12.8286 4.86052 12.9694 4.71979C13.1101 4.57906 13.301 4.5 13.5 4.5C13.699 4.5 13.8899 4.57906 14.0306 4.71979L20.7806 11.4698C20.8504 11.5394 20.9057 11.6222 20.9434 11.7132C20.9812 11.8043 21.0006 11.9019 21.0006 12.0004C21.0006 12.099 20.9812 12.1966 20.9434 12.2876C20.9057 12.3787 20.8504 12.4614 20.7806 12.531Z"
              fill="#4FBA78"
            />
          </svg>
        </NuxtLink>
      </div>
      <div class="tw-grid tw-gap-4 lg:tw-grid-cols-2 xl:tw-grid-cols-3">
        <CardsItemNews v-for="n in 4" />
      </div>
    </div>
  </section>
  <section class="section">
    <div class="tw-container">
      <div
        class="tw-rounded-3xl tw-py-6 tw-px-4 lg:tw-px-6 xl:tw-p-10 tw-bg-white tw-grid tw-gap-6"
      >
        <p>
          Наша компания являемся ведущими экспертами в сфере недвижимости и
          предлагаем широкий спектр услуг, связанных с покупкой, продажей и
          арендой недвижимости. Независимо от того, ищете ли вы идеальный дом,
          коммерческое помещение или инвестиционную возможность, наша команда
          профессионалов готова помочь вам реализовать ваши цели.
        </p>
        <p>
          Мы гордимся нашей обширной базой данных, которая включает в себя самые
          актуальные и привлекательные предложения на рынке недвижимости. Наша
          команда постоянно обновляет информацию, чтобы вы всегда были в курсе
          последних предложений. Мы также предоставляем детальные описания и
          фотографии каждого объекта, чтобы помочь вам принять информированное
          решение.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=ce866f84-33d0-4ab2-861e-3009442a93d1&coordorder=longlat&lang=ru_RU',
      type: 'text/javascript',
    },
  ],
})
const categoryList = [
  {
    title: 'Квартиры в Уфе',
    text: 'Подстрочник в 2/3 строки',
    img: '/assets/images/img/country_real_estate.png',
    to: '/',
  },
  {
    title: 'Квартиры в Уфимском районе',
    text: 'Подстрочник в 2/3 строки',
    img: '/assets/images/img/country_real_estate.png',
    to: '/',
  },
  {
    title: 'Коттеджи и таунхаусы',
    text: 'Подстрочник в 2/3 строки',
    img: '/assets/images/img/country_real_estate.png',
    to: '/',
  },
]

const residentialComplexs = [
  {
    img: '/assets/images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
  },
  {
    img: '/assets/images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
  },
  {
    img: '/assets/images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
  },
  {
    img: '/assets/images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
  },
  {
    img: '/assets/images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
  },
  {
    img: '/assets/images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
  },
  {
    img: '/assets/images/img/country_real_estate.png',
    title: 'Сапфир',
    typeApartment: 'квартиры',
    price: '3 258 542',
    place: 'с. Михайловка',
    status: 'Последние участки',
  },
]

// definePageMeta({
//   layout: 'default'
// });
</script>
<style lang="scss" scoped>
.complex-list {
  @apply tw-grid tw-gap-4;
  @screen lg {
    @apply tw-grid-cols-2;
    .item:nth-child(1) {
      @apply tw-col-span-2;
    }
  }
  @screen xl {
    @apply tw-grid-cols-4;
    .item:nth-child(1) {
      @apply tw-col-span-3;
    }
    .item:nth-child(2) {
      @apply tw-col-span-1;
    }

    .item:nth-child(5) {
      @apply tw-col-span-2;
    }
    .item:nth-child(6) {
      @apply tw-col-span-2;
    }
    .item:nth-child(7) {
      @apply tw-col-span-2;
    }
  }
}
</style>
