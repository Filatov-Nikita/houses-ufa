<template>
  <div class="tw-grid tw-gap-2">
    <FaqItem v-for="i in qnas" v-bind="i" />
  </div>
</template>
<script lang="ts" setup>
import { type } from 'os'
import FaqItem from './item.vue'
interface Section {
  id: number
  name: string
  priority: number
  target: 'buyer' | 'owner'
}
interface QuestionCard extends Section {
  qnas: [
    {
      id: number
      question: string
      priority: number
      answer: string
    },
  ]
}

const props = defineProps<QuestionCard>()
</script>
<style lang="scss" scoped></style>
