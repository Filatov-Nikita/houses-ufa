<template>
  <div class="section">
    <div class="wrapper">
      <PageInfo title="Контакты">
        <template #icon="attrs">
          <svg v-bind="attrs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238 255">
            <path d="M215.75 280H149.288C160.453 270.031 170.981 259.372 180.812 248.086C217.698 205.664 237.25 160.944 237.25 118.75C237.25 87.3882 224.792 57.3108 202.615 35.1346C180.439 12.9584 150.362 0.5 119 0.5C87.6382 0.5 57.5608 12.9584 35.3846 35.1346C13.2084 57.3108 0.75 87.3882 0.75 118.75C0.75 160.944 20.2478 205.664 57.1875 248.086C67.0185 259.372 77.5473 270.031 88.7119 280H22.25C19.3989 280 16.6646 281.133 14.6486 283.149C12.6326 285.165 11.5 287.899 11.5 290.75C11.5 293.601 12.6326 296.335 14.6486 298.351C16.6646 300.367 19.3989 301.5 22.25 301.5H215.75C218.601 301.5 221.335 300.367 223.351 298.351C225.367 296.335 226.5 293.601 226.5 290.75C226.5 287.899 225.367 285.165 223.351 283.149C221.335 281.133 218.601 280 215.75 280ZM119 75.75C127.505 75.75 135.818 78.2719 142.89 82.9968C149.961 87.7217 155.472 94.4374 158.727 102.295C161.981 110.152 162.833 118.798 161.174 127.139C159.515 135.48 155.419 143.142 149.406 149.156C143.392 155.169 135.73 159.265 127.389 160.924C119.048 162.583 110.402 161.731 102.545 158.477C94.6874 155.222 87.9717 149.711 83.2468 142.64C78.5219 135.568 76 127.255 76 118.75C76 107.346 80.5303 96.4085 88.5944 88.3444C96.6585 80.2803 107.596 75.75 119 75.75Z" />
          </svg>
        </template>
      </PageInfo>
    </div>
  </div>

  <section class="section">
    <div class="wrapper">
      <TabContacts />
    </div>
  </section>
</template>
<script lang="ts" setup>
  import { useBreadcrumbsStore } from '@/stores/breadcrumbs';
  import { useRoute } from 'vue-router';

  const bread = useBreadcrumbsStore();

  bread.set([
    { label: 'Главная', to: '/' }, { label: 'Контакты', to: '/contacts' },
  ]);

  usePageMicro('contacts.json');

  const route = useRoute();

  useCanonical({ preserveParams: [ 'type' ] });

  await getSeo();

  function getSeo() {
    const type = route.query.type ?? 'office' as string;
    switch(type) {
      case 'office': return usePageSeo('contacts/offices.json');
      case 'service': return usePageSeo('contacts/services.json');
    }
  }
</script>
<style lang="scss" scoped></style>
