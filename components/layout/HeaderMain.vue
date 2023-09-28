<template>
  <header class="header tw-my-4">
    <div class="tw-container">
      <div class="header__wrapper">
        <div class="header__left">
          <div
            class="burger tw-hidden lg:tw-block"
            @click="showedNav = !showedNav"
          ></div>
          <div class="tw-flex tw-items-center tw-gap-8">
            <NuxtLink to="/" class="logo">
              <img
                width="115"
                height="44"
                src="~assets/images/logo.svg"
                alt=""
              />
            </NuxtLink>

            <a
              href="#"
              class="tw-hidden lg:tw-inline xl:tw-hidden tw-text-error tw-text-body_m"
            >
              Спецпредложения
            </a>
          </div>
        </div>
        <div class="header__middle">
          <nav class="tw-flex tw-gap-6 tw-items-center">
            <NuxtLink v-for="item in items" to="/">
              {{ item.label }}
            </NuxtLink>
            <a href="#" class="tw-text-error tw-text-body_m">
              Спецпредложения
            </a>
          </nav>
        </div>
        <div class="header__right">
          <div
            class="burger lg:tw-hidden"
            @click="showedNav = !showedNav"
          ></div>
          <div class="tw-hidden lg:tw-flex lg:tw-gap-8 tw-items-center">
            <div class="tw-grid tw-gap-1">
              <div class="tw-text-body_m">
                <a :href="`tel:${cleanedHeadPhone}`">{{ headerPhone }}</a>
              </div>
              <button
                class="tw-text-primary tw-text-body_s2 -tw-tracking-875 tw-text-left"
              >
                Заказать звонок
              </button>
            </div>
            <div class="tw-flex tw-gap-6">
              <button class="tw-relative">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.875 7.126C26.5164 5.77082 24.6765 5.00873 22.7576 5.00639C20.8387 5.00405 18.9969 5.76164 17.635 7.1135L16 8.63225L14.3638 7.1085C13.0022 5.75076 11.1571 4.9895 9.23422 4.99219C7.31139 4.99489 5.46838 5.76132 4.11064 7.12287C2.75289 8.48443 1.99164 10.3296 1.99433 12.2524C1.99703 14.1752 2.76345 16.0183 4.12501 17.376L15.2938 28.7085C15.3868 28.803 15.4977 28.878 15.62 28.9292C15.7424 28.9805 15.8736 29.0068 16.0063 29.0068C16.1389 29.0068 16.2702 28.9805 16.3925 28.9292C16.5148 28.878 16.6257 28.803 16.7188 28.7085L27.875 17.376C29.2337 16.0165 29.997 14.1731 29.997 12.251C29.997 10.3289 29.2337 8.48551 27.875 7.126ZM26.4563 15.971L16 26.576L5.53751 15.961C4.55289 14.9764 3.99974 13.641 3.99974 12.2485C3.99974 10.856 4.55289 9.52062 5.53751 8.536C6.52213 7.55138 7.85755 6.99823 9.25001 6.99823C10.6425 6.99823 11.9779 7.55138 12.9625 8.536L12.9875 8.561L15.3188 10.7297C15.5038 10.902 15.7472 10.9977 16 10.9977C16.2528 10.9977 16.4962 10.902 16.6813 10.7297L19.0125 8.561L19.0375 8.536C20.0228 7.55205 21.3586 6.99979 22.751 7.00073C24.1435 7.00167 25.4786 7.55572 26.4625 8.541C27.4465 9.52628 27.9987 10.8621 27.9978 12.2545C27.9968 13.647 27.4428 14.982 26.4575 15.966L26.4563 15.971Z"
                    fill="#4FBA78"
                  />
                </svg>
                <div
                  class="tw-absolute tw-right-0 tw-top-0 tw-transform tw-translate-x-1/3 -tw-translate-y-1/3 tw-w-5 tw-h-5 tw-rounded-full tw-bg-error tw-text-white tw-text-body_xs tw-grid tw-place-content-center"
                >
                  2
                </div>
              </button>
              <button>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.865 26.4995C26.9612 23.2082 24.0275 20.8482 20.6037 19.7295C22.2973 18.7213 23.613 17.1851 24.349 15.3567C25.0849 13.5284 25.2004 11.509 24.6775 9.60869C24.1547 7.70838 23.0226 6.03224 21.4549 4.83765C19.8873 3.64306 17.9709 2.99609 16 2.99609C14.0291 2.99609 12.1126 3.64306 10.545 4.83765C8.97737 6.03224 7.84522 7.70838 7.3224 9.60869C6.79958 11.509 6.91501 13.5284 7.65096 15.3567C8.38691 17.1851 9.70268 18.7213 11.3962 19.7295C7.97247 20.847 5.03872 23.207 3.13497 26.4995C3.06516 26.6133 3.01885 26.74 2.99878 26.872C2.97872 27.004 2.98529 27.1387 3.01813 27.2682C3.05096 27.3976 3.10939 27.5192 3.18996 27.6257C3.27053 27.7322 3.37162 27.8214 3.48725 27.8882C3.60289 27.955 3.73073 27.998 3.86323 28.0146C3.99574 28.0311 4.13022 28.021 4.25875 27.9848C4.38728 27.9486 4.50725 27.8869 4.61158 27.8036C4.71592 27.7202 4.8025 27.6168 4.86622 27.4995C7.22122 23.4295 11.3837 20.9995 16 20.9995C20.6162 20.9995 24.7787 23.4295 27.1337 27.4995C27.1974 27.6168 27.284 27.7202 27.3884 27.8036C27.4927 27.8869 27.6127 27.9486 27.7412 27.9848C27.8697 28.021 28.0042 28.0311 28.1367 28.0146C28.2692 27.998 28.3971 27.955 28.5127 27.8882C28.6283 27.8214 28.7294 27.7322 28.81 27.6257C28.8906 27.5192 28.949 27.3976 28.9818 27.2682C29.0147 27.1387 29.0212 27.004 29.0012 26.872C28.9811 26.74 28.9348 26.6133 28.865 26.4995ZM8.99997 11.9995C8.99997 10.615 9.41051 9.26165 10.1797 8.1105C10.9489 6.95936 12.0421 6.06215 13.3212 5.53234C14.6003 5.00252 16.0077 4.8639 17.3656 5.134C18.7235 5.40409 19.9708 6.07078 20.9497 7.04975C21.9287 8.02871 22.5954 9.276 22.8655 10.6339C23.1356 11.9917 22.9969 13.3992 22.4671 14.6783C21.9373 15.9574 21.0401 17.0506 19.889 17.8198C18.7378 18.589 17.3844 18.9995 16 18.9995C14.1441 18.9975 12.3647 18.2594 11.0524 16.9471C9.74009 15.6347 9.00196 13.8554 8.99997 11.9995Z"
                    fill="#2D2D2D"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <NavMenu :showed="showedNav" />
</template>

<script setup>
import NavMenu from '@/components/layout/NavMenu.vue'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore();

const items = computed(() => appStore.headerMenu);
const headerPhone = computed(() => appStore.headerPhone);
const cleanedHeadPhone = computed(() => appStore.cleanedHeadPhone);

const showedNav = ref(false)
</script>
<style lang="scss" scoped>
.header {
  &__wrapper {
    @apply tw-bg-white tw-p-4 tw-h-20;
    @apply tw-rounded-2xl tw-overflow-hidden;
    @apply tw-flex tw-justify-between tw-items-center;
  }
  &__left {
    @apply tw-flex tw-items-center tw-gap-6;
  }
  &__middle {
    @apply tw-hidden xl:tw-block;
  }
}
</style>
