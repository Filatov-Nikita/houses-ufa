<template>
  <div class="base-range-block">
    <label v-if="label" class="base-range-block__label">{{ label }}</label>
    <div class="control-block">
      <div class="control-block__inputs">
        <div class="control-block__inp-area" :style="{ '--basis': inputWitdh }">
          <span class="control-block__label">от</span>
          <input
            ref="input1Ref"
            class="control-block__input"
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
            class="control-block__input"
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
  type NumOrNull = number | null;
  type ModelValue = [NumOrNull, NumOrNull] | null;

  interface Props {
    min?: number,
    max: number,
    inputWitdh: string,
    name1?: string,
    name2?: string,
    modelValue?: ModelValue,
    insertLabel?: string,
    label?: string,
    step?: number
  }

  const props = withDefaults(defineProps<Props>(), {
    inputWitdh: '100%',
    min: 0,
    step: 1,
    name1: 'from',
    name2: 'to',
    modelValue: null,
  });

  const controlsRef = ref<HTMLElement | null>(null);
  const input1Ref = ref<HTMLInputElement | null>(null);
  const input2Ref = ref<HTMLInputElement | null>(null);

  const { value, handleChange } = useField(props.name1, undefined, {
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

  function prettyValue(val: number) {
    const [num, num2 = ''] = val.toString().split('.');
    const parts = num.match(/\d{1,3}(?=(\d{3})*$)/g);
    return [parts!.join(' '), num2].filter(val => !!val).join(',');
  }

  function onChangeFrom(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const newVal = value === '' ? null : +cutNotNumeric(value);
    setFrom(newVal);
  }

  function cutNotNumeric(str: string) {
    const newStr = str.replace(/[^\d.-]+/g, '');;
    return newStr;
  }

  function onChangeTo(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    const newVal = value === '' ? null : +cutNotNumeric(value);
    setTo(newVal);
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

  function minmax(val: number, min: number, max: number): number {
    return Math.max(min, Math.min(val, max));
  }

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

  function getNumbersAfterDot(num: number): number {
    const [ _, right = '' ] = num.toString().split('.');
    return right.length;
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

  function isLeftEdge(x: number, block: HTMLElement, handRef: HTMLElement) {
    const blockStart = block.getBoundingClientRect().x;
    return  x < blockStart;
  }

  function isRightEdge(x: number, block: HTMLElement, handRef: HTMLElement) {
    const blockStart = block.getBoundingClientRect().x;
    return x + handRef.offsetWidth > blockStart + block.offsetWidth;
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

  function getXFromEl(relative: HTMLElement, target: HTMLElement | number) {
    const { x: x1 } = relative.getBoundingClientRect();
    if(typeof target === 'number') {
      return target - x1;
    } else {
      const { x: x2 } = target.getBoundingClientRect();
      return x2 - x1;
    }
  }

  function onMousedown(e: MouseEvent) {
    document.body.classList.add('tw-select-none');
    const newWindow = window as any;
    const target = e.target as HTMLElement;
    newWindow._onMove = (e: MouseEvent) => onMove({ x: e.x }, target);
    window.addEventListener('mousemove', newWindow._onMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  function onTouchdown(e: TouchEvent) {
    e.preventDefault();
    const newWindow = window as any;
    const target = e.target as HTMLElement;
    newWindow._onTouchmove = (e: TouchEvent) => {
      e.preventDefault();
      onMove({ x: e.touches[0].clientX}, target);
    }
    window.addEventListener('touchmove', newWindow._onTouchmove);
    window.addEventListener('touchend', onTouchend);
  }

  function onTouchend(e: TouchEvent) {
    const newWindow = window as any;
    window.removeEventListener('touchmove', newWindow._onTouchmove);
    window.removeEventListener('touchend', onTouchend);
    delete newWindow._onTouchmove;
  }

  function onMouseUp() {
    document.body.classList.remove('tw-select-none');
    const newWindow = window as any;
    window.removeEventListener('mousemove', newWindow._onMove);
    window.removeEventListener('mouseup', onMouseUp);
    delete newWindow._onMove;
  }
</script>

<style scoped lang="scss">
  .base-range-block {
    &__label {
      letter-spacing: -0.14px;
      @apply tw-text-text02 tw-text-sm tw-font-normal tw-block tw-mb-2;
    }

    &__error-msg {
      @apply tw-mt-2 tw-text-error tw-text-xs tw-font-normal;
    }
  }

  .control-block {
    padding-bottom: 8px;
    position: relative;

    &__inputs {
      border-radius: 8px;
      padding: 17px 16px 15px;
      border-width: 1px;
      border-style: solid;
      @apply tw-bg-base00 tw-flex tw-gap-2 tw-items-center tw-border-base00;

      &--error {
        @apply tw-border-error;
      }
    }

    &__divider {
      flex-grow: 1;
      text-align: center;
    }

    &__inp-area {
      flex-basis: var(--basis);
      @apply tw-relative;
    }

    &__input {
      min-height: 24px;
      padding-left: 24px;
      @apply tw-block tw-w-full tw-bg-base00 tw-text-text00 tw-text-base;

      &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      &::placeholder {
        @apply tw-text-text02 tw-text-base;
      }
    }

    &__label {
      position: absolute;
      top: 2px;
      left: 0px;
      @apply tw-text-text02 tw-text-base;
    }

    &__controls {
      position: absolute;
      bottom: 0;
      left: 16px;
      z-index: 100;
      width: calc(100% - 32px);
      height: 16px;
      overflow: hidden;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 6px;
        width: 100%;
        height: 2px;
        z-index: 10;
        @apply tw-bg-primary;
      }
    }

    &__hand {
      touch-action: none;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0px;
      width: 16px;
      height: 16px;
      border-width: 6px;
      z-index: 100;
      @apply tw-bg-white tw-border-primary tw-rounded-full tw-border-solid;

      &::before {
        content: "";
        position: absolute;
        width: 100vw;
        height: 2px;
        top: 0px;
        z-index: -1;
        @apply tw-bg-base00;
      }

      &--left {
        &::before {
          left: -6px;
          transform: translateX(-100%);
        }
      }

      &--right {
        &::before {
          left: 10px;
        }
      }
    }
  }
</style>
