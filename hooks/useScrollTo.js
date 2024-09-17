'use client'

import { navigationHeight } from '@/utils'
import { useEffect, useState } from 'react'

// scroll to section
export default function useScrollTo() {
  const [height, setHeight] = useState(navigationHeight)

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 480px)')) {
        setHeight(50)
      } else {
        setHeight(navigationHeight)
      }
    }

    window.addEventListener('resize', handleResize)
    // cleaner
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToEl = (e) => {
    e.preventDefault()
    const hash = e.target.hash
    const offsetTop = document?.querySelector(hash)?.offsetTop - height
    console.log(offsetTop)

    scroll({
      top: offsetTop,
      behavior: 'smooth',
    })
  }

  return { scrollToEl }
}

// scroll to top
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  })

  useEffect(() => {
    function updatePosition() {
      setScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }
    window.addEventListener('scroll', updatePosition)
    // cleaner
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}
