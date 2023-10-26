<template>
  <section>
    <div class="wrapper">
      <ProjectCard />
    </div>
  </section>
  <section>
    <div class="wrapper">
      <h2 class="section__title section__top">Другие проекты коттеджей</h2>
      <ProjectList disabledTabs />
    </div>
  </section>
  <section>
    <div class="wrapper">
      <QuestionForm  />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ProjectCard from '@/other-modules/project-card/index.vue';
  import ProjectList from '@/other-modules/project-list/index.vue';
  import QuestionForm from '@/other-modules/question-form/index.vue';
</script>
