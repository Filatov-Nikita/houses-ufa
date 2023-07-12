export interface Size {
  textSize: string,
  lineHeight: string,
  padding: string
}

export interface Theme {
  bgColor: string,
  hover: string,
  press: string,
  textColor: string,
  disabled: string,
  rounded: string,
  sizes: Record<string, Size>
}
