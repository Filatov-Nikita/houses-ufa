<template>
  <EstateCardsBase
    :name="name"
    :params="params"
    :images="images"
    :to="`/projects/${project.id}`"
  >
    <template #actions>
      <BtnsActionsMenu />
    </template>
    <ProjectInfo :typeTitle="project.type.title" :square="project.area_calc" />
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import type { Project } from '@/types/estate/project';
  import ProjectInfo from '@/components/Estate/Cards/Blocks/ProjectInfo.vue';

  const props = defineProps<{
    project: Project,
  }>();

  const name = computed(() => {
    return props.project.name_alias;
  });

  const params:[] = [];

  const renderImages = computed(() => {
    return props.project.feed_images.filter(img => !img.is_plan);
  });

  const planImages = computed(() => {
    return props.project.feed_images.filter(img => img.is_plan);
  });

  const images = computed(() => {
    const list = [];
    if(renderImages.value.length !== 0) list.push(renderImages.value[0]);
    if(planImages.value.length !== 0) list.push(planImages.value[0]);
    return list.map(img => img.url);
  });
</script>
