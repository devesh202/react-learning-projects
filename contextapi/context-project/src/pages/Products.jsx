import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
  const data = useContext(ProductDataContext)

  if (!data || data.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white text-2xl">
        Loading products...
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Our Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center justify-between w-60"
          >
            <img
              className="h-40 w-full object-contain mb-4"
              src={item.image}
              alt={item.title}
            />
            <h2 className="text-white font-semibold text-center mb-2 line-clamp-2">
              {item.title}
            </h2>
            <p className="text-blue-400 font-bold mb-4">${item.price}</p>
            <Link
              to={`/products/${item.id}`}
              className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md font-medium"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
 