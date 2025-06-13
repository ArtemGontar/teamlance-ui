'use client'

import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)] opacity-20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6">
            {/* Social Proof */}
            <div className="flex items-center mb-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white" />
              </div>
              <p className="ml-3 text-sm text-gray-600">
                Join 500+ founders building together
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find Your Perfect{' '}
              <span className="text-primary-800">Co-Founder</span>,{' '}
              <span className="text-orange-600">Skip the Chaos</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Intelligent matching for startup builders. Connect with mission-aligned partners through{' '}
              <strong className="text-gray-900">AI-powered compatibility analysis</strong>, not keyword spam.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-orange-600 border border-transparent rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 transform hover:scale-105"
              >
                Find Your Co-Founder
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-800 bg-white border border-primary-300 rounded-lg hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No spam, ever
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free to start
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Privacy first
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative">
              {/* Placeholder for hero illustration */}
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-primary-100 to-orange-100 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated connection visual */}
                  <div className="relative w-80 h-80">
                    {/* Central node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                    
                    {/* Connecting nodes */}
                    <div className="absolute top-8 left-8 w-12 h-12 bg-primary-500 rounded-full shadow-lg animate-pulse" />
                    <div className="absolute top-8 right-8 w-12 h-12 bg-success-500 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-primary-700 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1s' }} />
                    <div className="absolute bottom-8 right-8 w-12 h-12 bg-orange-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
                    
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                      <line x1="60" y1="60" x2="160" y2="160" stroke="#3B82F6" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="260" y1="60" x2="160" y2="160" stroke="#10B981" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="60" y1="260" x2="160" y2="160" stroke="#1E3A8A" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" className="animate-pulse" />
                      <line x1="260" y1="260" x2="160" y2="160" stroke="#F97316" strokeWidth="2" opacity="0.6" strokeDasharray="5,5" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 bg-white px-3 py-2 rounded-lg shadow-lg text-sm">
                  <span className="text-success-600 font-semibold">98% Match</span>
                </div>
                <div className="absolute bottom-6 left-6 bg-white px-3 py-2 rounded-lg shadow-lg text-sm">
                  <span className="text-primary-600 font-semibold">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
