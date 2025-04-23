export interface FileItem {
  id: number,
  extension: string,
  name: string,
  size_human_readable: string,
  size_in_bytes: number,
  url: string,
}

export interface DocumentItem {
  id: number,
  priority: number,
  name: string,
  url: string | null,
  file: FileItem | null,
}
