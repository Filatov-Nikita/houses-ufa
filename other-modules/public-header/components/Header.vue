<template>
  <header class="public-header">
    <div class="public-header__logo-menu">
      <button class="action-btn" @click="store.toggleNav">
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
        <a class="public-header__phone" :href="contacts.headPhoneCleaned">
          {{ contacts.contacts.headPhone }}
        </a>
        <button class="public-header__callback" @click="store.toggleForm">
          Заказать звонок
        </button>
      </div>
      <div class="public-header__btns">
        <NuxtLink class="action-btn" to="/favorites">
          <BaseIcon class="action-btn__icon" name="heart" />
        </NuxtLink>
        <NuxtLink class="action-btn" to="/favorites">
          <BaseIcon class="action-btn__icon" name="profile" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { usePublicHeader } from '../store';
  import { useMenuStore } from '@/stores/menu';
  import { useContactsStore } from '@/stores/contacts';

  const store = usePublicHeader();
  const contacts = useContactsStore();
  const menu = useMenuStore();

  const menuIcon = computed(() => store.showedNav ? 'close' : 'burger');
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
    }

    &__logo-menu {
      display: flex;
      align-items: center;
      gap: 24px;

      @include md {
        width: 100%;
        justify-content: space-between;
        flex-direction: row-reverse;
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

      @include md {
        display: none;
      }
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
  }

  .action-btn {
    width: 48px;
    height: 48px;
    padding: 8px;
    border-radius: 8px;
    user-select: none;
    @apply tw-bg-base00 tw-text-text00;

    &:hover {
      @apply tw-bg-base01;
    }

    &__icon {
      width: 32px;
      height: 32px;
    }
  }
</style>
