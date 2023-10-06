interface Section {
  id: number
  name: string
  priority: number
  target: 'buyer' | 'owner'
}
interface QuestionCard extends Section {
  qnas: [
    {
      id: number
      question: string
      priority: number
      answer: string
    },
  ]
}
export const useFaqStore = defineStore('faqStore', () => {
  const config = useRuntimeConfig()
  const sections = ref<Section[]>()
  const list = ref<QuestionCard>()
  const getSections = async () => {
    const { data } = await useDataFetch('press-center/faq/sections', {
      baseURL: config.public.baseURL,
    })
    sections.value = data.value.data as Section[]
  }
  const getList = async (id: number) => {
    const { data } = await useDataFetch(`press-center/faq/sections/${id}`, {
      baseURL: config.public.baseURL,
    })
    list.value = data.value.data as QuestionCard
  }

  return {
    list,
    getList,
    sections,
    getSections,
  }
})
