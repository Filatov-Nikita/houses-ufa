<template>
  <div v-if="projectListStore.loading">
    <div class="tw-flex tw-flex-wrap">
      <div class="tw-w-1/4 tw-p-[10px]" v-for="_i in 4">
        <BaseSkeleton class=" tw-w-full tw-h-[400px] tw-rounded-2xl" />
      </div>
    </div>
  </div>
  <div v-else-if="projects.length === 0">
    Еще нет ни одного проекта
  </div>
  <div v-else class="project-list">
    <ProjectItem
      class="project-list__item"
      v-for="project in projects"
      :key="project.id"
      :project="project"
      theme="white"
    />
  </div>
</template>

<script setup lang="ts">
  import ProjectItem from '@/components/Estate/Cards/Project.vue';
  import { useProjectList } from '../store';

  const projectListStore = useProjectList();

  const projects = computed(() => projectListStore.projects?.data ?? []);
</script>

<style scoped lang="scss">
  .project-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(100% / 12 * 3 - 20px);
      margin: 10px;
    }
  }
</style>
