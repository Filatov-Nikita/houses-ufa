<template>
  <EstateCardsBase
    tag="article"
    :name="name"
    :params="params"
    :images="images"
  >
    <template #actions>
      <BtnsActionsMenu />
    </template>
    <div class="tw-pt-4">
      <BaseButton class="tw-w-full" :to="`/projects/${project.id}`" theme="gray">
        Подробнее
      </BaseButton>
    </div>
  </EstateCardsBase>
</template>

<script setup lang="ts">
  import type { Project } from '@/types/estate/project';

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
