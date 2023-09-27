<template>
  <SectionFirst
    :history-list="[{ name: 'Главная', to: '/' }, { name: 'Контакты' }]"
  >
    <template #title> Контакты </template>
    <template #text> Описание </template>
    <template #icon>
      <img
        src="/images/icons/first-section/location.svg"
        alt=""
        class="tw-absolute tw-w-[84px] tw-h-[84px] tw-bottom-0 -tw-right-2 lg:tw-w-[234px] lg:tw-h-[234px] lg:-tw-bottom-10 lg:tw-right-10"
      />
    </template>
  </SectionFirst>
  <section>
    <div class="tw-container">
      <TabContacts />
    </div>
  </section>
</template>
<script lang="ts" setup>
useHead({
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=ce866f84-33d0-4ab2-861e-3009442a93d1&coordorder=latlong&lang=ru_RU',
      type: 'text/javascript',
    },
  ],
})
</script>
<style lang="scss" scoped></style>
