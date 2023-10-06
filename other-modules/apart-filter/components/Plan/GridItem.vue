<template>
  <button
    ref="itemRef"
    type="button"
    class="grid-item"
    :class="classes"
    v-bind="$attrs"
    @click="toggleCard"
  >
    <span v-if="status === 'for_sale'">{{ label }}</span>
    <div v-else-if="iconName" class="grid-item__icon">
      <BaseIcon class="tw-w-full tw-h-full" color="tw-fill-base02" :name="iconName" />
    </div>
  </button>
  <Teleport to="body">
    <Transition
      leave-active-class="animate__animated anim-200ms animate__zoomOut"
      enter-active-class="animate__animated anim-100ms animate__zoomIn"
    >
      <FlatCard
        v-if="showedCard"
        v-click-outside="closeCard"
        :style="cardStyles"
        class="grid-item__flat-card"
        :flat="flat"
        @close="closeCard"
      />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
  import type { Flat } from '../../store/filter-plan/composables/usePlan';
  import FlatCard from './FlatCard.vue';

  interface Props {
    flat: Flat,
  }

  const props = defineProps<Props>();

  const status = computed(() => props.flat.status);
  const isActual = computed(() => props.flat.is_actual);
  const iconName = computed(() => {
    return status.value === 'booked'
    ? 'clock' : status.value === 'sold'
    ? 'lock' : null;
  });

  const classes = computed(() => {
    return {
      'grid-item--available': isActual.value === true && status.value === 'for_sale',
      'grid-item--unavailable': !isActual.value && status.value === 'for_sale',
      'grid-item--off': status.value !== 'for_sale',
    }
  });

  const label = computed(() => {
    const { layout, number_of_rooms: count } = props.flat;
    return layout === 'studio' && count === 1 ? 'С' : count;
  });

  const showedCard = ref(false);
  const cardCoords = reactive({ x: 0, y: 0 });
  const itemRef = ref<HTMLElement | null>(null);

  function toggle() {
    showedCard.value = !showedCard.value;
  }

  const toggleCard = () => setTimeout(toggle, 0);

  function closeCard() {
    showedCard.value = false
  }

  const cardStyles = computed(() => {
    return {
      left: cardCoords.x + 'px',
      top: window.scrollY + cardCoords.y + 'px',
    }
  });

  watch(showedCard, (val) => {
    if(val) {
      const rect = itemRef.value?.getBoundingClientRect();
      cardCoords.x = rect?.x ?? 0;
      cardCoords.y = rect?.y ?? 0;
    }
  });
</script>
<style scoped lang="scss">
  .grid-item {
    border-radius: 8px;
    height: 48px;
    min-width: 48px;
    width: 48px;
    padding: 13px 16px 11px 16px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    &--available {
      @apply tw-bg-primary01 tw-text-text01;
    }

    &--unavailable {
      pointer-events: none;
      @apply tw-bg-base00 tw-text-base02;
    }

    &--off {
      pointer-events: none;
    }

    &__icon {
      width: 16px;
      height: 16px;
      margin: 0 auto;
    }

    &__flat-card {
      position: absolute;
      width: 343px;
      z-index: 9000;
      left: 0;
      top: 0;
    }
  }
</style>
