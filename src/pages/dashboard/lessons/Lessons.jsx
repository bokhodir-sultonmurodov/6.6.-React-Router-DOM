import React from 'react'
import { FaBook, FaPlayCircle, FaStar } from 'react-icons/fa'

const Lessons = () => {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-cyan-700 to-indigo-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-cyan-400 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-indigo-500 opacity-20 blur-3xl rounded-full z-0"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="p-5 bg-blue-900 rounded-full shadow-xl">
              <FaBook size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-wide">Lessons</h1>
              <p className="text-white/80">Browse and manage your lessons with ease.</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold shadow-lg transition">
            <FaPlayCircle /> Start New Lesson
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-800 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Total Lessons</h2>
            <p className="text-3xl mt-2 font-extrabold">24</p>
          </div>
          <div className="bg-cyan-700 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">Completed</h2>
            <p className="text-3xl mt-2 font-extrabold">15</p>
          </div>
          <div className="bg-indigo-700 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold">New</h2>
            <p className="text-3xl mt-2 font-extrabold">9</p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaStar /> Featured Lessons
          </h3>
          <ul className="space-y-3">
            <li className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition">
              <span className="text-lg font-semibold">HTML</span>
            </li>
            <li className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition">
              <span className="text-lg font-semibold">JavaScript</span>
            </li>
            <li className="bg-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/20 transition">
              <span className="text-lg font-semibold">React</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Lessons
