<template>
  <div>
    <div class="tw-mb-8">
      <div class="wrapper">
        <HeaderMain />
      </div>
    </div>
    <div class="wrapper tw-flex tw-gap-5">
      <div>
        <div class="tw-grid tw-gap-3 tw-content-start">
          <template v-for="item in links">
            <NuxtLink
              v-if="item.name === 'Объекты'"
              class="link"
              :class="{ active: $route.meta?.parent === item.meta }"
              :to="item.to"
              exactActiveClass="active"
            >
              <BaseIcon :name="item.icon" class="link__icon" />
              <span class="link__title">
                {{ item.name }}
              </span>
            </NuxtLink>
            <button
              v-else
              class="link"
              :class="{ active: $route.meta?.parent === item.meta }"
              :to="item.to"
              exactActiveClass="active"
              @click="showDevMode()"
            >
              <BaseIcon :name="item.icon" class="link__icon" />
              <span class="link__title">
                {{ item.name }}
              </span>
            </button>
          </template>
        </div>
        <div
          class="tw-text-text02 tw-text-body_xs tw-flex tw-gap-2 tw-justify-center tw-items-center tw-mt-5"
        >
          <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5525_166125)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.447266 27.03L7.85662 16.3633L0.447266 5.69653H5.84264L13.2521 16.3633L5.84264 27.03H0.447266Z"
                fill="#D0D0D0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.3315 0.363525H13.936V32.3635H19.3315V0.363525ZM20.0151 16.3635L21.257 14.5755L23.4299 11.4474L24.9319 9.28513L25.6028 8.31931L27.1048 6.15706L27.4244 5.69679H32.8198L27.834 12.8745L25.6611 16.0026L25.4104 16.3635L32.8198 27.0303H27.4244L26.4631 25.6464L24.2903 22.5183L22.1174 19.3902L20.0151 16.3635Z"
                fill="#D0D0D0"
              />
            </g>
            <defs>
              <clipPath id="clip0_5525_166125">
                <rect
                  width="27.246"
                  height="23.2727"
                  fill="white"
                  transform="translate(0 0.363525)"
                />
              </clipPath>
            </defs>
          </svg>

          <div>
            <div>Все права защищены</div>
            <div>©️2023 Жилой Квартал</div>
          </div>
        </div>
      </div>
      <main class="tw-flex tw-flex-col tw-gap-5 tw-w-full tw-bg-white tw-rounded-2xl tw-py-8 tw-px-6">
        <slot />
      </main>
    </div>
    <div class="tw-mt-8">
      <div class="wrapper">
        <FooterMain class="tw-mt-12 lg:tw-mt-20 xl:tw-mt-24" />
      </div>
    </div>
    <BaseModal v-model="showedDevMode" v-slot="{ hide }" >
      <div class="tw-rounded-2xl tw-p-10 tw-bg-white tw-max-w-[507px]">
        <div class="tw-grid tw-justify-items-center tw-text-center tw-mb-6 ">
          <div class="tw-bg-base00 tw-rounded-lg tw-p-3 tw-w-fit tw-mb-6">
            <BaseIcon name="check" class=" tw-w-8 tw-h-8 tw-text-primary"/>
          </div>
          <div class="tw-text-h5 tw-mb-4">
            Раздел находится в разработке
          </div>
        </div>
        <BaseButton theme="gray" class="tw-w-full" @click="hide">
          Хорошо
        </BaseButton>
      </div>
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import HeaderMain from '@/other-modules/public-header/index.vue'
import FooterMain from '@/other-modules/public-footer/index.vue'
import { useComplexesStore } from '@/stores/complexes'
import { useTownsStore } from '@/stores/towns'

const complexesStore = useComplexesStore()
const townsStore = useTownsStore()

useAsyncData(() => {
  return Promise.all([complexesStore.show(), townsStore.show()])
});

const showedDevMode = ref(false);

const buyer = [
  {
    to: '/lk/agent',
    meta: null,
    name: 'Объекты',
    icon: 'house',
  },
  {
    to: '/lk/agent/action',
    meta: null,
    name: 'Акции',
    icon: 'gift',
  },
  {
    to: '/lk/agent/favorites',
    meta: null,
    name: 'Избранное',
    icon: 'heart',
  },
  {
    to: '/lk/agent/profile',
    meta: null,
    name: 'Профиль',
    icon: 'user',
  },
];

const agent = [
{
    to: '/lk/agent',
    meta: null,
    name: 'Объекты',
    icon: 'house',
  },
  {
    to: '/lk/agent/action',
    meta: null,
    name: 'Акции',
    icon: 'gift',
  },
  {
    to: '/lk/agent/rating',
    meta: null,
    name: 'Рейтинги',
    icon: 'chart-bar',
  },
  {
    to: '/lk/agent/favorites',
    meta: null,
    name: 'Избранное',
    icon: 'heart',
  },
  {
    to: '/lk/agent/clients',
    meta: 'clients',
    name: 'Клиенты',
    icon: 'handshake',
  },
  {
    to: '/lk/agent/profile',
    meta: null,
    name: 'Профиль',
    icon: 'user',
  },
];

const agency = [
{
    to: '/lk/agent',
    meta: null,
    name: 'Объекты',
    icon: 'house',
  },
  {
    to: '/lk/agent/action',
    meta: null,
    name: 'Акции',
    icon: 'gift',
  },
  {
    to: '/lk/agent/rating',
    meta: null,
    name: 'Рейтинги',
    icon: 'chart-bar',
  },
  {
    to: '/lk/agent/report',
    meta: null,
    name: 'Отчет агентства',
    icon: 'file',
  },
  {
    to: '/lk/agent/favorites',
    meta: null,
    name: 'Избранное',
    icon: 'heart',
  },
  {
    to: '/lk/agent/profile',
    meta: null,
    name: 'Профиль',
    icon: 'user',
  },
];

const userType = process.client ? localStorage.getItem('tokenType') : '';

const links = computed(() => {
  switch(userType) {
    case 'b2c': return buyer;
    case 'b2t': return agent;
    case 'b2y': return agency;
  }
  return buyer;
});

function showDevMode() {
  showedDevMode.value = true;
}
</script>
<style lang="scss">
.link {
  @apply tw-flex tw-gap-4 tw-px-4 tw-py-2 tw-rounded-lg;
  &__icon {
    @apply tw-w-6 tw-h-6 tw-text-icon;
    @apply tw-transition-colors tw-duration-300 tw-ease-in-out;
  }
  &__title {
    @apply tw-text-body_s -tw-tracking-875 tw-text-text02 tw-whitespace-nowrap;
    @apply tw-transition-colors tw-duration-300 tw-ease-in-out;
  }
  &.active &__icon {
    @apply tw-text-primary;
  }
  &.active &__title {
    @apply tw-text-text01;
  }
}
</style>
