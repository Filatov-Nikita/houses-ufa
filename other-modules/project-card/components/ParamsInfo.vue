<template>
  <div class="project-info">
    <VideoBlock v-if="project.video_url" :videoUrl="project.video_url" />
    <div class="project-info__name">
      <h1>{{ project.name_alias }}</h1>
    </div>
    <div class="params-block">
      <div class="params-block__one">
        <p class="params-block__key">Тип</p>
        <p class="params-block__value">{{ project.type.title }}</p>
      </div>
      <div class="params-block__one">
        <p class="params-block__key">Площадь дома</p>
        <p class="params-block__value">{{ project.area_calc }} м<sup>2</sup></p>
      </div>
    </div>
    <BaseButton class="project-info__callback" @click="showedConsult = true">
      Получить консультацию
    </BaseButton>
    <ConsultForm v-model:showed="showedConsult" />
  </div>
</template>

<script setup lang="ts">
  import VideoBlock from './VideoBlock.vue';
  import ConsultForm from '@/other-modules/consult-form/index.vue';
  import type { ProjectOne } from '@/repositories/towns/projects';

  defineProps<{
    project: ProjectOne,
  }>();

  const showedConsult = ref(false);
</script>

<style scoped lang="scss">
  .project-info {
    padding: 40px;

    @include lg {
      padding: 0 24px;
    }

    @include sm {
      padding: 0px;
    }

    &__callback {
      width: 100%;
      margin-top: 32px;

      @include sm {
        margin-top: 24px;
      }
    }

    &__badges {
      margin-bottom: 32px;
    }

    &__name {
      margin-bottom: 24px;

      h1 {
        font-size: 32px;
        line-height: 1.25;
        @apply tw-text-text00;

        @include lg {
          @apply tw-text-2xl;
        }
      }
    }
  }

  .params-block {
    &__one + &__one {
      margin-top: 16px;
    }

    &__one {
      display: flex;
      @apply tw-text-base;
    }

    &__key, &__value {
      width: 50%;
    }

    &__key {
      @apply tw-text-text00;
    }

    &__value {
      text-align: right;
      @apply tw-text-text02;
    }
  }
</style>
