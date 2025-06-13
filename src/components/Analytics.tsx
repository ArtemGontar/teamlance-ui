'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Google Analytics ID - replace with actual GA4 measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_location: url,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Analytics component to include in layout
export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view on route change
    trackPageView(window.location.href)
  }, [pathname])

  return (
    <>
      {/* Google Analytics Script */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_location: window.location.href,
              page_title: document.title,
            });
          `,
        }}
      />
    </>
  )
}

// Hook for tracking conversion events
export const useAnalytics = () => {
  const trackCTAClick = (location: string, ctaText: string) => {
    trackEvent('cta_click', 'engagement', `${location}_${ctaText}`)
  }

  const trackSignupStart = () => {
    trackEvent('signup_start', 'conversion')
  }

  const trackNewsletterSignup = () => {
    trackEvent('newsletter_signup', 'engagement')
  }

  const trackSectionView = (sectionName: string) => {
    trackEvent('section_view', 'engagement', sectionName)
  }

  return {
    trackCTAClick,
    trackSignupStart,
    trackNewsletterSignup,
    trackSectionView,
  }
}
