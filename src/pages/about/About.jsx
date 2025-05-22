import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IoIosTime } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa"
import { IoGift } from "react-icons/io5"
import { RingLoader } from 'react-spinners'

const About = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dummyjson.com/recipes")
      .then(res => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return (
      <div className='text-center text-4xl text-red-700 mt-10'>
        <p>Something went wrong</p>
      </div>
    )
  }

  return (
    <div className='mt-11'>
      {loading ? (
        <div className='flex justify-center my-10'>
          <RingLoader color="#f97316" size={60} />
        </div>
      ) : (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            data?.recipes?.map(recipe => (
              <div key={recipe.id} className='bg-white rounded-xl overflow-hidden shadow-md relative'>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className='w-full h-56 object-cover'
                />

                <div className='absolute top-4 right-4 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-md'>
                  <FaRegHeart color='white' />
                </div>

                <div className='p-4'>
                  <h2 className='text-xl font-bold mb-1'>{recipe.name}</h2>

                  <div className='flex items-center text-sm text-gray-500 space-x-4 mb-2'>
                    <div className='flex items-center gap-1'>
                      <IoIosTime />
                      <span>{recipe.prepTimeMinutes} mins</span>
                    </div>
                    <div className='flex items-center gap-1'>
                      <IoGift />
                      <span>Serves {recipe.servings}</span>
                    </div>
                  </div>

                  <div className='flex items-center text-yellow-400 text-sm mb-2'>
                    ★★★★★
                  </div>

                  <p className='text-sm text-gray-600 line-clamp-2'>{recipe.instructions}</p>
                </div>

                <div className='bg-red-500 text-white text-center py-2 font-semibold cursor-pointer hover:bg-red-600'>
                  LET'S COOK!
                </div>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}

export default About
