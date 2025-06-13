'use client'

import { Shield, Target, Heart, Sparkles } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Beyond LinkedIn Chaos",
      description: "Curated, relevant matches without the overwhelming noise of traditional networks. No spam, no irrelevant connections.",
      color: "text-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      icon: Target,
      title: "Built for Early Stage",
      description: "Perfect for garage/MVP/pre-seed phase builders, not enterprise hiring. Designed specifically for startup founders.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Heart,
      title: "Soft Skills Matter",
      description: "Working style, motivation, and vision alignment beyond just technical skills. Find partners who share your passion.",
      color: "text-success-600",
      bgColor: "bg-success-50"
    },
    {
      icon: Sparkles,
      title: "Quality Connections",
      description: "Meaningful introductions with clear intent, not endless networking requests. Every connection has purpose.",
      color: "text-primary-700",
      bgColor: "bg-primary-50"
    }
  ]

  return (
    <section id="features" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold text-gray-900 mb-4">
            Why Founders Choose Teamlance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just another networking platform. We're built specifically for early-stage founders 
            who need intelligent, purposeful connections to build their dream teams.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-12 h-1 ${feature.color.replace('text-', 'bg-')} rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of founders who've found their perfect co-founders through intelligent matching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-orange-600 border border-transparent rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
              >
                Start Free Today
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary-700 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ✅ User Story Done: Key Features Block
// - Display 4 key differentiating features in a grid layout
// - Each feature has a clear benefit-focused headline
// - Supporting description explains the value (2-3 sentences)
// - Visual icons or illustrations for each feature
// - Clear contrast with competitor limitations
// - Responsive design (2x2 grid desktop, single column mobile)
// - Interactive elements with appropriate hover states
// - Addresses LinkedIn's noise problem, formal corporate hiring platforms
// - Emphasizes quality over quantity approach
// - Highlights AI-powered intelligence vs. keyword matching
