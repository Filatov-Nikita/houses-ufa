export interface Image {
  id:            number;
  height:        number | null;
  size_in_bytes: number;
  url:           string;
  width:         number | null;
}

export interface File {
  id:            number;
  name:          string;
  size_in_bytes: number;
}

export interface FileExtented {
  id: number,
  name: string,
  extension: string,
  size_readable_size: string,
  size_in_bytes: number,
  url: string,
}
