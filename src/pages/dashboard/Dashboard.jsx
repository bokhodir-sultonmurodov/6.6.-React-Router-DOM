import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaUserShield,
  FaBookOpen,
  FaCreditCard,
  FaUserCircle,
  FaStar,
  FaCog,
  FaShoppingCart,
  FaChartPie,
  FaUserGraduate,
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate()
 

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white font-sans select-none">

      {/* Sidebar */}
      <aside className="w-[280px] h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 flex flex-col justify-between border-r border-gray-700">

        <div>
          <h2 onClick={()=> navigate("/")} className="text-4xl font-extrabold text-amber-400 mb-10 tracking-wider drop-shadow-lg cursor-pointer">
            Dashboard
          </h2>

          <nav className="flex flex-col gap-4">

            <NavLink to="" end className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaUsers className="text-xl" />
              Group
            </NavLink>

            <NavLink to="admin" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaUserShield className="text-xl" />
              Admin
            </NavLink>

            <NavLink to="lesson" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaBookOpen className="text-xl" />
              Lessons
            </NavLink>

            <NavLink to="payment" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaCreditCard className="text-xl" />
              Payment
            </NavLink>

            <NavLink to="profle" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaUserCircle className="text-xl" />
              Profile
            </NavLink>

            <NavLink to="rating" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaStar className="text-xl" />
              Rating
            </NavLink>

            <NavLink to="settings" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaCog className="text-xl" />
              Settings
            </NavLink>

            <NavLink to="shop" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaShoppingCart className="text-xl" />
              Shop
            </NavLink>

            <NavLink to="statistic" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaChartPie className="text-xl" />
              Statistics
            </NavLink>

            <NavLink to="student" className="flex items-center gap-4 px-5 py-3 rounded-3xl font-semibold text-lg bg-amber-900 hover:bg-amber-700 transition-all duration-300">
              <FaUserGraduate className="text-xl" />
              Student
            </NavLink>

          </nav>
        </div>

        <footer className="text-center text-gray-400 text-xs select-text mt-4">
          © 2025 Najot ta‘lim
        </footer>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-slate-800 overflow-auto scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-gray-900 rounded-tl-3xl">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-8 min-h-full border border-white/20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
