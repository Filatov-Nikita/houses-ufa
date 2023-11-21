<template>
  <Teleport to="body">
    <transition
      leave-active-class="animate__animated anim-300ms animate__fadeOut"
      enter-active-class="animate__animated anim-300ms animate__fadeIn"
    >
      <div v-show="showed" class="nav-menu">
        <div class="wrapper">
          <div class="nav-menu__inner">
            <NavItemsMobile class="nav-menu__items-mobile" :items="navMenu" />
            <NavItems class="nav-menu__items" :items="navMenu" />
            <div v-if="banner" class="nav-menu__banner">
              <Banner :banner="banner" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { useMenuStore } from '@/stores/menu';
  import { useBannerStore } from '@/stores/banner';
  import { useScrollToggle } from '@/composables/useScrollToggle';
  import Banner from './Banner.vue';
  import NavItems from './NavItems.vue';
  import NavItemsMobile from './NavItemsMobile.vue';

  interface Props {
    showed?: boolean,
    headerSelector?: string,
  }

  const menuStore = useMenuStore();
  const bannerStore = useBannerStore();

  const navMenu = computed(() => {
    return menuStore.navMenu;
  });

  const props = withDefaults(defineProps<Props>(), {
    showed: false,
    headerSelector: '.header',
  });

  useScrollToggle(toRef(props, 'showed'));

  const banner = computed(() => {
    return bannerStore.banner;
  });

  watch(() => props.showed, (val) => {
    if(val) {
      window.scrollTo({ top: 0 });
    }
  });
</script>

<style scoped lang="scss">
  .nav-menu {
    position: fixed;
    z-index: 9000;
    top: 112px;
    @apply tw-inset-x-0;

    &__inner {
      height: calc(100vh - 112px);
      overflow-x: hidden;
      background: white;
      border-radius: 16px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      padding: 64px 40px;

      @include lg {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 64px;
        padding: 40px 40px;
      }

      @include md {
        padding: 24px 16px;
        grid-template-columns: 100%;
        row-gap: 20px;
      }
    }

    &__items {
      @include md {
        display: none;
      }
    }

    &__items-mobile {
      display: none;

      @include md {
        display: block;
      }
    }

    &__banner {
      grid-column: span 2;

      @include lg {
        margin-top: auto;
        grid-column: 1 / span 3;
      }

      @include md {
        grid-column: 1;
      }
    }
  }
</style>
