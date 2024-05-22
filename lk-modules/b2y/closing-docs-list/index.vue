<template>
  <section class="closing-docs page-card">
    <h2 class="closing-docs__title">Закрывающая документация</h2>
    <Params
      class="closing-docs__params"
      :disabled-execute="creating || coolDown.started.value"
      v-model:month="params.month"
      v-model:year="params.year"
      @execute="createDocs"
    />
    <Cooldown class="closing-docs__cooldown" v-if="coolDown.started.value" :seconds="coolDown.timer.value" />
    <FileList
      :loading="showingList"
      :loading-all="loadingAll"
      :loading-docs="loadingDocs"
      :files="docs?.data ?? []"
      @download:file="downloadDoc"
      @download:all="downloadAll"
    />
  </section>
</template>

<script setup lang="ts">
  import Params from './components/Params.vue';
  import Cooldown from './components/Cooldown.vue';
  import useClosingDocsList from './composables/useClosingDocsList';
  import useRequestDocs from './composables/useRequestDocs';
  import FileList from './components/FileList.vue';

  const { docs, showingList, params, loadingAll, loadingDocs, showDocs, downloadDoc, downloadAll } = useClosingDocsList();

  const { coolDown, loading: creating, createDocs } = useRequestDocs({
    onCooldownFinish: showDocs,
    query: params,
  });

  await showDocs();
</script>

<style scoped lang="scss">
  .closing-docs {
    &__title {
      margin-bottom: 32px;
      @apply tw-text-2xl tw-text-text00;
    }

    &__params {
      margin-bottom: 32px;
    }

    &__cooldown {
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }
</style>
