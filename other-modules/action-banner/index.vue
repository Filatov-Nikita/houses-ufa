<template>
  <div
    v-if="banner && banner.data && canShow"
    class="action-banner tw-rounded-lg tw-grid tw-gap-4 tw-bg-primary lg:tw-flex lg:tw-items-start lg:tw-justify-between lg:tw-rounded-2xl lg:tw-gap-[30px]"
    :class="{ 'action-banner--center': banner.data.image_position === 'center' || true }"
  >
    <svg
      class="action-banner__icon tw-absolute"
      viewBox="0 0 1360 188"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M-97.2584 356.862L303.141 18.3145L125.658 -475.074L336.06 -418.697L513.545 74.6921L113.144 413.239L-97.2584 356.862Z"
          fill="#237E44"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M917.796 -485.692L707.389 -542.07L373.016 705.825L583.423 762.203L917.796 -485.692ZM777.265 145.398L844.38 88.6491L961.8 -10.634L1042.97 -79.2597L1079.22 -109.913L1160.39 -178.54L1177.66 -193.148L1388.07 -136.771L1118.63 91.0382L1001.21 190.318L987.666 201.775L1165.15 695.165L954.747 638.788L931.721 574.775L879.672 430.086L827.624 285.397L777.265 145.398Z"
          fill="#237E44"
        />
      </g>
    </svg>

    <div v-if="banner.data.image" class="action-banner__img">
      <img :width="banner.data.image.width ?? 0" :height="banner.data.image.height ?? 0" :src="banner.data.image.url" />
    </div>
    <div class="action-banner__content">
      <div class="tw-text-h6 tw-text-white">{{ banner.data.title }}</div>
      <div class="tw-text-body_s tw-text-primary01 tw-mb-1">{{ banner.data.subtitle}}</div>
      <div class="tw-text-h3 tw-font-semibold tw-text-white lg:tw-text-h1">
        {{ banner.data.capitals }}
      </div>
    </div>

    <div class="action-banner__divider"></div>

    <div class="action-banner__timer tw-bg-white tw-p-4 tw-rounded-2xl tw-grid tw-gap-2 tw-z-10 tw-shrink-0">
      <div class="">До окончания акции</div>
      <div class="tw-grid tw-gap-4 lg:tw-flex">
        <div class="tw-flex tw-justify-center tw-gap-2">
          <template v-if="time.days > 0">
            <div class="tw-grid tw-justify-items-center tw-px-2">
              <span class="tw-text-h6 tw-text-primary"> {{ time.days }} </span>
              <span class="tw-text-text02">
                {{
                  time.days % 10 >= 5
                    ? 'дней'
                    : time.days % 10 < 5 && time.days % 10 >= 2
                    ? 'дня'
                    : 'день'
                }}
              </span>
            </div>
            <div class="tw-text-text02">:</div>
          </template>
          <template v-if="time.hours > 0">
            <div class="tw-grid tw-justify-items-center tw-px-2">
              <span class="tw-text-h6 tw-text-primary"> {{ time.hours }} </span>
              <span class="tw-text-text02">
                {{
                  time.hours % 10 >= 5
                    ? 'часов'
                    : time.hours % 10 < 5 && time.hours % 10 >= 2
                    ? 'часа'
                    : 'час'
                }}
              </span>
            </div>
            <div class="tw-text-text02">:</div>
          </template>
          <div class="tw-grid tw-justify-items-center tw-px-2">
            <span class="tw-text-h6 tw-text-primary"> {{ time.minutes }} </span>
            <span class="tw-text-text02"> мин </span>
          </div>
          <div class="tw-text-text02">:</div>
          <div class="tw-grid tw-justify-items-center tw-px-2">
            <span class="tw-text-h6 tw-text-primary"> {{ time.seconds }} </span>
            <span class="tw-text-text02"> сек </span>
          </div>
        </div>
        <BaseButton @click="headerStore.toggleForm">Оставить заявку</BaseButton>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Banner } from './types';
import { usePublicHeader } from '@/other-modules/public-header/store';

const headerStore = usePublicHeader();

const props = defineProps<{
  townId: number,
}>();

const res = await useAppFetch<{ data: Banner | null }>(`lobby/estate/towns/${props.townId}/bait`);
const banner = useDataOrFail(res);

const time = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

function getTimeRemaining(endsAt: string) {
  const t = Date.parse(endsAt) - Date.now();
  const seconds = Math.floor((t / 1000) % 60)
  const minutes = Math.floor((t / 1000 / 60) % 60)
  const hours = Math.floor((t / 1000 / 60 / 60) % 24)
  const days = Math.floor(t / 1000 / 60 / 60 / 24)
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

let timeinterval: any;

function updateClock(endsAt: string) {
  const t = getTimeRemaining(endsAt)
  time.value.days = t.days
  time.value.hours = t.hours
  time.value.minutes = t.minutes
  time.value.seconds = t.seconds

  if (t.total <= 0) {
    clearInterval(timeinterval)
  }
}

const canShow = computed(() => {
  if(!banner.value.data) return false;
  return Date.parse(banner.value.data.starts_at) <= Date.now();
});

onMounted(() => {
  if(banner.value.data) {
    updateClock(banner.value.data.ends_at);
    setInterval(updateClock.bind(null, banner.value.data!.ends_at), 1000);
  }
});
</script>
<style lang="scss" scoped>
.action-banner {
  padding-right: 40px;
  align-items: center;
  @apply tw-relative tw-overflow-hidden;

  @include lg {
    padding-right: 24px;
  }

  @include md {
    padding-right: 0px;
  }

  &__icon {
    @apply tw-absolute tw-w-[824.62px] tw-h-[819.13px] tw-top-[-226px] tw-left-[-125px];
    @apply lg:tw-w-[1602.15px] lg:tw-h-[1587.59px] lg:tw-top-[-684.46px] lg:tw-left-[-254.35px];
    @apply 2xl:tw-w-[1596.79px] 2xl:tw-h-[1586.16px] 2xl:tw-top-[-683.02px] 2xl:tw-left-[-153px];
  }

  &__content {
    position: relative;
    z-index: 10;
    padding: 24px 0;

    @include lg {
      padding-left: 24px;
    }

    @include md {
      padding: 16px;
      padding-bottom: 0;
    }
  }

  &__img {
    flex-shrink: 0;
    position: relative;
    z-index: 10;

    @include lg {
      display: none;
    }

    img {
      width: 280px;
      object-fit: contain;
    }
  }

  &__timer {
    margin: 24px 0px;

    @include md {
      margin: 16px;
      margin-top: 0px;
    }
  }

  &--center &__content {
    order: -1;
    padding-left: 40px;
  }

  &__divider {
    display: none;
    position: relative;
    z-index: 10;
    height: 1px;
    margin: 0 16px;
    @apply tw-bg-white;

    @include md {
      display: block;
    }
  }
}
</style>
