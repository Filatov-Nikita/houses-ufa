<template>
  <div class="purchase-step-items">
    <article class="purchase-card-item purchase-step-items__item">
      <div class="purchase-card-item__top">
        <div class="purchase-card-item__icon-wrap">
          <BaseIcon fit :name="items[0].icon" />
        </div>
        <span class="purchase-card-item__number">0{{ 1 }}</span>
      </div>
      <div class="purchase-card-item__body">
        <p>{{ items[0].body }}</p>
      </div>
      <div class="purchase-card-item__bottom" v-if="items[0].link">
        <NuxtLink class="purchase-card-item__link" :to="items[0].link.to">
          {{ items[0].link.label }}
        </NuxtLink>
      </div>
    </article>
    <article class="purchase-card-item purchase-step-items__item">
      <div class="purchase-card-item__top">
        <div class="purchase-card-item__icon-wrap">
          <BaseIcon fit :name="items[1].icon" />
        </div>
        <span class="purchase-card-item__number">0{{ 2 }}</span>
      </div>
      <div class="purchase-card-item__body">
        <p>{{ items[1].body }}</p>
      </div>
      <div class="purchase-card-item__bottom">
        <button class="purchase-card-item__link" @click="zamerShowed = true">
          Вызвать оценщика
        </button>
      </div>
    </article>
    <article class="purchase-card-item purchase-step-items__item">
      <div class="purchase-card-item__top">
        <div class="purchase-card-item__icon-wrap">
          <BaseIcon fit :name="items[2].icon" />
        </div>
        <span class="purchase-card-item__number">0{{ 3 }}</span>
      </div>
      <div class="purchase-card-item__body">
        <p>{{ items[2].body }}</p>
      </div>
    </article>
    <ModalZamer v-model:showed="zamerShowed" />
  </div>
</template>

<script setup lang="ts">
  import ModalZamer from './ModalZamer/index.vue';

  const zamerShowed = ref(false);

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
    },
    {
      body: 'Заключить договор, если вас устроили результаты оценки, и забронировать понравившееся вам жильё',
      icon: 'file-2',
    },
  ];
</script>
