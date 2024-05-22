import type { DocFile } from '../types';
import { get as getToken } from '@/helpers/tokens';
import { getMonts } from '@/helpers/index';

export interface Params {
  month: number,
  year: number,
}

function getCurrentParams() {
  const dt = new Date();

  return {
    month: dt.getMonth() + 1,
    year: dt.getFullYear(),
  }
}

type ResponseList = { data: DocFile[] };

export default function () {
  const params: Params = reactive(getCurrentParams());

  const loadingAll = ref(false);
  const loadingDocs = reactive<Record<string, boolean>>({});

  const { data: docs, pending: showingList, refresh: showDocs } = useDataFetch<ResponseList>(`b2y/closing-docs`, {
    key: 'docs_list_show',
    baseURL: useRuntimeConfig().public.rootApi,
    headers: {
      Accept: 'application/json',
    },
    query: computed(() => params),
    immediate: false,
  });

  async function download(blob: Blob, filename: string) {
    const filepath = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = filepath;
    a.download = filename;
    document.body.append(a);
    a.click();
    a.remove();
  }

  async function downloadDoc(doc: DocFile) {
    loadingDocs[doc.id] = true;
    const url = new URL(`b2y/closing-docs/${doc.id}`, useRuntimeConfig().public.rootApi);
    const res = await fetch(url, {
      headers: { 'Authorization': 'Bearer ' + getToken()?.token ?? '' },
    });
    const blob = await res.blob();
    download(blob, doc.file_name);
    delete loadingDocs[doc.id];
  }

  async function downloadAll() {
    loadingAll.value = true;
    const url = new URL(`b2y/closing-docs`, useRuntimeConfig().public.rootApi);
    url.searchParams.append('month', params.month.toString());
    url.searchParams.append('year', params.year.toString());

    const res = await fetch(url, {
      headers: {
        'Authorization': 'Bearer ' + getToken()?.token ?? '',
        'Accept': 'application/zip',
      },
    });
    const blob = await res.blob();
    const filename = `Закрывающая документация - ${getMonts()[params.month - 1]} ${params.year}.zip`;
    download(blob, filename);
    loadingAll.value = false;
  }

  return {
    params,
    docs,
    showingList,
    loadingAll,
    loadingDocs,
    showDocs,
    downloadDoc,
    downloadAll,
  }
}
