export interface decriptionHeadApartment {
  id: number
  title: string
  price: number
  images: string[]
  href: string
  typeHome: 'apartment' | 'cottage'
}

interface apartmentDescriptionT extends decriptionHeadApartment {
  rooms: number
  square: number
  payment_month: number
  finishing: string
  location: string
  residential_area: string
  inlet: string
  images: string[]
  href: string
}
interface itemApartmentDescriptionT {
  quare_plot?: never
  liter: number
  entrance: number
  floor: number
  apartment_number: string
  balcony: string
}
interface itemCottageDescriptionT {
  liter?: never
  quare_plot: number
  floor: number
  number_home: string
}

export interface apartmentGeneralDescriptionT
  extends itemApartmentDescriptionT,
    apartmentDescriptionT {}

export interface cottageGeneralDescriptionT
  extends apartmentDescriptionT,
    itemCottageDescriptionT {}
