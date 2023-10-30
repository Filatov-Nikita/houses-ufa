<template>
  <div>
    <HeaderMain />
    <div class="tw-container tw-flex tw-gap-5">
      <div>
        <div class="tw-grid tw-gap-3 tw-content-start">
          <NuxtLink
            class="link"
            :class="{ active: $route.meta?.parent === item.meta }"
            v-for="item in lkLinksAgent"
            :to="item.to"
            exactActiveClass="active"
          >
            <BaseIcon :name="item.icon" class="link__icon" />
            <span class="link__title">
              {{ item.name }}
            </span>
          </NuxtLink>
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
      <main class="tw-flex tw-flex-col tw-gap-5 tw-w-full">
        <slot />
      </main>
    </div>
    <FooterMain class="tw-mt-12 lg:tw-mt-20 xl:tw-mt-24" />
    <ModalCallback
      :model-value="showedCallback"
      @update:model-value="updateCallback"
    />
  </div>
</template>

<script setup lang="ts">
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'
import ModalCallback from '../components/modals/Form.vue'
import { useAppStore } from '@/stores/app'
import { useComplexesStore } from '@/stores/complexes'
import { useTownsStore } from '@/stores/towns'
const complexesStore = useComplexesStore()
const townsStore = useTownsStore()
const appStore = useAppStore()
const showedCallback = computed(() => appStore.showedCallback)

useAsyncData(() => {
  return Promise.all([complexesStore.show(), townsStore.show()])
})

function updateCallback(val: boolean) {
  appStore.showedCallback = val
}

const lkLinksAgent = [
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
]
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
