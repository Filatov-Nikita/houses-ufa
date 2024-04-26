<template>
  <div class="profile-data">
    <p class="profile-data__fullname">{{ name }}</p>
    <div class="profile-data__items">
      <div
        class="profile-item"
        v-for="item in items"
        :key="item.label"
      >
        <p class="profile-item__label">{{ item.label }}</p>
        <p class="profile-item__value">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Opt {
    label: string,
    value: string,
  }

  defineProps<{
    items: Opt[],
    name: string,
  }>();
</script>

<style scoped lang="scss">
  .profile-data {
    @apply tw-text-text00;

    &__fullname {
      margin-bottom: 32px;
      @apply tw-text-2xl;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      gap: 48px;
      max-width: 400px;
    }
  }

  .profile-item {
    &__label {
      margin-bottom: 8px;
      @apply tw-text-sm tw-text-text02;
    }

    &__value {
      @apply tw-text-xl tw-text-text00;
    }
  }
</style>
