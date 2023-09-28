<template>
  <NuxtLink :to="to" class="card">
    <div>
      <div class="date tw-mb-4">{{ date }}</div>
      <h4 class="tw-text-h6 lg:tw-text-h5 tw-line-clamp-3">
        {{ title }}
      </h4>
    </div>
    <div class="tw-flex tw-justify-between tw-items-center">
      <div  class="tw-text-text02 hover:tw-text-primary link">Подробнее</div>
      <BaseButton padding-classes="tw-p-2" theme="transparent" @click.self="1">
        <div class="tw-flex tw-items-center tw-gap-4">
          <div class="tw-text-base tw-text-text00 tw-leading-none tw-mt-[3px]">1</div>
          <BaseIcon
            v-if="is_favorite"
            name="heart_bg"
            class="tw-text-primary tw-w-6 tw-h-6"
          />
          <BaseIcon v-else name="heart" class="tw-w-6 tw-h-6" />
        </div>
      </BaseButton>
    </div>
  </NuxtLink>
</template>
<script lang="ts" setup>
interface Props {
  to: string
  title: string
  is_favorite: boolean
  date: string
}
const newsProps = defineProps<Props>()
</script>
<style lang="scss" scoped>
.card {
  @apply tw-rounded-3xl tw-py-12 tw-px-10 tw-bg-white tw-grid tw-gap-16;
  .date {
    @apply tw-text-text02;
  }
  @media (hover: hover) {
    &:hover {
      @apply tw-bg-secondary-hover;
      .link {
        @apply tw-text-primary;
      }
    }
    .heart-btn:hover {
      @apply tw-bg-secondary;
      & > svg > path {
        @apply tw-fill-primary tw-stroke-none;
      }
    }
    svg.active > path {
      @apply tw-fill-primary tw-stroke-none;
    }
  }
}
</style>
