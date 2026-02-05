import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetails = () => {
  const productData = useContext(ProductDataContext)
  const { id } = useParams()

  // Wait for data to load
  if (!productData || productData.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-zinc-900">
        Loading product...
      </div>
    )
  }

  const selectedProduct = productData.find((item) => item.id === Number(id))

  // Handle invalid ID
  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-zinc-900">
        Product not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-8">
      {/* Product Image */}
      <img
        className="w-72 h-72 object-contain rounded-lg shadow-lg"
        src={selectedProduct.image}
        alt={selectedProduct.title}
      />

      {/* Product Details */}
      <div className="flex flex-col max-w-md">
        <h1 className="text-3xl font-bold mb-4">{selectedProduct.title}</h1>
        <p className="text-xl font-semibold text-blue-400 mb-4">${selectedProduct.price}</p>
        <p className="text-gray-300 mb-6">{selectedProduct.description}</p>

        <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-md text-white font-medium w-fit">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
