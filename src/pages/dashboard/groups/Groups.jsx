import React from 'react'
import { FaUsers, FaPlus, FaCrown } from 'react-icons/fa'

const Group = () => {
  const bestGroups = [
    { name: 'Frontend Devs', members: 28 },
    { name: 'UI/UX Designers', members: 17 },
    { name: 'React Gurus', members: 12 },
  ]

  return (
    <div className="bg-gradient-to-br from-indigo-700 via-purple-800 to-black text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-5 bg-indigo-900 rounded-full shadow-xl">
              <FaUsers size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold">Group Management</h1>
              <p className="text-white/70">Organize and manage all user groups here.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl font-semibold shadow-lg transition">
            <FaPlus /> Add New Group
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-indigo-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Total Groups</h2>
            <p className="text-3xl mt-2 font-extrabold">15</p>
          </div>
          <div className="bg-purple-700 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Active Students</h2>
            <p className="text-3xl mt-2 font-extrabold">142</p>
          </div>
          <div className="bg-violet-600 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">New Gropus</h2>
            <p className="text-3xl mt-2 font-extrabold">4</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaCrown /> Top Performing Groups
          </h3>
          <ul className="space-y-3">
            {bestGroups.map((group, index) => (
              <li key={index} className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition">
                <span className="text-lg font-semibold">{group.name}</span>
                <span className="bg-indigo-500 px-3 py-1 rounded-full text-sm">{group.members} members</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Group
