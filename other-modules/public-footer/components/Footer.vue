<template>
  <footer class="public-footer">
    <EmailSubscribe class="public-footer__subscribe" />
    <div class="public-footer__grid">
      <NavItemsMobile class="public-footer__items-mobile" :items="navMenu" />
      <Sidebar class="public-footer__sidebar" />
      <NavItems class="public-footer__items" :items="navMenu" />
    </div>
    <div class="public-footer__bottom">
      <p>©️ {{ currentYear }} Жилой Квартал | Все права защищены</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import EmailSubscribe from '@/other-modules/email-subscribe/index.vue';
  import NavItems from './NavItems.vue';
  import Sidebar from './Sidebar.vue';
  import NavItemsMobile from './NavItemsMobile.vue';
  import { useMenuStore } from '@/stores/menu';

  const menuStore = useMenuStore();

  const navMenu = computed(() => {
    return menuStore.navMenu;
  });

  const currentYear = (new Date()).getFullYear();
</script>

<style scoped lang="scss">
  .public-footer {
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include md {
      padding: 24px 16px;
    }

    &__subscribe {
      margin-bottom: 80px;

      @include lg {
        margin-bottom: 64px;
      }

      @include md {
        margin-bottom: 48px;
      }
    }

    &__bottom {
      margin-top: 80px;
      @apply tw-text-text02 tw-text-base;

      @include lg {
        margin-top: 64px;
      }

      @include md {
        margin-top: 48px;
      }
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      column-gap: 89px;

      @include lg {
        row-gap: 64px;
        column-gap: 0px;
      }

      @include md {
        row-gap: 48px;
      }
    }

    &__sidebar {
      width: 17.5%;

      @include lg {
        width: 100%;
      }
    }

    &__items {
      width: calc(82.5% - 89px);

      @include lg {
        width: 100%;
        order: -1;
      }

      @include md {
        display: none;
      }
    }

    &__items-mobile {
      display: none;

      @include md {
        display: block;
        width: 100%;
      }
    }
  }
</style>
