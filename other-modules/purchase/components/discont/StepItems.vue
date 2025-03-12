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
        <a class="purchase-card-item__link" href="tel:+7 347 294-00-40">+7 347 294-00-40</a>
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
        <p v-html="items[1].body"></p>
      </div>
      <div class="purchase-card-item__bottom">
        <p class="tw-text-text02 tw-text-sm tw-leading-relaxed">
          ВАЖНО! Этого человека не&nbsp;должно быть в&nbsp;нашей базе - засчитываются только уникальные пользователи. Программа не&nbsp;распространяется на&nbsp;родственников первого круга (родители, супруги, дети)
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
    </article>
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      body: 'Позвоните на&nbsp;номер',
      icon: 'cellphone',
    },
    {
      body: 'Назовите имя и&nbsp;номер телефона человека, которому вы&nbsp;рекомендовали компанию «Жилой&nbsp;квартал»',
      icon: 'edit',
    },
    {
      body: 'После приобретения объекта (полного расчета за&nbsp;объект) ожидайте звонок нашего сотрудника о&nbsp;выплате вознаграждения.<br>Подробную информацию о&nbsp;программе можно найти <a class="purchase-card-item__link" href="https://disk.yandex.ru/d/3E9S_2LjJ0kLKg" target="_blank">здесь</a>.',
      icon: 'info',
    },
  ];
</script>

<style scoped lang="scss">

</style>
