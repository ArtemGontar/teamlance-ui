'use client'

import { useEffect, useRef } from 'react'

export function useIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) {
  const targetRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = targetRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback(entry)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [callback, options])

  return targetRef
}

// Hook for tracking section views
export function useSectionTracking(sectionName: string) {
  const handleIntersection = () => {
    // Track section view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'section_view', {
        event_category: 'engagement',
        event_label: sectionName,
      })
    }
  }

  return useIntersectionObserver(handleIntersection, {
    threshold: 0.3,
  })
}
