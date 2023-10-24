<template>
  <div>
    <div class="table-head" :class="colClass">
      <div v-for="item in headList" class="table-head__item">
        {{ item.name }}
        <button
          v-if="item.sorted"
          @click="sorted('summ')"
          class="tw-rounded tw-p-1 tw-bg-secondary tw-w-fit"
        >
          <BaseIcon
            name="arrow-top"
            class="tw-w-4 tw-h-4 tw-text-primary tw-transition-transform tw-duration-100 tw-ease-in"
            :class="[
              item.type === targetSort && sortType === 'ba'
                ? 'tw-rotate-0'
                : 'tw-rotate-180',
            ]"
          />
        </button>
      </div>
    </div>

    <div v-for="item in ordersSorted" class="table-body" :class="colClass">
      <div class="table-body__item">
        {{ item.place }}
      </div>
      <div class="table-body__item">
        {{ item.agentes }}
      </div>
      <div class="table-body__item">
        {{ item.clients }}
      </div>
      <div class="table-body__item">
        {{ item.count }}
      </div>
      <div class="table-body__item">
        {{ item.summ }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  headList: {
    name: string
    type: string
    sorted: boolean
  }[]
  bodyList: {}[]
  colClass: string
}>()
const sortType = ref<'ab' | 'ba'>('ab')
const targetSort = ref()
const ordersSorted = computed(() => {
  if (sortType.value === 'ab')
    return list.value.sort((a, b) => a[targetSort.value] - b[targetSort.value])
  if (sortType.value === 'ba')
    return list.value.sort((a, b) => b[targetSort.value] - a[targetSort.value])
})

const list = ref([{}])

const sorted = (target: string) => {
  targetSort.value = target
  console.log(sortType.value)
  if (sortType.value === 'ab') return (sortType.value = 'ba')
  if (sortType.value === 'ba') return (sortType.value = 'ab')
}
onMounted(() => (list.value = props.bodyList))
watch(
  () => props.bodyList,
  (val) => (list.value = val)
)
</script>
<style lang="scss" scoped>
.table-head {
  @apply tw-bg-base00 tw-rounded-lg  tw-grid  tw-py-4 tw-px-6;

  &__item {
    @apply tw-text-body_s -tw-tracking-875  tw-text-text02 tw-flex tw-gap-2 tw-items-center;
  }
}
.table-body {
  @apply tw-grid  tw-py-4 tw-px-5 tw-transition-transform tw-duration-100 tw-ease-in;
  &:hover {
    @apply tw-bg-base00;
  }
}
</style>
