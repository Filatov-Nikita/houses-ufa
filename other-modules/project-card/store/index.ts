import { defineStore } from 'pinia';
import { useDataFetch } from '@/composables/useDataFetch';

const useProjectCard = defineStore('projectCard', () => {
  const projectId = ref<number | null>(null);

  const url = computed(() => {
    return `/estate/estate-layouts/${projectId.value}`;
  });

  const { data: projectData, pending: loading, execute: showProject, error } = useDataFetch<ProjectCard>(url, {
    immediate: false,
    watch: false,
  });

  const planImages = computed(() => {
    return projectData.value?.data.feed_images.filter(img => img.is_plan) ?? []
  });

  const renderImages = computed(() => {
    return projectData.value?.data.feed_images.filter(img => !img.is_plan) ?? []
  });

  function setProjectId(id: number) {
    projectId.value = id;
  }

  return {
    projectId,
    projectData,
    loading,
    error,
    planImages,
    renderImages,
    setProjectId,
    showProject,
  }
});

export { useProjectCard };

export interface ProjectCard {
  data: Data;
}

export interface Data {
  id:          number;
  area_calc:   string;
  description: string;
  name:        string;
  name_alias:  string;
  type:        Type;
  feed_images: FeedImage[];
}

export interface FeedImage {
  url:       string;
  floor:     number;
  is_plan:   boolean;
  is_render: boolean;
}

export interface Type {
  title: string;
  value: string;
}
