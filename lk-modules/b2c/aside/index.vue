<template>
  <aside class="aside-left">
    <Nav />
    <div class="aside-left__bottom">
      <button class="logout" @click="authStore.logout">
        <BaseIcon class="logout__icon" name="logout" />
        <span class="logout__label">Выйти</span>
      </button>
      <div class="aside-left__logo">
        <svg class="aside-left__icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.447266 26.6675L7.85662 16.0007L0.447266 5.33398H5.84264L13.2521 16.0007L5.84264 26.6675H0.447266Z" fill="#D0D0D0"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3315 0H13.936V32H19.3315V0ZM20.0151 16L21.257 14.212L23.4299 11.0839L24.9319 8.9216L25.6028 7.95578L27.1048 5.79353L27.4244 5.33327H32.8198L27.834 12.511L25.6611 15.6391L25.4104 16L32.8198 26.6668H27.4244L26.4631 25.2828L24.2903 22.1548L22.1174 19.0267L20.0151 16Z" fill="#D0D0D0"/>
        </svg>
        <p class="aside-left__text">Все права защищены ©️{{ year }} Жилой Квартал</p>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
  import Nav from './components/Nav.vue';
  import { useAuthStore } from '@/stores/auth';

  const year = (new Date()).getFullYear();
  const authStore = useAuthStore();
</script>

<style scoped lang="scss">
  .aside-left {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;

    @include sm {
      min-height: auto;
    }

    &__text {
      @apply tw-text-text02 tw-text-xs;
    }

    &__logo {
      margin-top: 24px;
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 0 16px;

      @include sm {
        max-width: 220px;
      }
    }

    &__icon {
      width: 32px;
      height: 32px;
      flex-shrink: 0;
    }
  }

  .logout {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;
    padding: 8px 16px;
    border-radius: 8px;
    @apply tw-text-error;

    &:hover {
      @apply tw-bg-white;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }

    &__label {
      @apply tw-text-sm;
    }
  }
</style>
