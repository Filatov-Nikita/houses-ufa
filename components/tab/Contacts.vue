<template>
  <div class="tw-w-full tw-max-w-full tw-overflow-y-hidden tw-mb-6 lg:tw-mb-8">
    <BaseTabsGroup v-model="tab">
      <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
        {{ item.title }}
      </BaseTabsGroupItem>
    </BaseTabsGroup>
  </div>
  <BaseTabsTabContent v-model="tab">
    <BaseTabsTabContentItem name="office" key="office">
      <MapContacts />
    </BaseTabsTabContentItem>
    <BaseTabsTabContentItem
      v-if="serviceList"
      name="service"
      key="service"
      class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-2"
    >
      <div
        class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-6 tw-grid tw-gap-16 lg:tw-gap-20"
        v-for="item in serviceList.data"
        :key="item.id"
      >
        <div>
          <h4 class="tw-text-h5 lg:tw-text-h4 tw-mb-2">
            {{ item.name }}
          </h4>
          <p v-if="item.comment" class="tw-text-body_m">
            {{ item.comment }}
          </p>
        </div>
        <div>
          <a
            v-if="item.phone_number"
            :href="`tel:${item.phone_number}`"
            class="tw-text-h6 lg:tw-text-h5 tw-mb-1"
          >
            {{ item.phone_number }}
          </a>
          <a
            v-else-if="item.email"
            :href="`mailto:${item.email}`"
            class="tw-text-h6 lg:tw-text-h5 tw-mb-1"
          >
            {{ item.email }}
          </a>
        </div>
      </div>
    </BaseTabsTabContentItem>
  </BaseTabsTabContent>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const tab = computed({
  get() {
    return (route.query.type ?? 'office') as string
  },
  set(type) {
    router.replace({ query: { type } })
  },
})

const tabs = [
  {
    name: 'office',
    title: 'Офисы продаж',
  },
  {
    name: 'service',
    title: 'Сервисные службы',
  },
]

interface ServiceItem {
  id: number,
  comment: string | null,
  email: string | null,
  name: string,
  phone_number: string | null,
  priority: string,
}

const { data: serviceList } = await useDataFetch<{ data: ServiceItem[] }>('about/desks');
</script>
<style lang="scss" scoped></style>
