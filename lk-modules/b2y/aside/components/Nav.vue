<template>
  <nav class="lk-nav">
    <NuxtLink
      class="lk-nav-item"
      v-for="item in items"
      :to="item.to"
      active-class="lk-nav-item--active"
    >
      <BaseIcon class="lk-nav-item__icon" :name="item.icon" />
      <span class="lk-nav-item__label">{{ item.label }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const items = [
    {
      label: 'Отчет агентства',
      icon: 'file',
      to: '/lk/b2y/report',
    },
  ];
</script>

<style scoped lang="scss">
  .lk-nav-item {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;
    padding: 8px 16px;
    border-radius: 8px;
    @apply tw-text-icon;

    & + & {
      margin-top: 12px;
    }

    &:hover {
      @apply tw-bg-white;
    }

    &--active {
      @apply tw-text-primary tw-bg-white;
    }

    &--active &__label {
      @apply tw-text-text01;
    }

    &__icon {
      width: 24px;
      height: 24px;
    }

    &__label {
      @apply tw-text-sm tw-text-text02;
    }
  }
</style>
