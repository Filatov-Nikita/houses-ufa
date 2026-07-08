export const useScreensStore = defineStore('useScreensStore', {
  state: () => ({
    screens: {
      md: false,
      lg: false,
      xl: false,
      '2xl': false,
    },
  }),
  getters: {},
  actions: {
    media(size: 'md' | 'lg' | 'xl' | '2xl') {
      const objScreens: Record<string, string> = {
        md: '768px',
        lg: '1024px',
        xl: '1420px',
        '2xl': '1920px',
      }
      for (let key in objScreens) {
        const mediaQuery = window.matchMedia(`(min-width: ${objScreens[key]})`)

        handleTabletChange(mediaQuery, this, key)
        mediaQuery.addEventListener('change', (e) =>
          handleTabletChange.bind(this, e)(this, key)
        )
      }
      function handleTabletChange(e: any, _this: any, screen: any) {
        if (e.matches) {
          _this.screens[screen] = true
          return true
        } else {
          _this.screens[screen] = false
        }
      }

      return this.screens
    },
  },
})
