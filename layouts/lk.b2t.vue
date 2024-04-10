<template>
  <div class="wrapper tw-py-4">
    <PublicHeader />
  </div>
  <div class="section">
    <div class="wrapper">
      <div class="layout">
        <AsideLeft class="layout__aside" />
        <main class="layout__content">
         <slot />
       </main>
      </div>
    </div>
  </div>
  <div>
    <div class="wrapper">
      <PublicFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
  import PublicHeader from '@/other-modules/public-header/index.vue';
  import PublicFooter from '@/other-modules/public-footer/index.vue';
  import AsideLeft from '@/lk-modules/b2t/aside/index.vue';
  import '@/assets/css/lk/main.scss';
</script>

<style scoped lang="scss">
  .layout {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: -10px;

    @include md {
      margin: -20px -10px;
    }

    &__aside {
      margin: 10px;
      width: calc(100% / 12 * 2 - 20px);

      @include lg {
        width: calc(100% / 12 * 3 - 20px);
      }

      @include md {
        margin: 20px 10px;
        width: calc(100% - 20px);
      }
    }

    &__content {
      margin: 10px;
      width: calc(100% / 12 * 10 - 20px);

      @include lg {
        width: calc(100% / 12 * 9 - 20px);
      }

      @include md {
        margin: 20px 10px;
        width: calc(100% - 20px);
      }
    }
  }
</style>
