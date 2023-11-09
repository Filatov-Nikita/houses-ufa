<template>
  <div class="town-genplan-level1">
    <img
      class="town-genplan-level1__img"
      v-if="img"
      :width="img.width ?? 'auto'"
      :height="img.height ?? 'auto'"
      :src="img.url"
      loading="lazy"
      alt="Картинка генплана"
    />
    <svg class="town-genplan-level1__svg">
      <path
        v-for="estate in estates"
        :key="estate.id"
        class="town-genplan-level1__path"
        :d="estate.block_plan_polygon"
        @click="showTown(estate.id)"
      />
    </svg>
    <div class="town-genplan-level1__label">{{ data?.data.name }}</div>
    <BaseButton class="town-genplan-level1__back" theme="white" @click="back">
      <div class="tw-flex tw-gap-4">
        <BaseIcon class="tw-w-6 tw-h-6" name="back" />
        <span>Назад</span>
      </div>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import { useTownGenplan } from '../store';
  import type { Block } from '../types';
  const store = useTownGenplan();
  const router = useRouter();

  function showTown(townId: number) {
    router.push({
      path: `/towns/${townId}`,
    });
  }

  function back() {
    store.showedLevel = 1;
  }

  const url = computed(() => `estate/blocks/${store.showedBlockId}/master-plan`);

  const { data } = await useDataFetch<Response>(url, { lazy: true });

  const img = computed(() => data?.value?.data.master_plan ?? null);
  const estates = computed(() => data?.value?.data.estates ?? []);

  interface Response {
    data: Block;
  }
</script>

<style scoped lang="scss">
  .town-genplan-level1 {
    position: relative;
    z-index: 10;

    &__img {
      border-radius: 16px;
    }

    &__svg {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    &__path {
      cursor: pointer;
      stroke-width: 2px;
      fill: rgba(223, 253, 233, 0.40);
      stroke: #4FBA78;
    }

    &__back {
      position: absolute;
      left: 24px;
      top: 24px;
    }

    &__label {
      position: absolute;
      right: 24px;
      top: 24px;
      border-radius: 8px;
      background: rgba(79, 79, 79, 0.40);
      padding: 16px 24px;
      backdrop-filter: blur(4px);
      @apply tw-text-white tw-text-base;
    }
  }
</style>
