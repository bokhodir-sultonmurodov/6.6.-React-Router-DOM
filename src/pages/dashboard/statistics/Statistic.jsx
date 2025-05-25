import React from 'react'
import { FaChartBar } from 'react-icons/fa'

const Statistic = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-8 text-white rounded-2xl shadow-lg flex items-center gap-6">
      <FaChartBar size={60} />
      <div>
        <h2 className="text-3xl font-bold mb-2">Statistics</h2>
        <p>Analyze user behavior, progress, and platform growth.</p>
      </div>
    </div>
  )
}

export default Statistic
