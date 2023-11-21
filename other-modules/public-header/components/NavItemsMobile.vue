<template>
  <div class="nav-items-mobile">
    <BaseDropdown
      class="nav-items-mobile__dropdown"
      titleClass="nav-items-mobile__title"
      bodyClass="nav-items-mobile__body"
      v-for="section in items"
      :key="section.label"
    >
      <template #title>
        {{ section.label }}
      </template>
      <template #body>
        <div class="nav-items-mobile__links">
          <NuxtLink
            v-for="item in section.links"
            :to="item.to"
            class="nav-items-mobile__link"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </template>
    </BaseDropdown>
    <div key="spec" class="nav-items-mobile__dropdown nav-items-mobile__title">
      <NuxtLink
        to="/main-filter?is_in_promotion_only=1&filterType=flats"
        class="nav-items-mobile__link nav-items-mobile__link--red"
      >
        Спецпредложения
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Section } from '@/stores/menu/types';

  defineProps<{
    items: Record<string, Section>,
  }>();
</script>

<style lang="scss">
  .nav-items-mobile {
    &__title {
      padding: 16px 0;
      @apply tw-text-text00 tw-text-base;
    }
  }
</style>

<style scoped lang="scss">
  .nav-items-mobile {
    &__links {
      padding: 20px 0;
    }

    &__link {
      @apply tw-text-text02 tw-text-base tw-block;

      &--red {
        @apply tw-text-error;
      }

      & + & {
        margin-top: 24px;
      }
    }

    &__dropdown {
      & + & {
        margin-top: 8px;
      }
    }
  }
</style>
