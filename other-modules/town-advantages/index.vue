<template>
  <EstateAdvantages
    :items="items"
    action-label="Выбрать объект"
    @action="toMainFilter"
  />
</template>

<script setup lang="ts">
import { useTownAdvantages } from './store'

const props = defineProps<{
  townId: number
}>()

const route = useRoute()
const router = useRouter()
const store = useTownAdvantages()

store.setTownId(props.townId)

const items = computed(() => store.advantages?.data ?? [])

await useAsyncData(
  () => {
    return store.show()
  },
  { lazy: true }
)

function toMainFilter() {
  router.push({
    path: '/main-filter',
    query: { filterType: 'towns', object_id: props.townId },
  })
}
</script>
