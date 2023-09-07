interface Item {
  id: number,
  type: string,
  message: string
}

interface State {
  items: Item[],
  timeout: number
}

export const useNotifyStore = defineStore('notifyStore', {
  state: (): State => ({
    items: [],
    timeout: 2000
  }),
  actions: {
    create(item: Pick<Item, 'message' | 'type'>): void {
      const newItem = Object.assign(item, { id: Math.floor(Math.random() * 10000) });
      this.items.push(newItem);
    },
    remove(id: number): void {
      const ind = this.items.findIndex((item) => item.id === id);
      if(ind !== -1) {
        this.items.splice(ind, 1);
      }
    },
    reset() {
      this.items = [];
    }
  },
});
