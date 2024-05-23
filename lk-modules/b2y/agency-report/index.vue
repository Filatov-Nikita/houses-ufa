<template>
  <div class="agency-report page-card">
    <h1 class="agency-report__title">Отчет агентства</h1>
    <div class="agency-report__wrap">
      <AgencyData :profile="profile?.data" />
      <TradeStat :current-stat="todayStat.stat.value?.data" :prev-stat="prevStat.stat.value?.data" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useProfile } from '@/lk-modules/b2y/profile/composables/useProfile';
  import { useStat } from '@/lk-modules/stat-month/composables/useStat';
  import AgencyData from './components/AgencyData.vue';
  import TradeStat from './components/TradeStat.vue';

  const dt = new Date();

  const statQuery = ref({
    month: dt.getMonth() + 1,
    year: dt.getFullYear(),
  });

  const prevStatQuery = computed(() => {
    const clone = new Date(dt);
    clone.setMonth(clone.getMonth() - 1);
    return {
      month: clone.getMonth() + 1,
      year: clone.getFullYear(),
    }
  });

  const { profile, showProfile } = useProfile();
  const todayStat = useStat('b2y', statQuery, 'today_stat');
  const prevStat = useStat('b2y', prevStatQuery, 'prev_stat');

  showProfile();
  todayStat.showStat();
  prevStat.showStat();
</script>

<style scoped lang="scss">
  .agency-report {
    &__title {
      color: #181818;
      font-size: 32px;
      line-height: 1.2;
      margin-bottom: 32px;
    }

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 48px;
    }
  }
</style>
