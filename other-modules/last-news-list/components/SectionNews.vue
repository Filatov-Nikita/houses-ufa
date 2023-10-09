<template>
  <section class="section-news">
    <div class="tw-container">
      <div class="section__top section-news__toolbar">
        <h2 class="section__title">Новости</h2>
        <NuxtLink class="section-news__link section-news__link--desktop" to="/articles">
          <span>Все новости</span>
          <BaseIcon name="forward-line" color="tw-fill-primary" class="section-news__icon" />
        </NuxtLink>
      </div>
      <LastNews />
      <NuxtLink to="/articles" class="section-news__link section-news__link--mob">
        <span>Все новости</span>
        <BaseIcon name="forward-line" color="tw-fill-primary" class="section-news__icon"/>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
  import LastNews from './LastNews.vue';
</script>

<style scoped lang="scss">
  .section-news {
    &__toolbar {
      @apply tw-flex tw-justify-between tw-items-center;
    }

    &__link {
      @apply tw-gap-2 tw-text-primary;

      &--mob {
        @apply tw-mt-4 tw-flex lg:tw-hidden tw-justify-between tw-items-center;
      }

      &--desktop {
        @apply tw-hidden lg:tw-flex tw-items-center;
      }
    }

    &__icon {
      @apply tw-w-6 tw-h-6;
    }
  }
</style>
