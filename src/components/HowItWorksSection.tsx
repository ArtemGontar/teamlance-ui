'use client'

import { User, Brain, Handshake } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      icon: User,
      title: "Share Your Vision",
      description: "Tell us about your startup idea, goals, and ideal co-founder",
      color: "text-primary-600"
    },
    {
      id: 2,
      icon: Brain,
      title: "Get Smart Matches",
      description: "Our AI analyzes compatibility beyond just skills and experience",
      color: "text-orange-600"
    },
    {
      id: 3,
      icon: Handshake,
      title: "Connect with Intent",
      description: "Warm introductions that feel like mutual friend referrals",
      color: "text-success-600"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-section font-semibold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to find your perfect co-founder and build your dream team.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-center">
              {/* Connection Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0">
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              )}
              
              {/* Step Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-2xl mb-6 border-2 border-gray-100 hover:border-gray-200 transition-colors duration-300">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>

                {/* Step Number */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to find your perfect co-founder?
          </p>
          <a
            href="/signup"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-orange-600 border border-transparent rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-105"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  )
}

// ✅ User Story Done: How It Works Section
// - Displays exactly 3 clear steps explaining the process
// - Each step has a distinct icon and descriptive title
// - Brief explanatory text under each step (1-2 sentences max)
// - Visual progression indicators connecting the steps
// - Section is easily scannable and digestible
// - Responsive design (3-column desktop, vertical stack mobile)
// - Interactive hover effects on step cards
// - Clear typography hierarchy following visual design spec
// - Proper semantic HTML structure for accessibility
