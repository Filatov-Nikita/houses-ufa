export interface MenuItem {
  label: string,
  to: string,
  order?: number,
}

export interface Section {
  label: string,
  to?: string,
  order?: number,
  links: MenuItem[],
}
