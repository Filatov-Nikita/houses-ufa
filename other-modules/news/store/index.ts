interface Article {
  id: number
  body: string
  published_at: string | null
  source_url: string | undefined
  title: string
  type: 'tiding' | 'mass_media'
  seo: {
    description: string | null
    key_words: string | null
    title: string | null
  }
  images: string[]
}
export const useNewsStore = defineStore('newsStore', () => {
  const config = useRuntimeConfig()
  const step = 6

  const tidingList = ref<Article[]>([])
  const totalTiding = ref<number>(0)
  const currentCountTiding = ref<number>(step)
  const massMediaList = ref<Article[]>([])
  const totalMassMedia = ref<number>(0)
  const currentCountMassMedia = ref<number>(step)
  const countShowTiding = ref(0)
  const countShowMassMedia = ref(0)
  const getArticles = async (type: 'tiding' | 'mass_media') => {
    const { data } = await useDataFetch('press-center/articles', {
      baseURL: config.public.baseURL,
      query: {
        type,
        per_page:
          type === 'tiding'
            ? currentCountTiding.value
            : currentCountMassMedia.value,
      },
    })
    if (type === 'tiding') {
      totalTiding.value = data.value.meta.total
      tidingList.value = data.value.data as Article[]
      const { countShow } = usePaginate(
        tidingList.value.length,
        totalTiding.value,
        step
      )
      currentCountTiding.value += toRaw(countShow.value)
      countShowTiding.value = toRaw(countShow.value)
    }

    if (type === 'mass_media') {
      totalMassMedia.value = data.value.meta.total
      massMediaList.value = data.value.data as Article[]
      const { countShow } = usePaginate(
        massMediaList.value.length,
        totalMassMedia.value,
        step
      )
      currentCountMassMedia.value += toRaw(countShow.value)
      countShowTiding.value = toRaw(countShow.value)
    }
  }

  return {
    step,
    getArticles,
    tidingList,
    massMediaList,
    totalMassMedia,
    totalTiding,
    countShowTiding,
    countShowMassMedia,
  }
})
