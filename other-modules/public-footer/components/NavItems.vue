<template>
  <div class="nav-items-list">
    <div class="nav-items-list__item nav-items" v-for="section in items">
      <div class="nav-items__section-name">{{ section.label }}</div>
      <div class="nav-items__items">
        <div class="nav-items__item" v-for="item in section.links">
          <NuxtLink class="nav-items__link" :to="item.to">{{ item.label }}</NuxtLink>
        </div>
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
  .nav-items-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 64px;
    row-gap: 48px;
  }

  .nav-items {
    &__section-name {
      margin-bottom: 24px;
      @apply tw-text-xl tw-text-text00;
    }

    &__item {
      white-space: no-wrap;
      @apply tw-text-base tw-text-text02;

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
