import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const Profile = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-8 text-white rounded-2xl shadow-lg flex items-center gap-6">
      <FaUserCircle size={60} />
      <div>
        <h2 className="text-3xl font-bold mb-2">User Profile</h2>
        <p>Manage personal information, security settings, and more.</p>
      </div>
    </div>
  )
}

export default Profile
