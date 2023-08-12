interface State {
  loaders: Record<string | symbol, boolean>,
}

export const useLoadersStore = defineStore('useLoadersStore', {
  state: (): State => ({
    loaders: {}
  }),
  actions: {
    contains(key: string): boolean {
      return !!this.loaders[key];
    },
    append(key: string): string {
      if(!this.contains(key)) {
        this.loaders[key] = true;
      }
      return key;
    },
    remove(key: string): void {
      if(this.contains(key)) {
        delete this.loaders[key];
      }
    },
    resetAll(): void {
      this.loaders = {};
    }
  }
});
