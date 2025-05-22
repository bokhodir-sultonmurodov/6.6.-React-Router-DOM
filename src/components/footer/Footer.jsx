import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-gradient-to-r from-blue-800 to-cyan-700 text-white mt-16">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

         <div className=" items-center gap-2 text-white">
          <div className=" bg-white text-blue-700 font-extrabold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            D
          </div>
          <h1 className="text-2xl font-semibold mb-2">DummyJson</h1>
          
           <p className="text-sm opacity-80">
            Your favorite place to explore creative recipes, discover tasty dishes,
            and find cooking inspiration for every day!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <p><a className="hover:underline">Home</a></p>
            <p><a className="hover:underline">Recipe</a></p>
            <p><a className="hover:underline">Posts</a></p>
            <p><a className="hover:underline">User</a></p>
            <p><a className="hover:underline">Sign In</a></p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm">Email: support@recipeverse.com</p>
          <p className="text-sm mb-2">Phone: +998 90 123 45 67</p>

          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-yellow-300">Facebook</a>
            <a href="#" className="hover:text-yellow-300">Instagram</a>
            <a href="#" className="hover:text-yellow-300">YouTube</a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-400 text-center py-4 text-sm mt-6">
        © 2025 RecipeVerse. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer