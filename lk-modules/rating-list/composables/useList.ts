import type { StatType } from './useParams';
import { RowAgency } from '../types/agency';
import { RowAgent } from '../types/agent';

export default function useList(type: 'b2t' | 'b2y', month: Ref<number>, tabValue: Ref<StatType>) {

  const query = computed(() => {
    return {
      month: month.value,
    };
  });

  const { data: agencies, execute: showAgencies } = useDataFetch<{ data: RowAgency[] }>(`${type}/rates/agencies/top-10-by-month`, {
    baseURL: useRuntimeConfig().public.rootApi,
    query,
    immediate: false,
    watch: false,
  });

  const { data: agents, execute: showAgents } = useDataFetch<{ data: RowAgent[] }>(`${type}/rates/agents/top-10-by-month`, {
    baseURL: useRuntimeConfig().public.rootApi,
    query,
    immediate: false,
    watch: false,
  });

  const agentItems = computed(() => {
    return agents.value?.data ?? [];
  });

  const agencyItems = computed(() => {
    return agencies.value?.data ?? [];
  });

  watch([tabValue, query], () => {
    switch(tabValue.value) {
      case 'agency': showAgencies(); break;
      case 'agent': showAgents(); break;
    }
  }, { immediate: true });

  return {
    agentItems,
    agencyItems,
  }
}
