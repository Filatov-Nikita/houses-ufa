<template>
  <div class="purchase-step-items">
    <article
      class="purchase-card-item purchase-step-items__item"
      v-for="(item, index) in items"
    >
      <div class="purchase-card-item__top">
        <div class="purchase-card-item__icon-wrap">
          <BaseIcon fit :name="item.icon" />
        </div>
        <span class="purchase-card-item__number">0{{ index + 1 }}</span>
      </div>
      <div class="purchase-card-item__body">
        <p>{{ item.body }}</p>
      </div>
      <div class="purchase-card-item__bottom" v-if="item.link">
        <NuxtLink class="purchase-card-item__link" :to="item.link.to">
          {{ item.link.label }}
        </NuxtLink>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      body: 'Выбрать квартиру или дом вашей мечты и оставить заявку на услугу Трейд-ин',
      icon: 'house-2',
      link: {
        label: 'Выбрать недвижимость',
        to: '/main-filter',
      }
    },
    {
      body: 'Оценить вашу недвижимость при помощи нашего квалифицированного оценщика',
      icon: 'profile-full',
      link: {
        label: 'Вызвать оценщика',
        to: '/main-filter',
      }
    },
    {
      body: 'Заключить договор, если вас устроили результаты оценки, и забронировать понравившееся вам жильё',
      icon: 'file-2',
    },
  ];
</script>
