<template>
  <div class="section">
    <ArticleCard :article-id="+$route.params.id" />
  </div>

  <section class="section">
    <div class="wrapper">
      <div class="section__top tw-flex tw-justify-between">
        <h2 class="section__title">Другие новости</h2>
      </div>
      <ArticlesReadMoreList :article-id="+$route.params.id" />
    </div>
  </section>

  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>
<script lang="ts" setup>
  import ArticlesReadMoreList from '@/other-modules/articles-readmore-list/index.vue';
  import ArticleCard from '@/other-modules/article-card/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';

  const bread = useBreadcrumbsStore();

  bread.set([ { label: 'Главная', to: '/' }, { label: 'Пресс-центр', to: '/articles' } ]);
</script>
