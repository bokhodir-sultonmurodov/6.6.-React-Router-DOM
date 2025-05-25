import React from 'react'
import { FaCog } from 'react-icons/fa'

const Settings = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white p-8 rounded-2xl shadow-lg flex items-center gap-6">
      <FaCog size={60} />
      <div>
        <h2 className="text-3xl font-bold mb-2">Settings</h2>
        <p>Customize your preferences, notifications, and appearance.</p>
      </div>
    </div>
  )
}

export default Settings
