<template>
  <div>
    <BaseTabsGroup v-model="store.favType">
      <BaseTabsGroupItem name="flats">Квартиры</BaseTabsGroupItem>
      <BaseTabsGroupItem name="towns">Коттеджи и таунхаусы</BaseTabsGroupItem>
      <BaseTabsGroupItem name="places">Кладовые</BaseTabsGroupItem>
      <BaseTabsGroupItem name="parkings">Машиноместо</BaseTabsGroupItem>
    </BaseTabsGroup>
  </div>
</template>

<script setup lang="ts">
  import { useFavList } from '../store';

  const store = useFavList();
</script>
