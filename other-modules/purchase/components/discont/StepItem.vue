<template>
  <article class="purchase-card-item">
    <div class="purchase-card-item__top">
      <div class="purchase-card-item__icon-wrap">
        <BaseIcon fit :name="text.icon" />
      </div>
    </div>
    <div class="purchase-card-item__body">
      <p v-html="text.body"></p>
    </div>
  </article>
</template>

<script setup lang="ts">
  const text = {
    body: 'После приобретения объекта (полного расчета за&nbsp;объект) ожидайте звонок нашего сотрудника о&nbsp;выплате вознаграждения.<br>Подробную информацию о&nbsp;программе можно найти <a class="purchase-card-item__link" href="https://disk.yandex.ru/d/3E9S_2LjJ0kLKg" target="_blank">здесь</a>.',
    icon: 'info',
  };
</script>

<style scoped lang="scss"></style>
