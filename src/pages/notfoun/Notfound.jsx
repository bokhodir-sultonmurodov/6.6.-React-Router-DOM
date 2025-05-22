import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()  
  return (
     <div className="min-h-[400px] flex flex-col items-center justify-center bg-red-50 px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-red-700 mb-6">Page Not Found</p>
      <button
        onClick={()=> navigate("/")}
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Home
      </button>
    </div>
  )
}

export default Notfound