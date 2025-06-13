import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        {/* 404 illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl text-primary-600 font-bold">404</span>
          </div>
        </div>

        {/* Error message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Let's get you back to finding your perfect co-founder.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-orange-600 border border-transparent rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary-700 bg-primary-50 border border-primary-200 rounded-lg hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
          >
            Contact Support
          </Link>
        </div>

        {/* Popular links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/#features" className="text-primary-600 hover:text-primary-800">
              Features
            </Link>
            <Link href="/#pricing" className="text-primary-600 hover:text-primary-800">
              Pricing
            </Link>
            <Link href="/#how-it-works" className="text-primary-600 hover:text-primary-800">
              How It Works
            </Link>
            <Link href="/signup" className="text-primary-600 hover:text-primary-800">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
