export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="w-16 h-16 bg-primary-800 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
          <span className="text-white font-bold text-2xl">T</span>
        </div>
        
        {/* Loading spinner */}
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
        
        {/* Loading text */}
        <p className="text-gray-600 text-lg">Loading Teamlance...</p>
      </div>
    </div>
  )
}
