<template>
  <div class="base-range-block" :class="{ 'base-range-block--disabled': disabled }">
    <label v-if="label" class="base-range-block__label">{{ label }}</label>
    <div class="control-block">
      <div class="control-block__inputs" :class="[`control-block__inputs--${theme}`]">
        <div class="control-block__inp-area">
          <input
            ref="input1Ref"
            class="control-block__input"
            :class="[`control-block__input--${theme}`]"
            type="text"
            :value="val"
            :placeholder="min.toString()"
            :disabled="disabled"
            @change="onChange"
          />
        </div>
      </div>
      <div class="control-block__controls" ref="controlsRef">
        <div
          class="control-block__hand control-block__hand--right"
          @mousedown.stop="onMousedown"
          @touchstart.stop="onTouchdown"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useField } from 'vee-validate';
  import { useMovable } from './composables';
  import { prettyValue, cutNotNumeric, minmax, getNumbersAfterDot, isLeftEdge, isRightEdge, getXFromEl } from './helpers';

  type NumOrNull = number | null;
  type ModelValue = NumOrNull;

  interface Props {
    min?: number,
    max: number,
    name: string,
    modelValue?: ModelValue,
    insertLabel?: string,
    label?: string,
    step?: number,
    theme?: "white" | "gray",
    disabled?: boolean,
  }

  const props = withDefaults(defineProps<Props>(), {
    min: 0,
    step: 1,
    modelValue: null,
    theme: 'gray',
    disabled: false,
  });

  const controlsRef = ref<HTMLElement | null>(null);

  const { value, handleChange } = useField(props.name, undefined, {
    initialValue: props.modelValue,
    syncVModel: true
  });

  onMounted(() => {
    setInitHands();
    window.addEventListener('resize', setInitHands);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', setInitHands);
  });

  watch([
    () => value.value,
    () => props.min
  ], ([ newValue, min ]) => {
    const hand =  controlsRef.value!.childNodes[0] as HTMLElement;
    setHandPosInPx(newValue ?? min, hand, 0);
  });

  const val = computed(() => {
    if(value.value === null) return '';
    return withInsertedLabel(value.value);
  });

  function onChange(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    const newVal = value === '' ? null : +cutNotNumeric(value);
    setVal(newVal);
    nextTick(() => {
      target.value = val.value;
    })
  }

  function setHandPosInPx(val: number, hand: HTMLElement, offset: number): void {
    if(!controlsRef.value) return;
    const pos = calcPosInPx(val, controlsRef.value, hand, offset);
    hand.style.transform = `translateX(${pos}px)`;
  }

  function setInitHands() {
    if(!controlsRef.value) return;
    const hands = controlsRef.value.childNodes as NodeListOf<HTMLElement>;
    setHandPosInPx(value.value ?? props.min, hands[0], 0);
  };

  function withInsertedLabel(val: NumOrNull) {
    if(val === null) return '';
    let pretty = prettyValue(val);
    return props.insertLabel ? `${pretty} ${props.insertLabel}` : pretty;
  }

  function setVal(val: NumOrNull) {
    let newVal: ModelValue = null;

    if(val !== null) {
      newVal = minmax(val, props.min ?? 0, props.max);
    }

    handleChange(newVal);

    return newVal;
  }

  function calcPosInPx(val: number, block: HTMLElement, hand: HTMLElement, offset: number) {
    const blockWidth = block.offsetWidth - hand.offsetWidth;
    const stepInPx = blockWidth / (props.max - props.min);
    return (stepInPx * (val - props.min)) + offset;
  }

  function calcValueFromPos(pos: number, block: HTMLElement, handWidth: number) {
    const blockWidth = block.offsetWidth + handWidth;
    let diff = props.max - props.min;
    let val = (pos / blockWidth * diff) + props.min;
    return +(val).toFixed(getNumbersAfterDot(props.step));
  }

  function onMove(e: { x: number }, handRef: HTMLElement): void {
    if(!controlsRef.value) return;
    let x = getXFromEl(controlsRef.value, e.x);

    if(isLeftEdge(e.x, controlsRef.value, handRef)) {
      x = 0;
    } else if(isRightEdge(e.x, controlsRef.value, handRef)) {
      x = controlsRef.value.offsetWidth - handRef.offsetWidth;
    }

    setVal(calcValueFromPos(x, controlsRef.value, -handRef.offsetWidth));

    handRef.style.transform = `translateX(${x}px)`;
  }

  const { onMousedown, onTouchdown } = useMovable(onMove);
</script>

<style lang="scss" src="./scss/index.scss"></style>
