<template>
  <div class="project-card">
    <Header class="project-card__header" />
    <div class="project-card__grid">
      <div class="project-card__left">
        <Image />
      </div>
      <ParamsInfo class="project-card__right" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ParamsInfo from './components/ParamsInfo.vue';
  import Header from './components/Header.vue';
  import Image from './components/Image.vue';
  import { useProjectCard } from './store';

  const projectCard = useProjectCard();

  const route = useRoute();

  function load() {
    projectCard.setProjectId(+route.params.id);
    return projectCard.showProject();
  }

  await useAsyncData(() => load(), { lazy: true });
</script>

<style scoped lang="scss">
  .project-card {
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    &__header {
      margin-bottom: 24px;
    }

    &__grid {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__left {
      width: calc(100% / 12 * 7 - 20px);
      margin: 10px;
    }

    &__right {
      width: calc(100% / 12 * 5 - 20px);
      margin: 10px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
</style>
