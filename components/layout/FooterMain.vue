<template>
  <footer class="footer">
    <div class="wrapper">
      <div class="footer__wrapper">
        <EmailSubscribe class="area-form xl:tw-mb-20" />
        <div class="area-A">
          <div class="tw-grid lg:tw-hidden">
            <AccordionMain
              header-class=" tw-py-3 "
              v-for="section in footerSections"
            >
              <template #title>
                <h3 class="tw-text-body_m ">{{ section.label }}</h3>
              </template>
              <template #content>
                <div class="tw-grid tw-gap-6 tw-my-5">
                  <NuxtLink
                    v-for="item in section.links"
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
            <div v-for="section in footerSections">
              <h3 class="tw-text-body_m lg:tw-text-h6 tw-mb-6 ">{{ section.label }}</h3>
              <div class="tw-grid tw-gap-6">
                <NuxtLink
                  v-for="item in section.links"
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
          <img width="115" height="44" src="~assets/images/logo.svg" alt="" />
        </NuxtLink>
        <div
          class="tw-grid tw-gap-6 lg:tw-flex lg:tw-justify-between lg:tw-items-center xl:tw-grid xl:tw-items-start xl:tw-gap-0 xl:tw-content-start area-C"
        >
          <NuxtLink to="/" class="logo tw-hidden xl:tw-block xl:tw-mb-16">
            <img width="115" height="44" src="~assets/images/logo.svg" alt="" />
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
              <a :href="'tel:' + cleanedContPhone" class="tw-text-h6">{{
                contacts.phone
              }}</a>
              <button
                class="tw-text-primary tw-text-left tw-text-body_m"
                @click="showCallback"
              >
                Заказать звонок
              </button>
            </div>
          </div>

          <div>
            <p class="tw-text-text02 tw-text-body_xs lg:tw-w-[241px]">
              Отправляя любую форму на сайте, вы соглашаетесь с политикой
              конфиденциальности данного сайта
            </p>
          </div>
        </div>
        <div class="tw-flex tw-gap-[6px] area-soc xl:tw-mt-10">
          <a
            class="tw-w-10 tw-h-10 tw-text-center tw-leading-[40px]"
            v-for="(link, name) in social"
            :href="link"
          >
            <BaseIcon
              class="tw-w-6 tw-h-6 tw-inline-block"
              :name="`soc-${name}`"
            />
          </a>
        </div>
        <div
          class="tw-text-text02 tw-grid tw-gap-4 lg:tw-flex lg:tw-justify-between area-D xl:tw-pt-20"
        >
          <div>©️ 2023 Жилой Квартал | Все права защищены</div>
          <div>Сайт построили — Yes Idea</div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import EmailSubscribe from '@/other-modules/email-subscribe/index.vue';
import { useMenuStore } from '@/stores/menu';
import { useAppStore } from '~/stores/app';
import { useContactsStore } from '~/stores/contacts';

const menuStore = useMenuStore();
const appStore = useAppStore();
const contactsStore = useContactsStore();

const footerSections = computed(() => menuStore.footerMenu);
const contacts = computed(() => contactsStore.contacts);
const social = computed(() => contactsStore.social);
const cleanedContPhone = computed(() => contactsStore.phoneCleaned)

function showCallback() {
  appStore.showedCallback = true
}
</script>
<style lang="scss" scoped>
.footer {
  &__wrapper {
    @apply tw-bg-white tw-pt-6 tw-pb-8 tw-px-4 lg:tw-p-6;
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

      .area-soc {
        grid-area: soc;
      }

      .area-form {
        grid-area: form;
      }

      grid-template-areas: 'form' 'B' 'A' 'C' 'soc' 'D';
    }
    @screen xl {
      @apply tw-grid-cols-4 tw-gap-0;

      grid-template-areas: 'form form form form' 'C A A A' 'C A A A' 'soc soc soc soc' 'D D D D';
    }
  }
}
</style>
