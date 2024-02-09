<template>
  <header class="public-header">
    <div class="public-header__logo-menu">
      <button class="action-btn public-header__burger" @click="store.toggleNav">
        <BaseIcon class="action-btn__icon" :name="menuIcon" />
      </button>
      <NuxtLink class="public-header__logo" to="/">
        <img width="115" height="44" src="@/assets/images/logo.svg" alt="Жилой квартал">
      </NuxtLink>
    </div>
    <nav class="public-header__nav">
      <NuxtLink
        class="public-header__nav-item"
        :class="{ 'public-header__nav-item--red': menu.isSpec(item) }"
        v-for="item in menu.topMenu"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
    <div class="public-header__actions">
      <div class="public-header__phone-wrap">
        <a class="public-header__phone" :href="'tel:' + contacts.headPhoneCleaned">
          {{ contacts.contacts.headPhone }}
        </a>
        <button class="public-header__callback" @click="store.toggleForm">
          Заказать звонок
        </button>
      </div>
      <div class="public-header__btns">
        <NuxtLink class="action-btn" to="/favorites">
          <ClientOnly>
            <span v-if="!auth.isAuth && favStorageCount > 0" class="counter action-btn__count">
              {{ favStorageCount }}
            </span>
            <span v-else-if="auth.isAuth && estateCounter.total > 0" class="counter action-btn__count">
              {{ estateCounter.total }}
            </span>
          </ClientOnly>
          <BaseIcon class="action-btn__icon" name="heart" />
        </NuxtLink>
        <button class="action-btn" @click.prevent="tryShowLk">
          <BaseIcon class="action-btn__icon" name="profile" />
        </button>
        <button class="action-btn public-header__burger-mobile" @click="store.toggleNav">
          <BaseIcon class="action-btn__icon" :name="menuIcon" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { usePublicHeader } from '../store';
  import { useMenuStore } from '@/stores/menu';
  import { useContactsStore } from '@/stores/contacts';
  import { useAuthStore } from '@/stores/auth';
  import { useFavCounter } from '../composables/useFavCounter';
  import { useRouter } from 'vue-router';

  const store = usePublicHeader();
  const contacts = useContactsStore();
  const menu = useMenuStore();
  const auth = useAuthStore();
  const router = useRouter();
  const { estateCounter, favStorageCount } = useFavCounter();

  const menuIcon = computed(() => store.showedNav ? 'close' : 'burger');

  function tryShowLk() {
    if(auth.userType !== null) {
      router.push(`/lk/${auth.userType}`)
    } else {
      auth.openPopup = true;
    }
  }
</script>

<style scoped lang="scss">
  .public-header {
    border-radius: 16px;
    box-shadow: 0px 150px 150px 0px rgba(0, 0, 0, 0.09), 0px 337px 202px 0px rgba(0, 0, 0, 0.05), 0px 598px 239px 0px rgba(0, 0, 0, 0.01), 0px 935px 262px 0px rgba(0, 0, 0, 0.00);
    padding: 16px 24px;
    display: flex;
    align-items: center;
    gap: 40px;
    @apply tw-bg-white;

    @include sm {
      padding: 16px 16px;
      gap: 16px;
    }

    &__logo-menu {
      display: flex;
      align-items: center;
      gap: 24px;

      @include md {
        width: 100%;
      }
    }

    &__logo {
      img {
        width: 115px;
        height: auto;
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    &__phone {
      display: block;
      margin-bottom: 4px;
      @apply tw-text-base tw-text-text00;

      &:hover {
        opacity: 0.7;
      }
    }

    &__callback {
      display: block;
      @apply tw-text-sm tw-text-primary;

      &:hover {
        @apply tw-text-primary-hover;
      }
    }

    &__btns {
      display: flex;
      align-items: center;
      gap: 12px;

      @include md {
        gap: 8px;
      }
    }

    &__nav {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-left: auto;

      @include lg {
        margin-left: 0;
        flex-grow: 1;
      }

      @include md {
        display: none;
      }
    }

    &__nav-item {
      padding: 8px 0;
      @apply tw-text-base tw-text-text00;

      &:hover {
        opacity: 0.7;
      }

      @include lg {
        display: none;
      }

      &--red {
        @apply tw-text-error;

        @include lg {
          display: block;
        }
      }
    }

    &__phone-wrap {
      @include md {
        display: none;
      }
    }

    &__burger {
      @include md {
        display: none;
      }
    }

    &__burger-mobile {
      display: none;

      @include md {
        display: block;
      }
    }
  }

  .action-btn {
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 8px;
    user-select: none;
    position: relative;
    @apply tw-bg-base00 tw-text-text00;

    &:hover {
      @apply tw-bg-base01;
    }

    &__icon {
      width: 32px;
      height: 32px;
    }

    &__count {
      position: absolute;
      z-index: 10;
      right: -5px;
      top: -5px;
    }
  }

  .counter {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    @apply tw-bg-error tw-text-white;
  }
</style>
