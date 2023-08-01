export interface Theme {
  default: string,
  bgColor: string,
  textColor: string,
  hover: string,
  focus: {
    bgColor: string,
    textColor: string,
  },
  filled: {
    bgColor: string,
    textColor: string,
  },
  borderColor: string,
  error: {
    borderColor: string
  }
}
