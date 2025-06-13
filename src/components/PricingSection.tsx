'use client'

import { Check, Star } from 'lucide-react'

export default function PricingSection() {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for exploring and getting started",
      features: [
        "Basic profile creation",
        "5 matches per month",
        "Community access",
        "Basic messaging",
        "Email support"
      ],
      cta: "Start Free",
      href: "/signup",
      popular: false,
      buttonClass: "bg-primary-600 text-white hover:bg-primary-700"
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For serious co-founder seekers",
      features: [
        "Unlimited matches",
        "Priority placement",
        "Advanced filters",
        "Unlimited messaging",
        "Video introductions",
        "Priority support",
        "Success coaching calls"
      ],
      cta: "Upgrade to Pro",
      href: "/signup?plan=pro",
      popular: true,
      buttonClass: "bg-orange-600 text-white hover:bg-orange-700"
    },
    {
      name: "Team",
      price: "$79",
      period: "/month",
      description: "For accelerators and team builders",
      features: [
        "Everything in Pro",
        "Multi-founder accounts",
        "Investor connections",
        "Analytics dashboard",
        "Custom matching criteria",
        "Dedicated success manager",
        "White-label options"
      ],
      cta: "Contact Sales",
      href: "/contact",
      popular: false,
      buttonClass: "bg-gray-900 text-white hover:bg-gray-800"
    }
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {tiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover:shadow-lg ${
                tier.popular 
                  ? 'border-orange-500 scale-105 shadow-lg' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-orange-600 text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                    <span className="text-lg text-gray-600 ml-1">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="flex-shrink-0 w-5 h-5 text-success-600 mt-0.5 mr-3" />
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={tier.href}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${tier.buttonClass}`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need Something Custom?
            </h3>
            <p className="text-gray-600 mb-6">
              We work with accelerators, startup studios, and enterprise clients who need 
              custom solutions for team building and co-founder matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary-700 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
              >
                Contact Sales
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">No Hidden Fees</div>
              <p className="text-gray-600">What you see is what you pay</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">Cancel Anytime</div>
              <p className="text-gray-600">No long-term commitments</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">30-Day Money Back</div>
              <p className="text-gray-600">Risk-free guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ✅ User Story Done: Pricing Section
// - Display 3 pricing tiers in clear comparison format
// - Each tier shows price, key features, and target audience
// - Free tier available to reduce signup friction
// - Clear upgrade path and value proposition for paid tiers
// - Prominent CTA buttons for each tier
// - Visual distinction between tiers with appropriate emphasis on recommended tier
// - Feature comparison with checkmarks/icons
// - No hidden fees messaging, cancel anytime policy
// - Responsive design (3-column desktop, vertical stack mobile)
// - Transparency elements and trust indicators
