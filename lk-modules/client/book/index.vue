<template>
  <div class="estate-book-module">
    <BtnsGoBack class="estate-book-module__back" />
    <h1 class="estate-book-module__title">
      Онлайн-бронирование
    </h1>
    <FlatCard
      v-if="book.currentType === 'flat'"
      :id="book.currentId!"
    />
    <PersonalData class="estate-book-module__profile" />
  </div>
</template>

<script setup lang="ts">
  import FlatCard from './components/FlatCard.vue';
  import PersonalData from './components/PersonalData.vue';
  import { useEstateBook, type EstateTypes } from './store';

  const book = useEstateBook();
  const route = useRoute();

  watch(() => route.query.id, (id) => {
    if(id) book.setCurrentId(+id);
  }, { immediate: true });

  watch(() => route.query.type, (type) => {
    if(type) book.setCurrentType(type as EstateTypes);
  }, { immediate: true });
</script>

<style scoped lang="scss">
  .estate-book-module {
    padding: 40px;
    border-radius: 16px;
    @apply tw-bg-white;

    &__title {
      font-size: 32px;
      line-height: 1.25;
      margin-bottom: 40px;
      @apply tw-text-text00;
    }

    &__back {
      margin-bottom: 24px;
    }

    &__profile {
      margin-top: 40px;
    }
  }
</style>
