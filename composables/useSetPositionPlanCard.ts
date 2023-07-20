export default function () {
  const plan = ref<HTMLElement>()
  const cardOpen = ref(false)
  const card = ref<HTMLElement>()
  const cardCoords = ref({})
  const changeHouse = (evt: MouseEvent) => {
    if (window.innerWidth >= 1024) {
      const targetEl = evt?.currentTarget as HTMLElement | null
      if (targetEl) {
        targetEl.classList.add('active')
        const miniCard = targetEl.querySelector('.card-mini')
        cardOpen.value = true
        if (miniCard) {
          setTimeout(() => {
            if (plan.value && card.value) {
              const cardCoordsStart = card.value?.getBoundingClientRect()
              const planCoords = plan.value?.getBoundingClientRect()
              const miniCardCoords = miniCard.getBoundingClientRect()
              const X = miniCardCoords.left - planCoords.left
              const Y = miniCardCoords.top - planCoords.top
              const gapX = 16
              const offsetLeft = X - cardCoordsStart.width - gapX
              const offsetBottom = Y + cardCoordsStart.height
              const offsetRight = X + miniCardCoords.width + gapX

              if (offsetLeft > 0) {
                cardCoords.value = {
                  left: offsetLeft + 'px',
                }
              } else {
                cardCoords.value = {
                  left: offsetRight + 'px',
                }
              }
              if (offsetBottom < planCoords.bottom) {
                cardCoords.value = { ...cardCoords.value, top: Y + 'px' }
              } else {
                cardCoords.value = { ...cardCoords.value, bottom: 0 + 'px' }
              }
            }
          }, 0)
        }
      }
    }
  }
  const leaveHouse = (evt: MouseEvent) => {
    if (window.innerWidth >= 1024) {
      cardOpen.value = false

      const targetEl = evt?.currentTarget as HTMLElement | null
      if (targetEl) {
        targetEl.classList.remove('active')
      }
    }
  }

  const clickHouse = () => {
    if (window.innerWidth < 1024) {
      cardOpen.value = true
      window.addEventListener('click', windowClick)
    }
  }
  const windowClick = (evt: MouseEvent) => {
    let currentTarget = evt.target as HTMLElement | null
    if (currentTarget) {
      if (cardOpen.value) {
        let close = true
        while (currentTarget) {
          if (currentTarget == card.value) {
            close = false
            break
          } else if (currentTarget.classList.contains('house')) {
            close = false
            break
          } else if (currentTarget.classList.contains('plan')) break
          else currentTarget = currentTarget.parentNode as HTMLElement
        }

        if (close) {
          cardOpen.value = false
          window.removeEventListener('click', windowClick)
        }
      }
    }
  }
  const closeCard = () => {
    cardOpen.value = false
  }
  return {
    plan,
    cardOpen,
    cardCoords,
    card,
    changeHouse,
    leaveHouse,
    clickHouse,
    closeCard,
  }
}
