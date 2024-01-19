<template>
  <div class="team-block">
    <div class="team-block__filter">
      <BaseTabsGroup v-model="tab">
        <BaseTabsGroupItem
          v-for="tab in data"
          :name="tab.id.toString()"
        >
          {{ tab.name }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>

    <BaseTabsTabContent v-model="tab">
      <BaseTabsTabContentItem
        class="team-list"
        v-for="tab in data"
        :key="tab.id"
        :name="tab.id.toString()"
      >
      <article
        class="team-list__item team-item"
        v-for="item in sortByPriority(tab.employees)"
      >
          <div class="team-item__img" v-if="item.photo">
            <img :src="item.photo.url" alt="" />
          </div>

          <div>
            <h3 class="team-item__name">{{ item.full_name }}</h3>
            <p class="team-item__position">
              {{ item.job_title }}
            </p>
          </div>
        </article>
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>
<script lang="ts" setup>
import type { Group, Employee } from './types';
const { data: response } = await useDataFetch<{ data: Group[] }>('/about/departments');

const data = computed(() => {
  if(!response.value) return [];
  return sortByPriority(response.value.data);
});

const firstGroupId = computed(() => {
  if(data.value.length === 0) return -1;
  return data.value[0].id;
});

function sortByPriority<T extends { priority: string }>(obj: T[]) {
  return obj.sort((a, b) => {
    return +b.priority - +a.priority;
  });
}

const tab = ref(firstGroupId.value.toString());
</script>

<style lang="scss" scoped>
  .team-block {
    &__filter {
      width: 100%;
      max-width: 100%;
      overflow-y: hidden;
      margin-bottom: 32px;
    }
  }

  .team-list {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    &__item {
      width: calc(100% / 12 * 4 - 20px);
      margin: 10px;

      @include lg {
        width: calc(100% / 12 * 6 - 20px);
      }

      @include sm {
        width: calc(100% - 20px);
      }
    }
  }

  .team-item {
    border-radius: 16px;
    padding: 24px 16px;
    @apply tw-bg-white;

    &__img {
      border-radius: 16px;
      height: 408px;
      width: 100%;
      margin-bottom: 24px;
      overflow: hidden;

      @include md {
        height: auto;
      }

      img {
        object-fit: cover;
        object-position: center;
        width: 100%;
        height: 100%;
      }
    }

    &__name {
      margin-bottom: 8px;
      @apply tw-text-text00 tw-text-xl;
    }

    &__position {
      @apply tw-text-text02 tw-text-sm;
    }
  }
</style>
