<template>
  <section class="section">
    <div class="wrapper tw-h-full">
      <BaseWait :waiting="loading">
        <template #loader>
          <BaseSkeleton class="tw-w-full tw-h-[320px] tw-rounded-2xl" />
        </template>
        <div class="article-header">
          <BaseBreadcrumbs
            class="article-header__bread"
          />

          <div class="article-header__toolbar">
            <h1 class="section__title">{{ title ?? '-' }}</h1>
            <BaseButton theme="gray" padding-classes="tw-py-2 tw-px-4" class="favBlock">
              <div class="favBlock__wrap">
                <div class="favBlock__cnt">{{ likes }}</div>
                <div class="favBlock__icon">
                  <BaseIcon class="favBlock__svg" color="tw-fill-text00" name="heart" />
                </div>
              </div>
            </BaseButton>
          </div>

          <div class="article-header__actions">
            <div v-if="date" class="article-header__date">{{ $formatDate(date) }}</div>

            <button class="shareBtn">
              <div class="shareBtn__icon">
                <BaseIcon name="share" color="tw-fill-primary" class="shareBtn__svg" />
              </div>
              <span>Поделиться</span>
            </button>
          </div>
        </div>
      </BaseWait>

    </div>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    title: string | null,
    date: string | null,
    likes: number | null,
    loading: boolean
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .article-header {
    @apply tw-bg-white tw-px-4 tw-py-6 xl:tw-px-10 xl:tw-py-16 tw-rounded-2xl;

    &__bread {
      @apply tw-mb-6 lg:tw-mb-4 tw-text-text02;
    }

    &__toolbar {
      @apply tw-grid tw-gap-4 lg:tw-flex tw-justify-between tw-items-center tw-mb-6 lg:tw-mb-10
    }

    &__actions {
      @apply tw-flex tw-justify-between tw-items-center;
    }

    &__date {
      @apply tw-text-text02 lg:tw-text-body_l
    }
  }

  .shareBtn {
    @apply tw-flex tw-items-center tw-gap-4 tw-text-black;

    &__icon {
      @apply tw-p-2 tw-rounded-lg tw-bg-[#F4F4F4]
    }

    &__svg {
      @apply tw-w-4 tw-h-4;
    }
  }

  .favBlock {
    @apply tw-w-fit;

    &__cnt {

    }

    &__wrap {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &__icon {
      @apply tw-text-text02 tw-text-body_m tw-flex tw-gap-2 tw-items-center;
    }

    &__svg {
      @apply tw-w-6 tw-h-6;
    }
  }
</style>
