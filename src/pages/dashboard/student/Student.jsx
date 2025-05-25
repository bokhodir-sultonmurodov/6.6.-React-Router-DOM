import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

const Student = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
      <FaGraduationCap size={60} />
      <div>
        <h2 className="text-3xl font-bold mb-2">Student Management</h2>
        <p>Track and manage student performance and profiles.</p>
      </div>
    </div>
  )
}

export default Student
