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
        <p v-html="items[0].body"></p>
      </div>
      <div class="purchase-card-item__bottom">
        <button class="purchase-card-item__link" @click="showForm">
          Заполнить форму
        </button>
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
        <p class="tw-text-text02 tw-text-sm tw-leading-relaxed">
          ВАЖНО! Этого человека не должно быть в нашей базе - засчитываются только уникальные пользователи.
        </p>
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
        <p v-html="items[2].body"></p>
      </div>
      <div class="purchase-card-item__bottom">
        <a class="purchase-card-item__link" href="tel:+7 (347) 225-00-73">+7 (347) 225-00-73</a>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
  import { usePublicHeader } from '@/other-modules/public-header/store';
  const items = [
    {
      body: 'Заполните форму обратного звонка<br>на нашем сайте',
      icon: 'edit',
    },
    {
      body: 'Во время звонка нашего специалиста назовите имя и номер телефона человека, которому вы рекомендовали компанию «Жилой квартал»',
      icon: 'cellphone',
    },
    {
      body: 'Более подробная информация<br/>по телефону',
      icon: 'info',
    },
  ];

  function showForm() {
    usePublicHeader().toggleForm();
  }
</script>

<style scoped lang="scss">

</style>
