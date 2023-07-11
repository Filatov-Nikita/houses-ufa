<template>
  <header>
    <div>
      <img width="115" height="44" src="/assets/images/logo.svg" alt="">
    </div>
    <nav>
      <NuxtLink
        v-for="item in items"
        to="/"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
  import { useAppStore } from '/store/app';

  const appStore = useAppStore();

  const items = computed(() => appStore.headerMenu);
</script>
