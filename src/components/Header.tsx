'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-primary-800 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Teamlance</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-800 transition-colors duration-200">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-800 transition-colors duration-200">
              How It Works
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-800 transition-colors duration-200">
              Pricing
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/login" 
              className="text-gray-600 hover:text-primary-800 transition-colors duration-200"
            >
              Login
            </a>
            <a 
              href="/signup" 
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-600 hover:text-primary-800 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-gray-600 hover:text-primary-800 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-600 hover:text-primary-800 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-2 border-t border-gray-200">
                <a
                  href="/login"
                  className="block px-3 py-2 text-gray-600 hover:text-primary-800 hover:bg-gray-50 rounded-md"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="block px-3 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 mt-2 text-center font-medium"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
