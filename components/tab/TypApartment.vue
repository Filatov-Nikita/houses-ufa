<template>
  <BaseTabsGroup v-model="tab" class="tw-mb-6 lg:tw-mb-8">
    <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
      {{ item.title }}
    </BaseTabsGroupItem>
  </BaseTabsGroup>
  <BaseTabsTabContent v-model="tab">
    <BaseTabsTabContentItem name="all">
      <div
        class="tw-grid lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4 lg:tw-gap-5"
      >
        <CardsApartmentMini
          v-for="n in 4"
          v-bind="{
            title: 'Брайтон Плюс',
            type: 'Коттедж',
            square: '409.52',
            src: ['/assets/images/img/test.png', '/assets/images/img/test.png'],
          }"
        >
          <NuxtLink to="/">
            <BaseButton class="tw-w-full tw-mt-6">
              Показать 34 планировки
            </BaseButton>
          </NuxtLink>
        </CardsApartmentMini>
      </div>
      <BaseButton theme="white" class="tw-w-full tw-mt-6 xl:tw-mt-8">
        Показать ещё 8 из 129
      </BaseButton>
    </BaseTabsTabContentItem>
  </BaseTabsTabContent>
</template>
<script lang="ts" setup>
const tab = ref('')
const tabs = [
  {
    name: 'all',
    title: 'Все',
  },
  {
    name: '1',
    title: '1-комнатные',
  },
  {
    name: '2',
    title: '2-комнатные',
  },
  {
    name: '3',
    title: '3-комнатные',
  },
]
onMounted(() => (tab.value = tabs[0].name))
</script>
<style lang="scss" scoped></style>
