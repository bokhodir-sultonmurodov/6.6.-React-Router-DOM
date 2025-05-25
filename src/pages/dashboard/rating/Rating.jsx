import React from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-8 text-black rounded-2xl shadow-lg flex items-center gap-6">
      <FaStar size={60} />
      <div>
        <h2 className="text-3xl font-bold mb-2">Rating & Reviews</h2>
        <p>View and manage user feedback and course ratings.</p>
      </div>
    </div>
  )
}

export default Rating
  