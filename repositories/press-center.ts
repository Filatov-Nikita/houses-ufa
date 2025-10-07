import type { ResponseSimple } from '@/types/response';

export default function(appFetch: typeof $fetch) {
  return {
    notes() {
      return appFetch<ResponseSimple<NoteItem[]>>('lobby/press-center/notes');
    },
  }
}

export interface NoteItem {
  id: number,
  title: string,
  priority: number,
  file: NoteFile,
}

export interface NoteFile {
  id: number,
  name: string,
  extension: string,
  size_readable_size: string,
  size_in_bytes: number,
  url: string,
}
