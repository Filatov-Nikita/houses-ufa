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
    <svg class="town-genplan-level1__svg" v-if="viewBox" :viewBox="viewBox">
      <template v-for="block in blocks" :key="block.id">
        <path
          v-if="block.town_plan_polygon && block.has_for_sale_estates"
          class="town-genplan-level1__path"
          :d="block.town_plan_polygon"
          @click="showLevel2(block.id)"
          @mouseenter="showPopup($event, block)"
          @mouseleave="closePopup"
        />
      </template>
    </svg>
    <div
      v-if="showedPopup && pointer"
      class="town-genplan-level1__popup"
      :style="{ left: pointer.clientX + 'px', top: pointer.clientY + 'px' }"
    >
      {{ currentBlock?.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useTownGenplan, type Turn } from '../store';

  const store = useTownGenplan();

  const img = computed(() => store.data?.data.master_plan ?? null);
  const blocks = computed(() => store.data?.data.turns ?? []);

  const viewBox = computed(() => {
    if(!img.value) return '';
    return `0 0 ${img.value.width ?? 0} ${img.value.height ?? 0}`;
  });

  function showLevel2(blockId: number) {
    store.showedLevel = 2;
    store.setShowedBlock(blockId);
  }

  const currentBlock = ref<Turn | null>(null);
  const pointer = ref<MouseEvent | null>(null);
  const showedPopup = ref<boolean>(false);

  function showPopup(e: MouseEvent, block: Turn) {
    pointer.value = e;
    currentBlock.value = block;
    showedPopup.value = true;
  }

  function closePopup() {
    pointer.value = null;
    currentBlock.value = null;
    showedPopup.value = false;
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
      stroke: #ffffff;
      stroke-width: 2px;
      fill: rgba(255, 255, 255, 0.30);
    }

    &__popup {
      position: fixed;
      border-radius: 8px;
      padding: 8px 12px;
      text-align: center;
      min-width: 150px;
      z-index: 9000;
      @apply tw-bg-white tw-text-primary tw-text-base;
    }
  }
</style>
