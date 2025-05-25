import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Shop = () => {
  return (
    <div className="bg-gradient-to-r from-lime-600 to-green-500 p-8 text-white rounded-2xl shadow-lg flex items-center gap-6">
      <FaShoppingCart size={60} />
      <div>
        <h2 className="text-3xl font-bold mb-2">Shop</h2>
        <p>Purchase resources, books, and tools for better learning.</p>
      </div>
    </div>
  )
}

export default Shop
