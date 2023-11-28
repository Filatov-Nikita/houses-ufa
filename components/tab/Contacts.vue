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
      name="service"
      key="service"
      class="tw-grid tw-gap-4 lg:tw-gap-5 lg:tw-grid-cols-2"
    >
      <div
        class="tw-bg-white tw-rounded-2xl tw-py-6 tw-px-4 lg:tw-p-6 tw-grid tw-gap-16 lg:tw-gap-20"
        v-for="item in serviceList"
      >
        <div>
          <h4 class="tw-text-h5 lg:tw-text-h4 tw-mb-2">
            {{ item.title }}
          </h4>
          <p class="tw-text-body_m">
            {{ item.text }}
          </p>
        </div>
        <div>
          <a
            :href="`tel:${item.padding}`"
            class="tw-text-h6 lg:tw-text-h5 tw-mb-1"
          >
            {{ item.phone }}
          </a>
          <p class="tw-text-text02">график работы</p>
        </div>
      </div>
    </BaseTabsTabContentItem>
  </BaseTabsTabContent>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const tab = ref('office')
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
const serviceList = [
  {
    id: 1,
    title: 'Отдел снабжения',
    text: 'Предложение строительных и расходных материалов',
    phone: '+7 347 264-54-65',
  },
  {
    id: 2,
    title: 'Отдел снабжения',
    text: 'Предложение строительных и расходных материалов',
    phone: '+7 347 264-54-65',
  },
  {
    id: 3,
    title: 'Пресс-служба',
    text: 'Предложение строительных и расходных материалов',
    phone: '+7 347 264-54-65',
  },
  {
    id: 4,
    title: 'Отдел подбора персонала',
    text: 'Предложение строительных и расходных материалов',
    phone: '+7 347 264-54-65',
  },
]

watch(() => route.query, (query) => {
  if(query.type !== tab.value) {
    tab.value = (query.type ?? 'office') as string;
  }
}, { immediate: true });

watch(tab, (type) => {
  if(type !== route.query.type) {
    router.replace({ query: { type } });
  }
}, { immediate: true });
</script>
<style lang="scss" scoped></style>
