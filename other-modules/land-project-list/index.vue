<template>
  <section class="section" v-if="data.length > 0">
    <div class="wrapper">
      <div class="section__top">
        <h2 class="section__title">Проекты для этого участка</h2>
      </div>
      <div class="land-project-list">
        <div class="land-project-list__wrap">
          <Item class="land-project-list__item" v-for="project in data" :key="project.id" :project="project" />
        </div>
        <LoadMoreBtn
          v-if="!pagination.isLast && meta"
          class="tw-mt-8"
          :total="meta?.total"
          :loaded="meta?.to"
          :loading="loadingNext"
          @click="next"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useLandProjects } from './composables/useLandProjects';
  import Item from './components/Item.vue';

  const props = defineProps<{
    townId: number,
  }>();

  const { response, pagination, loadingNext, next } = useLandProjects(toRef(props, 'townId'));

  await response.execute();

  const data = computed(() => response.data.value?.data ?? []);
  const meta = computed(() => response.data.value?.meta);
</script>

<style scoped lang="scss">
  .land-project-list {
    &__wrap {
      display: flex;
      flex-wrap: wrap;
      margin: -10px;
    }

    &__item {
      width: calc(100% / 12 * 3 - 20px);
      margin: 10px;

      @include lg {
        width: calc(100% / 12 * 4 - 20px);
      }

      @include md {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }
</style>
