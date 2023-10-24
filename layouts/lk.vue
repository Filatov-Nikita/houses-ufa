<template>
  <div>
    <HeaderMain />
    <div class="tw-container tw-flex tw-gap-5">
      <div>
        <div class="tw-grid tw-gap-3 tw-content-start">
          <NuxtLink
            to="/"
            class="tw-flex tw-gap-4 tw-px-4 tw-py-2 tw-rounded-lg"
            v-for="item in lkLinks"
          >
            <BaseIcon :name="item.icon" class="tw-w-6 tw-h-6 tw-text-icon" />
            <span
              class="tw-text-body_s -tw-tracking-875 tw-text-text02 tw-whitespace-nowrap"
            >
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

const lkLinks = [
  {
    to: '/',
    name: 'Объекты',
    icon: 'house',
  },
  {
    to: '/',
    name: 'Акции',
    icon: 'gift',
  },
  {
    to: '/',
    name: 'Рейтинги',
    icon: 'chart-bar',
  },
  {
    to: '/',
    name: 'Отчет агентства',
    icon: 'file',
  },
  {
    to: '/',
    name: 'Избранное',
    icon: 'heart',
  },
  {
    to: '/',
    name: 'Клиенты',
    icon: 'handshake',
  },
  {
    to: '/',
    name: 'Профиль',
    icon: 'user',
  },
]
</script>
