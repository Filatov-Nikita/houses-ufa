<template>
  <div class="main-filter-header">
    <BaseBreadcrumbs class="main-filter-header__bread" />
    <div class="main-filter-header__toolbar">
      <h1 class="main-filter-header__h1">Подобрать коттеджи и таунхаусы</h1>
      <button type="button" class="clearBtn" @click="$emit('clearFilter')">
        <span>Очистить фильтр</span>
        <BaseIcon class="clearBtn__icon" name="close" />
      </button>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  defineEmits<{
    (event: 'clearFilter'): void,
  }>();

  const breadStore = useBreadcrumbsStore();

  breadStore.set([
    { label: 'Главная', to: '/' },
    { label: 'Коттеджи и таунхаусы', to: '/towns' },
  ]);
</script>

<style scoped lang="scss">
  .main-filter-header {
    border-radius: 16px;
    padding: 40px;
    @apply tw-bg-white;

    @include lg {
      padding: 24px;
    }

    &__bread {
      margin-bottom: 24px;
      @apply tw-text-text02;
    }

    &__h1 {
      @apply tw-text-text00 tw-text-5xl;

      @include sm {
        @apply tw-text-2xl;
      }
    }

    &__toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 48px;

      @include sm {
        gap: 16px;
        margin-bottom: 8px;
      }
    }
  }

  .clearBtn {
    @apply tw-text-text02 tw-text-base tw-flex tw-gap-2 tw-py-4;

    &__icon {
      width: 24px;
      height: 24px;
    }

    &:hover {
      @apply tw-text-primary-hover;
    }
  }
</style>
