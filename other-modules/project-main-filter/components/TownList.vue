<template>
  <div>
    <BaseWait :waiting="loading">
      <template #loader>
        <div class="loader">
          <div
            class="loader__item"
            v-for="_i in 12"
          >
            <BaseSkeleton class="tw-h-[400px] tw-rounded-2xl" />
          </div>
        </div>
      </template>
      <div class="tw-text-center tw-text-base tw-py-8" v-if="isEmpty">
        Ничего не найдено. Попробуйте изменить параметры фильтра.
      </div>
      <template v-else>
        <div class="filter-estate-list">
          <ProjectCard
            class="filter-estate-list__card"
            v-for="town in towns"
            :key="town.id"
            :project="{ ...town, description: '' }"
          />
        </div>
        <slot name="pagination" />
      </template>
    </BaseWait>
  </div>
</template>

<script setup lang="ts">
  import ProjectCard from '@/components/Estate/Cards/Project.vue';
  import type { ProjectOne } from '../composables/useList';

  const props = defineProps<{
    loading: boolean,
    towns: ProjectOne[] | null,
  }>();

  const towns = computed(() => props.towns ?? []);
  const isEmpty = computed(() => towns.value.length === 0);
</script>
<style scoped lang="scss">
  .loader {
    display: flex;
    flex-wrap: wrap;
    margin: -16px -10px;

    &__item {
      width: calc(100% / 12 * 3 - 20px);
      margin: 16px 10px;

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

  .filter-estate-list {
    margin: -16px -10px;
    @apply tw-flex tw-flex-wrap;

    &__card {
      width: calc(100% / 12 * 3 - 20px);
      margin: 16px 10px;

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
