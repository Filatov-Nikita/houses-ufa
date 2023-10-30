<template>
  <button type="button" @click="handleChange(value)">
    <slot v-bind="{ checked }" />
  </button>
</template>
<script lang="ts" setup>
import { useField } from 'vee-validate'

interface Props {
  value: number | string
  modelValue: any
  name: string
}

const props = defineProps<Props>()
const { name } = toRefs(props)
const { checked, handleChange } = useField(name, undefined, {
  type: 'radio',
  syncVModel: true,
  checkedValue: props.value,
})
</script>
<style lang="scss" scoped></style>
