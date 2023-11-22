<template>
  <section class="section-news">
    <div class="wrapper">
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
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center
    }

    &__link {
      display: flex;
      gap: 8px;
      align-items: center;
      @apply tw-text-primary;

      &--mob {
        display: none;

        @include sm {
          margin-top: 32px;
          display: flex;
          justify-content: space-between;
        }
      }

      &--desktop {
        &:hover {
          opacity: 0.7;
        }

        @include sm {
          display: none;
        }
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
