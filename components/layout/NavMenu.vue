<template>
  <Teleport to="body">
    <transition
      leave-active-class="animate__animated anim-300ms animate__fadeOut"
      enter-active-class="animate__animated anim-300ms animate__fadeIn"
    >
    <div v-show="showed" class="nav-menu">
        <div class="tw-container">
          <div class="nav-menu__inner">

            <div class="lg:tw-hidden tw-space-y-2 tw-mb-3">
              <AccordionMain
                header-class="tw-py-3"
                v-for="section in items"
              >
                <template #title>
                  <h3 class="tw-text-base tw-text-text00">
                    {{ section.label }}
                  </h3>
                </template>
                <template #content>
                  <div class="tw-space-y-6 tw-py-5">
                    <NuxtLink
                    v-for="item in section.items"
                    :to="item.to"
                    class="tw-w-full tw-block tw-text-base tw-text-text02"
                    >
                      {{ item.label }}
                    </NuxtLink>
                  </div>
                </template>
              </AccordionMain>
            </div>

            <div class="nav-menu__section tw-hidden lg:tw-block" v-for="section in items">
              <div class="nav-menu__section-name">{{ section.label }}</div>
              <div class="nav-menu__items">
                <div class="nav-menu__item" v-for="item in section.items">
                  <NuxtLink :to="item.to" @click="reload(item.to)">{{ item.label }}</NuxtLink>
                </div>
              </div>
            </div>

            <div v-if="banner" class="nav-menu__banner">
              <div class="bannerBlock">
                <img class="bannerBlock__img" :src="banner.imgSrc" alt="фото банера">
                <div class="bannerBlock__wrap">
                  <div class="bannerBlock__text">
                    <p class="bannerBlock__title">
                      {{ banner.title }}
                    </p>
                    <p class="bannerBlock__subtitle">
                      {{ banner.subtitle }}
                    </p>
                  </div>
                  <div class="bannerBlock__action">
                    <BaseButton class="bannerBlock__link" :to="banner.readMoreHref" theme="white">
                      <span class="tw-text-primary">Подробнее</span>
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/stores/app';
  import { useScrollToggle } from '@/composables/useScrollToggle';
  import { storeToRefs } from 'pinia'
  interface Props {
    showed?: boolean,
    headerSelector?: string,
  }

  const appStore = useAppStore();

  const navLinks = computed(() => {
    return appStore.navSectionLinks;
  });

  const props = withDefaults(defineProps<Props>(), {
    showed: false,
    headerSelector: '.header',
  });

  useScrollToggle(toRef(props, 'showed'));

  const banner = computed(() => {
    return appStore.banner;
  });

  function reload(str: string) {
    if(str.indexOf('complexes') !== -1) {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  }

  const order = [
    'static',
    'buyers',
    'flats',
    // 'houses',
    'about',
    'pressCenter',
    'contacts'
  ] as const;

  const items = computed(() => {
    return order.map(name => {
      return navLinks.value[name];
    });
  });

  watch(() => props.showed, (val) => {
    if(val) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      padding: 24px 16px;
      height: calc(100vh - 112px);
      overflow-x: hidden;
      background: white;
      border-radius: 16px;
      display: grid;
      grid-template-columns: 100%;

      @screen lg {
        grid-template-columns: repeat(3, 1fr);
        column-gap: 20px;
        row-gap: 64px;
        padding: 40px 40px;
      }

      @screen xl {
        grid-template-columns: repeat(4, 1fr);
        padding: 64px 40px;
      }
    }

    &__section-name {
      @apply tw-text-2xl tw-text-text00 tw-mb-8;
    }

    &__item {
      @apply tw-text-base tw-text-text01;

      & + & {
        margin-top: 24px;
      }
    }

    &__banner {
      grid-column: 1 / span 3;

      @screen xl {
        grid-column: span 2;
      }
    }
  }

  .bannerBlock {
    position: relative;
    z-index: 1;
    padding: 24px;
    border-radius: 16px;
    @apply tw-text-white;

    @screen lg {
      padding: 40px;
    }

    @screen xl {
      padding: 24px;
    }

    &__title {
      @apply tw-text-2xl lg:tw-text-h5 tw-mb-4;

    }



    &__img {
      border-radius: 16px;
      position: absolute;
      object-fit: cover;
      z-index: -1;
      @apply tw-w-full tw-h-full tw-left-0 tw-top-0;
    }

    &__wrap {
      @screen lg {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 16px;
      }
    }

    &__text {
      @screen lg {
        flex-grow: 1;
      }
    }

    &__action {
      margin-top: 40px;
      @screen lg {
        margin-top: 0px;
        flex-grow: 0;
      }

      @screen xl {
        margin-top: 56px;
        width: 100%;
      }
    }

    &__link {
      @apply tw-w-full;
      @screen lg {
        width: auto;
      }
    }
  }
</style>
