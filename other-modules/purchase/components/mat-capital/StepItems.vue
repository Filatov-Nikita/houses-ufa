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
    </article>
    <div class="purchase-step-items__item last-step">
      <img class="last-step__img" src="../../images/family-step.jpg" width="660" height="348" alt="фото радостного ребенка">
    </div>
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      body: 'Подайте заявку на получение ипотеки в выбранном банке и дождитесь одобрения',
      icon: 'edit',
    },
    {
      body: 'Оформите у нотариуса обязательство о выделении доли детям в приобретённой квартире после полного погашения жилищного кредита',
      icon: 'file-text',
    },
    {
      body: 'Заполните образец заявления в Пенсионном фонде с указанием цели, на которую хотите направить помощь от государства',
      icon: 'unlink',
    },
    {
      body: 'Подпишите договор ипотеки и соглашение о купле-продаже недвижимости',
      icon: 'file-dooble',
    },
    {
      body: 'Зарегистрируйте сделку в Росреестре и получите зарегистрированный договор купли-продажи',
      icon: 'ros-reestr',
    },
  ];
</script>

<style scoped lang="scss">
  .last-step {
    min-height: 232px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;

    &__img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
