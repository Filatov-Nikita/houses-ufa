<template>
  <section class="card-wrapper">
    <div class="section__top">
      <h2 class="section__title">Акции</h2>
    </div>
    <div class="tw-grid tw-grid-cols-2 tw-gap-5">
      <div
        v-for="item in actions"
        class="tw-rounded-2xl tw-p-6 tw-bg-base00 tw-grid tw-gap-12"
      >
        <div class="tw-grid tw-gap-4">
          <h4 class="tw-text-h5">
            {{ item.title }}
          </h4>
          <p class="tw-text-body_s2 -tw-tracking-875 tw-text-text02">
            {{ item.text }}
          </p>
        </div>
        <div class="tw-text-body_s2 -tw-tracking-875 tw-text-text02">
          Дедлайн: {{ item.dedline }}
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'lk',
})
const actions = [
  {
    title: 'Ключ к совершенству!',
    text: 'В период с 15 июля по 31 августа вы получаете уникальную возможность стать обладателем своего идеального жилья с невероятными преимуществами...',
    dedline: '01/11/2023',
  },
  {
    title: 'Ключ к совершенству!',
    text: 'В период с 15 июля по 31 августа вы получаете уникальную возможность стать обладателем своего идеального жилья с невероятными преимуществами...',
    dedline: '01/11/2023',
  },
  {
    title: 'Ключ к совершенству!',
    text: 'В период с 15 июля по 31 августа вы получаете уникальную возможность стать обладателем своего идеального жилья с невероятными преимуществами...',
    dedline: '01/11/2023',
  },
  {
    title: 'Ключ к совершенству!',
    text: 'В период с 15 июля по 31 августа вы получаете уникальную возможность стать обладателем своего идеального жилья с невероятными преимуществами...',
    dedline: '01/11/2023',
  },
]
</script>
<style lang="scss" scoped></style>
