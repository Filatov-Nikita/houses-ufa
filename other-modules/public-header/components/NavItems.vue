<template>
  <div class="nav-items" v-bind="$attrs" v-for="section in items">
    <div class="nav-items__section-name">{{ section.label }}</div>
    <div class="nav-items__items">
      <div class="nav-items__item" v-for="item in section.links">
        <NuxtLink class="nav-items__link" :to="item.to">{{ item.label }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Section } from '@/stores/menu/types';

  defineProps<{
    items: Record<string, Section>,
  }>();
</script>

<style scoped lang="scss">
  .nav-items {
    &__section-name {
      @apply tw-text-2xl tw-text-text00 tw-mb-8;
    }

    &__item {
      @apply tw-text-base tw-text-text01;

      & + & {
        margin-top: 24px;
      }
    }

    &__link {
      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
