import React from 'react'
import { FaUserShield, FaUsersCog, FaKey } from 'react-icons/fa'

const Admin = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-700 via-orange-700 to-red-700 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-yellow-400 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-red-500 opacity-20 blur-3xl rounded-full z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-5 bg-yellow-800 rounded-full shadow-xl">
              <FaUserShield size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-wide">Admin Panel</h1>
              <p className="text-yellow-100/80">Manage users, permissions, and system settings.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-500 px-4 py-2 rounded-xl font-semibold shadow-lg transition">
            <FaUsersCog /> Manage Admins
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-yellow-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Total Admins</h2>
            <p className="text-3xl mt-2 font-extrabold">8</p>
          </div>
          <div className="bg-orange-700 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Active admins </h2>
            <p className="text-3xl mt-2 font-extrabold">5</p>
          </div>
          <div className="bg-red-700 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Waiting</h2>
            <p className="text-3xl mt-2 font-extrabold">3</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaKey /> Admins
          </h3>
          <ul className="space-y-3">
            <li className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition">
              <span className="text-lg font-semibold">John Doe</span>
              <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm">Super Admin</span>
            </li>
            <li className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition">
              <span className="text-lg font-semibold">Brad Johnsonn</span>
              <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm">Moderator</span>
            </li>
            <li className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition">
              <span className="text-lg font-semibold">Lara Croft</span>
              <span className="bg-yellow-600 px-3 py-1 rounded-full text-sm">Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Admin
