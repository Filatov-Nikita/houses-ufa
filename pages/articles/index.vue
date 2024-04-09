<template>
  <div class="section">
    <div class="wrapper">
      <PageInfo
        title="Пресс-центр"
        text=""
      >
        <template #icon="attrs">
          <svg v-bind="attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 302 212">
            <path d="M280.25 0.5H65.25C59.5478 0.5 54.0792 2.76517 50.0472 6.7972C46.0152 10.8292 43.75 16.2978 43.75 22V183.25C43.75 186.101 42.6174 188.835 40.6014 190.851C38.5854 192.867 35.8511 194 33 194C30.1489 194 27.4146 192.867 25.3986 190.851C23.3826 188.835 22.25 186.101 22.25 183.25V54.25C22.25 51.3989 21.1174 48.6646 19.1014 46.6486C17.0854 44.6326 14.3511 43.5 11.5 43.5C8.64892 43.5 5.91462 44.6326 3.8986 46.6486C1.88259 48.6646 0.75 51.3989 0.75 54.25V183.398C0.789085 191.925 4.20409 200.09 10.2479 206.107C16.2917 212.123 24.4723 215.5 33 215.5H269.5C278.053 215.5 286.256 212.102 292.304 206.054C298.352 200.006 301.75 191.803 301.75 183.25V22C301.75 16.2978 299.485 10.8292 295.453 6.7972C291.421 2.76517 285.952 0.5 280.25 0.5ZM226.5 140.25H119C116.149 140.25 113.415 139.117 111.399 137.101C109.383 135.085 108.25 132.351 108.25 129.5C108.25 126.649 109.383 123.915 111.399 121.899C113.415 119.883 116.149 118.75 119 118.75H226.5C229.351 118.75 232.085 119.883 234.101 121.899C236.117 123.915 237.25 126.649 237.25 129.5C237.25 132.351 236.117 135.085 234.101 137.101C232.085 139.117 229.351 140.25 226.5 140.25ZM226.5 97.25H119C116.149 97.25 113.415 96.1174 111.399 94.1014C109.383 92.0854 108.25 89.3511 108.25 86.5C108.25 83.6489 109.383 80.9146 111.399 78.8986C113.415 76.8826 116.149 75.75 119 75.75H226.5C229.351 75.75 232.085 76.8826 234.101 78.8986C236.117 80.9146 237.25 83.6489 237.25 86.5C237.25 89.3511 236.117 92.0854 234.101 94.1014C232.085 96.1174 229.351 97.25 226.5 97.25Z" />
          </svg>
        </template>
      </PageInfo>
    </div>
  </div>
  <section class="section">
    <div class="wrapper">
      <ArticlesFilter />
    </div>
  </section>
  <section class="section">
    <div class="wrapper">
      <QuestionForm />
    </div>
  </section>
</template>
<script lang="ts" setup>
import ArticlesFilter from '@/other-modules/articles-filter/index.vue';
import QuestionForm from '@/other-modules/question-form/index.vue';
import { useBreadcrumbsStore } from '@/stores/breadcrumbs';
import { useRoute } from 'vue-router';

const route = useRoute();

const bread = useBreadcrumbsStore();

bread.set([
  { label: 'Главная', to: '/' }, { label: 'Пресс-центр', to: '/articles' },
]);

await getSeo();

function getSeo() {
  const type = route.query.type ?? 'tiding' as string;

  switch(type) {
    case 'tiding': return usePageSeo('articles/news.json');
    case 'mass_media': return usePageSeo('articles/smi.json')
  }
}
</script>
<style lang="scss" scoped></style>
