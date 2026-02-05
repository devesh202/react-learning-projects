import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white gap-6">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center">
        Welcome to Our Store
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 text-center max-w-md">
        Discover the best products curated just for you. Click below to explore our full collection.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate('/products')}
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
      >
        Explore all Products
      </button>
    </div>
  )
}

export default Home
