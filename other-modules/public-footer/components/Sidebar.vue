<template>
  <div class="footer-sidebar">
    <div class="footer-sidebar__logo">
      <NuxtLink class="footer-sidebar__home" to="/">
        <img width="115" height="44" src="@/assets/images/logo.svg" alt="Жилой квартал">
      </NuxtLink>
    </div>
    <div class="footer-sidebar__data">
      <div class="footer-sidebar__office">
        <p class="footer-sidebar__address">{{ contacts.address.text }}</p>
        <p class="footer-sidebar__office-label">{{ contacts.address.label }}</p>
      </div>
      <div class="footer-sidebar__call">
        <a class="footer-sidebar__phone" :href="'tel:' + contactsStore.phoneCleaned">
          {{ contacts.phone }}
        </a>
        <button class="footer-sidebar__callback" @click="store.toggleForm">
          Заказать звонок
        </button>
      </div>
    </div>
    <div class="footer-sidebar__text">
      <p v-html="caption"></p>
    </div>
    <div class="soc-block">
      <a
        v-for="(value, key) in contactsStore.social"
        class="soc-block__item"
        :href="value"
        target="_blank"
      >
        <BaseIcon class="soc-block__icon" :name="`soc-${key}`" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useContactsStore } from '@/stores/contacts';
  import { usePublicFooter } from '../store';

  const store = usePublicFooter();

  const contactsStore = useContactsStore();

  const contacts = computed(() => contactsStore.contacts);

  const caption = `
    Отправляя любую форму на&nbsp;сайте, вы&nbsp;соглашаетесь с&nbsp;<a class="tw-text-primary hover:tw-text-primary-hover" href="/docs/sogl.pdf" target="_blank">политикой конфиденциальности</a> данного сайта
  `;
</script>

<style scoped lang="scss">
  .footer-sidebar {
    display: flex;
    flex-direction: column;
    row-gap: 48px;

    @include lg {
      row-gap: 32px;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      column-gap: 24px;
    }

    @include md {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 24px;
    }

    &__data {
      @include lg {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 42px;
      }

      @include md {
        display: block;
      }
    }

    &__logo {
      padding-bottom: 16px;

      @include lg {
        padding-bottom: 0px;
        width: 220px;
      }

      @include md {
        width: 100%;
        padding-bottom: 24px;
      }
    }

    &__home {
      display: inline-block;
    }

    &__address {
      @apply tw-text-text00 tw-text-xl;
    }

    &__office-label {
      margin-top: 8px;
      @apply tw-text-base tw-text-text02;
    }

    &__call {
      margin-top: 40px;

      @include lg {
        margin-top: 0px;
      }

      @include md {
        margin-top: 24px;
      }
    }

    &__phone {
      @apply tw-text-text00 tw-text-xl;

      &:hover {
        opacity: 0.7;
      }
    }

    &__callback {
      margin-top: 8px;
      display: block;
      @apply tw-text-primary tw-text-base;

      &:hover {
        @apply tw-text-primary-hover;
      }
    }

    &__text {
      @apply tw-text-xs tw-text-text02;

      @include lg {
        width: 184px;
        margin-left: auto;
      }

      @include md {
        margin-left: 0px;
        padding-bottom: 24px;
        width: 100%;
        max-width: 311px;
      }
    }
  }

  .soc-block {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;

    @include lg {
      width: 100%;
    }

    &__item {
      width: 40px;
      height: 40px;
      padding: 8px;
      @apply tw-text-text00;

      &:hover {
        opacity: 0.6;
      }
    }

    &__icon {
      width: 24px;
      height: 24px;
    }
  }
</style>
