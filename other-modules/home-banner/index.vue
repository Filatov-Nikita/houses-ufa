<template>
  <div class="home-banner">
    <h1 class="home-banner__h1">Квартиры, коттеджи и&nbsp;таунхаусы от&nbsp;ГК&nbsp;«Жилой Квартал»</h1>
    <BaseButton to="/complexes" target="_blank" theme="white">Подробнее</BaseButton>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .home-banner {
    padding: 40px;
    border-radius: 16px;
    background-image: url('./images/decor.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top 6px right 7px;
    @apply tw-bg-primary tw-text-white;

    @include lg {
      background-position: top 18px right 0px;
    }

    @include md {
      background-size: 320px;
      background-position: bottom 0px right 10px;
    }

    @include sm {
      padding: 24px 16px;
      background-size: 208px;
      background-position: bottom 0px right -40px;
    }

    &__h1 {
      font-size: 32px;
      font-weight: 700;
      line-height: 1.375;
      margin-bottom: 24px;

      @include lg {
        max-width: 500px;
        font-size: 24px;
      }

      @include md {
        max-width: 480px;
        margin-bottom: 40px;
      }
    }
  }
</style>
