<template>
  <div>
    <div class="tw-overflow-auto tw-mb-6 xl:tw-mb-8">
      <BaseTabsGroup v-model="tab" class="">
        <BaseTabsGroupItem v-for="item in tabs" :name="item.name">
          {{ item.title }}
        </BaseTabsGroupItem>
      </BaseTabsGroup>
    </div>
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
              src: [
                '/assets/images/img/test.png',
                '/assets/images/img/test.png',
              ],
            }"
          />
        </div>
        <BaseButton theme="white" class="tw-w-full tw-mt-6 xl:tw-mt-8">
          Показать ещё 8 из 128
        </BaseButton>
      </BaseTabsTabContentItem>
    </BaseTabsTabContent>
  </div>
</template>
<script lang="ts" setup>
const tab = ref('')
const tabs = [
  {
    name: 'all',
    title: 'Все',
  },
  {
    name: 'townhouses',
    title: 'Таунхаусы',
  },
  {
    name: 'houses',
    title: 'Дома',
  },
]
onMounted(() => {
  tab.value = tabs[0].name
  console.log(tab)
})
</script>
<style lang="scss" scoped></style>
