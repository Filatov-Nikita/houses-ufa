<template>
  <div class="town-card">
    <Header class="town-card__header" />
    <div class="town-card__grid">
      <div class="town-card__left">
        <Image />
      </div>
      <div class="town-card__right">
        <ParamsInfo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from './components/Header.vue';
  import ParamsInfo from './components/ParamsInfo.vue';
  import Image from './components/Image.vue';
  import { useTownCard } from './store';

  const route = useRoute();
  const townCard = useTownCard();

  townCard.setTownId(+route.params.id);

  await useLazyAsyncData(() => townCard.show());
</script>

<style scoped lang="scss">
  .town-card {
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }

    &__header {
      margin-bottom: 24px;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__left {
      width: calc(100% / 12 * 7 - 20px);
      margin: 10px;

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__right {
      width: calc(100% / 12 * 5 - 20px);
      margin: 10px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
