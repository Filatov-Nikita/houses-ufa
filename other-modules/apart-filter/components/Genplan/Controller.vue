<template>
  <KeepAlive>
    <BlockComplex
      v-if="blocks[currentInd] === 'complex'"
      :complex="complex?.data ?? null"
      @back="back"
      @next="next"
      @update:liter="literId = $event"
    />
    <BlockLiter
      v-else-if="blocks[currentInd] === 'liter'"
      :liter="liter?.data ?? null"
      @back="back"
      @next="next"
      @update:entrance="entranceId = $event"
    />
    <BlockEntrance
      v-else-if="blocks[currentInd] === 'entrance'"
      :entrance="entrance?.data ?? null"
      :complex="complex?.data ?? null"
      :liter="liter?.data ?? null"
      :storey="storey?.data ?? null"
      :storeyId="storeyId"
      :houseId="literId"
      :entranceId="entranceId"
      @update:storey-id="storeyId = $event"
      @update:entrance-id="entranceId = $event"
      @update:house-id="literId = $event"
      @back="back"
    />
  </KeepAlive>
</template>

<script setup lang="ts">
  import BlockComplex from './BlockComplex.vue';
  import BlockLiter from './BlockLiter.vue';
  import BlockEntrance from './BlockEntrance.vue';
  import { useFilterHead } from '../../store/filter-head';
  import useComplex from './composables/useComplex';
  import useLiter from './composables/useLiter';
  import useEntrance from './composables/useEntrance';
  import useStorey from './composables/useStorey';

  const head = useFilterHead();

  const complexId = computed(() => +useRoute().params.id);

  const currentInd = ref(0);
  const literId = ref<number | null>(null);
  const entranceId = ref<number | null>(null);
  const storeyId = ref<number | null>(null);
  const blocks = ['complex', 'liter', 'entrance'] as const;

  const { complex, show: complexShow } = useComplex(complexId);
  const { liter, show: literShow } = useLiter(literId);
  const { entrance, show: entranceShow } = useEntrance(entranceId);
  const { storey } = useStorey(storeyId);

  watch(currentInd, (ind) => {
    switch(blocks[ind]) {
      case 'complex': complexShow(); break;
      case 'liter': literShow(); break;
      case 'entrance': entranceShow(); break;
    }
  }, { immediate: true });

  function next() {
    currentInd.value = Math.min(blocks.length - 1, currentInd.value + 1);
  }

  function back() {
    if(currentInd.value === 0) {
      head.currentFlatFilter = 'list';
    } else {
      currentInd.value--;
    }
  }
</script>
