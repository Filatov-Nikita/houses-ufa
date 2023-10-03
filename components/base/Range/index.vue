<template>
  <div class="base-range-block">
    <label v-if="label" class="base-range-block__label">{{ label }}</label>
    <div class="control-block">
      <div class="control-block__inputs" :class="[`control-block__inputs--${theme}`]">
        <div class="control-block__inp-area" :style="{ '--basis': inputWitdh }">
          <span class="control-block__label">от</span>
          <input
            ref="input1Ref"
            class="control-block__input control-block__input--space-before"
            :class="[`control-block__input--${theme}`]"
            type="text"
            :value="val1"
            :placeholder="min.toString()"
            @change="onChangeFrom"
          />
        </div>
        <div class="control-block__divider">
          <svg class="tw-w-4 tw-h-[1px] tw-inline-block" viewBox="0 0 16 1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="0.5" x2="16" y2="0.5" stroke="#8F8F8F"/>
          </svg>
        </div>
        <div class="control-block__inp-area" :style="{ '--basis': inputWitdh }">
          <span class="control-block__label">до</span>
          <input
            ref="input2Ref"
            class="control-block__input control-block__input--space-before"
            :class="[`control-block__input--${theme}`]"
            type="text"
            :value="val2"
            :placeholder="max.toString()"
            @change="onChangeTo"
          />
        </div>
      </div>
      <div class="control-block__controls" ref="controlsRef">
        <div
          class="control-block__hand control-block__hand--left"
          @mousedown.stop="onMousedown"
          @touchstart.stop="onTouchdown"
        ></div>
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
  type ModelValue = [NumOrNull, NumOrNull] | null;

  interface Props {
    min?: number,
    max: number,
    inputWitdh?: string,
    name: string,
    modelValue?: ModelValue,
    insertLabel?: string,
    label?: string,
    step?: number,
    theme?: "white" | "gray"
  }

  const props = withDefaults(defineProps<Props>(), {
    inputWitdh: '100%',
    min: 0,
    step: 1,
    modelValue: null,
    theme: 'gray'
  });

  const emit = defineEmits<{
    (event: 'afterManipulate', val: ModelValue): void,
    (event: 'change', val: ModelValue): void,
    (event: 'update:modelValue', val: ModelValue): void,
  }>();

  const controlsRef = ref<HTMLElement | null>(null);
  const input1Ref = ref<HTMLInputElement | null>(null);
  const input2Ref = ref<HTMLInputElement | null>(null);

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
    () => value.value?.[0],
    () => props.min
  ], ([ newValue, min ]) => {
    const hand =  controlsRef.value!.childNodes[0] as HTMLElement;
    setHandPosInPx(newValue ?? min, hand, 0);
  });

  watch([
    () => value.value?.[1],
    () => props.max
  ], ([ newValue, max ]) => {
    const hand =  controlsRef.value!.childNodes[1] as HTMLElement;
    setHandPosInPx(newValue ?? max, hand, hand.offsetWidth);
  });

  const val1 = computed(() => {
    if(value.value === null) return '';
    return withInsertedLabel(value.value[0]);
  });

  const val2 = computed(() => {
    if(value.value === null) return '';
    return withInsertedLabel(value.value[1]);
  });

  function withInsertedLabel(val: NumOrNull) {
    if(val === null) return '';
    let pretty = prettyValue(val);
    return props.insertLabel ? `${pretty} ${props.insertLabel}` : pretty;
  }

  function change(): void {
    emit('change', value.value);
  }

  function onChangeFrom(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const newVal = value === '' ? null : +cutNotNumeric(value);
    setFrom(newVal);
    change();
  }

  function onChangeTo(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const newVal = value === '' ? null : +cutNotNumeric(value);
    setTo(newVal);
    change();
  }

  function setHandPosInPx(val: number, hand: HTMLElement, offset: number): void {
    if(!controlsRef.value) return;
    const pos = calcPosInPx(val, controlsRef.value, hand, offset);
    hand.style.transform = `translateX(${pos}px)`;
  }

  function setInitHands() {
    if(!controlsRef.value) return;
    const hands = controlsRef.value.childNodes as NodeListOf<HTMLElement>;
    setHandPosInPx(value.value?.[0] ?? props.min, hands[0], 0);
    setHandPosInPx(value.value?.[1] ?? props.max, hands[1], hands[1].offsetWidth);
  };

  function setFrom(val: NumOrNull) {
    let newVal: ModelValue;

    if(val !== null && value.value && value.value[1]) {
      newVal = [ minmax(val, props.min ?? 0, value.value[1]), value.value[1] ];
    } else if(val !== null && (value.value === null || value.value[1] === null)) {
      newVal = [ minmax(val, props.min ?? 0, props.max), null ];
    } else if(val === null && value.value && value.value[1]) {
      newVal = [ null, value.value[1]];
    } else {
      newVal = [ null, null ];
    }

    handleChange(newVal);

    return newVal;
  }

  function setTo(val: NumOrNull) {
    let newVal: ModelValue;

    if(value.value && value.value[0] && val !== null) {
      newVal = [ value.value[0], minmax(val, value.value[0], props.max) ];
    } else if((value.value === null || value.value[0] === null) && val !== null) {
      newVal = [ null, minmax(val, props.min ?? 0, props.max) ];
    } else if(value.value && value.value[0] && val === null) {
      newVal = [ value.value[0], null];
    } else {
      newVal = [ null, null ];
    }

    handleChange(newVal);

    return newVal;
  }

  function calcPosInPx(val: number, block: HTMLElement, hand: HTMLElement, offset: number) {
    const blockWidth = block.offsetWidth - hand.offsetWidth * 2;
    const stepInPx = blockWidth / (props.max - props.min);
    return (stepInPx * (val - props.min)) + offset;
  }

  function calcValueFromPos(pos: number, block: HTMLElement, handWidth: number) {
    const blockWidth = block.offsetWidth + handWidth;
    let diff = props.max - props.min;
    let val = (pos / blockWidth * diff) + props.min;
    return +(val).toFixed(getNumbersAfterDot(props.step));
  }

  function getPrevNext(handRef: HTMLElement, childNodes: NodeListOf<ChildNode>) {
    const nodes = Array.from(childNodes);
    let next: any;
    let prev: any;
    nodes.forEach((node, i) => {
      if(node === handRef) {
        if(i === 0) {
          prev = null;
          next = nodes[i + 1];
        } else {
          prev = nodes[i - 1];
          next = null;
        };
      }
    });

    return { next, prev };
  }

  function onMove(e: { x: number }, handRef: HTMLElement): void {
    if(!controlsRef.value) return;
    let x = getXFromEl(controlsRef.value, e.x);

    const { next, prev } = getPrevNext(handRef, controlsRef.value.childNodes);
    let handInd = 0;
    if(next !== null) {
      handInd = 0;
      const nextX = getXFromEl(controlsRef.value, next);
      if(x + handRef.offsetWidth >= nextX) {
        x = nextX - handRef.offsetWidth;
      };
    }

    if(prev !== null) {
      handInd = 1;
      const prevX = getXFromEl(controlsRef.value, prev);
      if(prevX + handRef.offsetWidth >= x) {
        x = prevX + handRef.offsetWidth;
      };
    }

    if(isLeftEdge(e.x, controlsRef.value, handRef)) {
      if(handInd === 0) x = 0;
    } else if(isRightEdge(e.x, controlsRef.value, handRef)) {
      if(handInd === 1) x = controlsRef.value.offsetWidth - handRef.offsetWidth;
    }

    if(handInd === 0) {
      setFrom(calcValueFromPos(x, controlsRef.value, -handRef.offsetWidth * 2));
    } else {
      setTo(calcValueFromPos(x - handRef.offsetWidth, controlsRef.value, -handRef.offsetWidth * 2));
    }

    handRef.style.transform = `translateX(${x}px)`;
  }

  function afterManipulate() {
    emit('afterManipulate', value.value);
  }

  const { onMousedown, onTouchdown } = useMovable(onMove, afterManipulate);
</script>

<style lang="scss" src="./scss/index.scss"></style>
