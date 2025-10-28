<template>
  <div class="project-card">
    <Header class="project-card__header" />
    <div class="project-card__grid" v-if="data">
      <div class="project-card__left">
        <Image
          :title="data.name"
          :images="data.feed_images"
        />
      </div>
      <ParamsInfo class="project-card__right" :project="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ParamsInfo from './components/ParamsInfo.vue';
  import Header from './components/Header.vue';
  import Image from './components/Image.vue';

  const route = useRoute();

  const projectId = computed(() => route.params.id.toString());

  const api = useNuxtApp().$api;
  const res = await useAsyncData(
    unpackData(() => api.towns.projects.show(projectId.value)),
    { watch: [ projectId ] },
  );
  const data = useDataOrFail(res);
</script>

<style scoped lang="scss">
  .project-card {
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    @include sm {
      padding: 24px 16px;
    }

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

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }

    &__right {
      width: calc(100% / 12 * 5 - 20px);
      margin: 10px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
