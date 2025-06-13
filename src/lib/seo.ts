import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Teamlance',
  description: 'Intelligent matching for startup builders. Connect with mission-aligned partners through AI-powered compatibility analysis, not keyword spam.',
  url: 'https://www.teamlance.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/teamlance',
    linkedin: 'https://linkedin.com/company/teamlance',
    github: 'https://github.com/teamlance',
  },
}

export const generateSEOMetadata = (
  title?: string,
  description?: string,
  path?: string
): Metadata => {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - Find Your Perfect Co-Founder, Skip the Chaos`
  const seoDescription = description || siteConfig.description
  const seoUrl = `${siteConfig.url}${path || ''}`

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      'find co-founder',
      'startup team building', 
      'co-founder matching',
      'startup partner',
      'early stage team',
      'AI-powered co-founder matching',
      'startup networking',
      'founder community',
      'tech co-founder',
      'business co-founder'
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path || '/',
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - AI-Powered Co-Founder Matching`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [siteConfig.ogImage],
      creator: '@teamlance',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
