<template>
  <div class="flat-card">
    <Header class="flat-card__header" />
    <div class="flat-card__grid">
      <div class="flat-card__left">
        <Image />
      </div>
      <div class="flat-card__right">
        <ParamsInfo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from './componenets/Header.vue';
  import ParamsInfo from './componenets/ParamsInfo.vue';
  import Image from './componenets/Image.vue';
  import { useFlatCard } from './store';

  const route = useRoute();
  const flatCard = useFlatCard();

  flatCard.setFlatId(+route.params.id);

  await useLazyAsyncData(() => flatCard.show());
</script>

<style scoped lang="scss">
  .flat-card {
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
