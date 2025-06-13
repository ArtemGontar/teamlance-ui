export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Teamlance",
  "description": "AI-powered co-founder matching platform for startup builders",
  "url": "https://www.teamlance.com",
  "logo": "https://www.teamlance.com/logo.png",
  "foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "Teamlance Team"
    }
  ],
  "sameAs": [
    "https://twitter.com/teamlance",
    "https://linkedin.com/company/teamlance"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@teamlance.com",
    "contactType": "customer service"
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Co-Founder Matching",
  "description": "AI-powered matching service to connect startup founders with compatible partners",
  "provider": {
    "@type": "Organization",
    "name": "Teamlance"
  },
  "serviceType": "Professional Networking",
  "audience": {
    "@type": "Audience",
    "audienceType": "Startup Founders"
  }
}

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Teamlance",
  "description": "Intelligent co-founder matching platform for startup builders",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web Browser",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free Plan",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Basic profile, 5 matches per month, community access"
    },
    {
      "@type": "Offer", 
      "name": "Pro Plan",
      "price": "29",
      "priceCurrency": "USD",
      "billingDuration": "P1M",
      "description": "Unlimited matches, priority placement, advanced filters"
    },
    {
      "@type": "Offer",
      "name": "Team Plan", 
      "price": "79",
      "priceCurrency": "USD",
      "billingDuration": "P1M",
      "description": "Multi-founder accounts, investor connections, analytics"
    }
  ]
}

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is this different from LinkedIn or AngelList?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike LinkedIn's overwhelming noise or AngelList's enterprise focus, Teamlance is built specifically for early-stage founders. We use AI-powered compatibility analysis to match on motivation, vision, and working style - not just keywords."
      }
    },
    {
      "@type": "Question", 
      "name": "What if I'm still exploring my startup idea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Perfect! Many of our most successful matches happen between founders who are still in the exploration phase. Our platform helps you refine your vision through conversations with like-minded builders."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure match quality?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Our AI analyzes 50+ compatibility factors including working style, values, experience level, and startup stage. We also use behavioral signals and feedback loops to continuously improve match quality."
      }
    }
  ]
}
