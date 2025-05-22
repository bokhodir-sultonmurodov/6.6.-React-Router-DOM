import React from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gradient-to-r from-cyan-600 to-blue-800 text-white shadow-md p-4'>
       <div className="container mx-auto ">
       <div className="flex items-center gap-2 text-white">
          <div className="bg-white text-blue-700 font-extrabold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            D
          </div>
          <h1 className="text-2xl font-semibold tracking-wide">DummyJson</h1>
        </div>
       </div>
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
  <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-sm">
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome Back</h2>

    <form className="space-y-4">
      <input
        type="email"
        required
        placeholder="Enter your email"
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <input
        type="password"
        required
        placeholder="Enter your password"
        className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
      >
        Sign In
      </button>
    </form>

    <button onClick={()=> navigate("/")}
      className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-lg font-medium transition"
    >
      Go Home
    </button>

    <p className="text-center text-sm text-gray-500 mt-5">
      Don’t have an account?{" "}
      <a href="/register" className="text-blue-600 hover:underline">
        Register
      </a>
    </p>
  </div>
</div>



    </div>
  )
}

export default Login