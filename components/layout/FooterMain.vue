<template>
  <footer class="footer">
    <div class="tw-container">
      <div class="footer__wrapper">
        <div class="area-A">
          <div class="tw-grid lg:tw-hidden">
            <AccordionMain
              header-class=" tw-py-3 "
              v-for="itemComparison in listComparison"
            >
              <template #title>
                <h3 class="tw-text-body_m">{{ itemComparison.title }}</h3>
              </template>
              <template #content>
                <div class="tw-grid tw-gap-6 tw-my-5">
                  <NuxtLink
                    v-for="item in navList[itemComparison.key_obj]"
                    :to="item.to"
                    class="tw-text-text02 tw-text-body_m"
                  >
                    {{ item.label }}
                  </NuxtLink>
                </div>
              </template>
            </AccordionMain>
          </div>
          <div class="tw-hidden lg:tw-grid tw-grid-cols-4 tw-gap-16">
            <div v-for="itemComparison in listComparison">
              <h3 class="tw-text-body_m tw-mb-6">{{ itemComparison.title }}</h3>
              <div class="tw-grid tw-gap-6">
                <NuxtLink
                  v-for="item in navList[itemComparison.key_obj]"
                  :to="item.to"
                  class="tw-text-text02"
                >
                  {{ item.label }}</NuxtLink
                >
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/" class="logo area-B xl:tw-hidden">
          <img width="115" height="44" src="/assets/images/logo.svg" alt="" />
        </NuxtLink>
        <div
          class="tw-grid tw-gap-6 lg:tw-flex lg:tw-justify-between lg:tw-items-center xl:tw-grid xl:tw-items-start xl:tw-gap-0 xl:tw-content-start area-C"
        >
          <NuxtLink to="/" class="logo tw-hidden xl:tw-block xl:tw-mb-16">
            <img width="115" height="44" src="/assets/images/logo.svg" alt="" />
          </NuxtLink>
          <div
            class="tw-grid tw-gap-6 lg:tw-flex lg:tw-gap-5 xl:tw-grid xl:tw-gap-10 xl:tw-mb-12"
          >
            <div class="tw-grid tw-gap-2">
              <address class="tw-not-italic tw-text-h6">
                {{ contacts.address.text }}
              </address>
              <p class="tw-text-body_m tw-text-text02">
                {{ contacts.address.label }}
              </p>
            </div>
            <div class="tw-grid tw-gap-2">
              <a :href="'tel:' + contacts.phone" class="tw-text-h6">{{
                contacts.phone
              }}</a>
              <button class="tw-text-primary tw-text-left tw-text-body_m">
                Заказать звонок
              </button>
            </div>
          </div>

          <p class="tw-text-text02 tw-text-body_xs lg:tw-w-[241px]">
            Отправляя любую форму на сайте, вы соглашаетесь с политикой
            конфиденциальности данного сайта
          </p>
        </div>
        <div
          class="tw-text-text02 tw-grid tw-gap-4 lg:tw-flex lg:tw-justify-between area-D"
        >
          <div>©️ 2023 Жилой Квартал | Все права защищены</div>
          <div>Сайт построили — Yes Idea</div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useAppStore } from '~/stores/app'
const appStore = useAppStore()
const listComparison = [
  {
    title: 'Покупателям',
    key_obj: 'bayers',
  },
  {
    title: 'Квартиры',
    key_obj: 'apartments',
  },
  {
    title: 'Коттеджи',
    key_obj: 'cottages',
  },
  {
    title: 'Коммерческая',
    key_obj: 'commercial',
  },
  {
    title: 'Владельцам',
    key_obj: 'owners',
  },
  {
    title: 'О компании',
    key_obj: 'about_company',
  },
  {
    title: 'Пресс-центр',
    key_obj: 'press_center',
  },
  {
    title: 'Контакты',
    key_obj: 'contacts',
  },
]
const navList = computed(() => appStore.footerMenu)
const contacts = computed(() => appStore.contacts)
</script>
<style lang="scss" scoped>
.footer {
  &__wrapper {
    @apply tw-bg-white tw-p-6;
    @apply tw-rounded-2xl tw-overflow-hidden;
    @apply tw-grid tw-gap-12;
    @screen lg {
      .area-A {
        grid-area: A;
      }
      .area-B {
        grid-area: B;
      }
      .area-C {
        grid-area: C;
      }
      .area-D {
        grid-area: D;
      }

      grid-template-areas: 'B' 'A' 'C' 'D';
    }
    @screen xl {
      @apply tw-grid-cols-4 tw-gap-0;

      grid-template-areas: 'C A A A' 'C A A A' 'D D D D';
    }
  }
}
</style>
