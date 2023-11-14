interface Item {
  color: string,
  icon: string,
}

export const data: Record<string, Item> = {
  bank: {
    color: '#4BA4ED',
    icon: 'placemarks-bank',
  },
  shop: {
    color: '#EF546C',
    icon: 'placemarks-shop',
  },
  cafe: {
    color: '#48CCA4',
    icon: 'placemarks-cafe',
  },
  park: {
    color: '#55D679',
    icon: 'placemarks-park',
  },
  razv: {
    color: '#7C4EDA',
    icon: 'placemarks-ticket',
  },
  edu: {
    color: '#EBC74F',
    icon: 'placemarks-edu',
  },
  sport: {
    color: '#F1704F',
    icon: 'placemarks-sport',
  },
  beauty: {
    color: '#F255A4',
    icon: 'placemarks-beauty',
  },
};
