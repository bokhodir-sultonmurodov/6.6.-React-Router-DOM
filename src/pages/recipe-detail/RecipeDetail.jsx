import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { RingLoader } from 'react-spinners'

const RecipeDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/recipes/${id}`)
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[460px]'>
        <RingLoader color="#facc15" size={60} />
      </div>
    )
  }

  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-10 mb-5'>
      <div>
        <img
          src={data.image}
          alt={data.name}
          className='w-[500px]  h-96  object-contain border rounded-lg shadow'
        />
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>{data.name}</h1>
        <p className='text-gray-700'>Cuisine: {data.cuisine}</p>
        <p className='text-sm text-gray-500'>Difficulty: {data.difficulty} | Prep: {data.prepTimeMinutes} min | Cook: {data.cookTimeMinutes} min</p>
        <p className='text-sm text-gray-500'>Calories: {data.caloriesPerServing} kcal | Servings: {data.servings}</p>
        <p className='text-sm text-gray-500'> Rating:  {data.rating}
            <span className='text-yellow-400'>
                 ★
                </span>
            </p>
        <button className='bg-red-500 text-white text-center py-2 font-semibold cursor-pointer hover:bg-red-600 w-[140px]'>
          Save Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeDetail
