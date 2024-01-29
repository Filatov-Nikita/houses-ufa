<template>
  <Teleport to="body">
    <transition
      leave-active-class="animate__animated anim-300ms animate__fadeOut"
      enter-active-class="animate__animated anim-300ms animate__fadeIn"
    >
      <div v-show="showed" class="header-nav nav-menu">
        <div class="wrapper">
          <div class="nav-menu__inner">
            <NavItemsMobile class="nav-menu__items-mobile" :items="navMenu" />
            <NavItems class="nav-menu__items" :items="navMenu" />
            <div class="nav-menu__items">
              <div class="nav-menu__link-item">
                <NuxtLink class="extra-link" to="/tenders" target="_blank">
                  <span class="extra-link__label">Тендеры</span>
                  <BaseIcon class="extra-link__icon" color="tw-fill-primary" name="link-external" />
                </NuxtLink>
              </div>
              <div class="nav-menu__link-item">
                <NuxtLink class="extra-link" to="/search-areas" target="_blank">
                  <span class="extra-link__label">Поиск земельных участков</span>
                  <BaseIcon class="extra-link__icon" color="tw-fill-primary" name="link-external" />
                </NuxtLink>
              </div>
            </div>
            <div class="nav-menu__banner">
              <ClientOnly>
                <Banner />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { useMenuStore } from '@/stores/menu';
  import { useScrollToggle } from '@/composables/useScrollToggle';
  import Banner from './Banner.vue';
  import NavItems from './NavItems.vue';
  import NavItemsMobile from './NavItemsMobile.vue';

  interface Props {
    showed?: boolean,
    headerSelector?: string,
  }

  const menuStore = useMenuStore();

  const navMenu = computed(() => {
    return menuStore.navMenu;
  });

  const props = withDefaults(defineProps<Props>(), {
    showed: false,
    headerSelector: '.header',
  });

  useScrollToggle(toRef(props, 'showed'));

  watch(() => props.showed, (val) => {
    if(val) {
      window.scrollTo({ top: 0 });
    }
  });
</script>
<style lang="scss">
  .header-nav {
    .nav-menu {
      &__items {
        @include md {
          display: none;
        }
      }
    }
  }
</style>

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
      column-gap: 20px;
      row-gap: 64px;

      @include lg {
        grid-template-columns: repeat(3, 1fr);
        padding: 40px 40px;
      }

      @include md {
        padding: 24px 16px;
        grid-template-columns: 100%;
        row-gap: 20px;
      }
    }

    &__items-mobile {
      display: none;

      @include md {
        display: block;
      }
    }

    &__banner {
      grid-column: 3 / span 2;

      @include lg {
        margin-top: auto;
        grid-column: 1 / span 2;
      }

      @include md {
        grid-column: 1;
      }
    }

    &__link-item {
      & + & {
        margin-top: 32px;
      }
    }
  }

  .extra-link {
    display: inline-flex;
    align-items: flex-start;
    gap: 8px;

    &__icon {
      width: 16px;
      height: 16px;
    }

    &__label {
      @apply tw-text-text00 tw-text-xl;
    }

    & + & {
      margin-top: 32px;
    }
  }
</style>
