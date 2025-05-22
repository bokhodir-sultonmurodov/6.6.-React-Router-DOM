import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RingLoader } from 'react-spinners'

const Home = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dummyjson.com/products")
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
          <RingLoader color="#facc15" size={60} />
        </div>
      ) : (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data?.products?.map(product => (
            <div key={product.id} className='border rounded-lg shadow hover:shadow-xl transition duration-300'>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='w-full h-64 object-contain p-4'
              />
              <div className='p-4 flex flex-col justify-between'>
                <h3 className='text-lg font-semibold line-clamp-2'>{product.title}</h3>
                <p className='text-sm text-gray-500 line-clamp-2 mt-1'>{product.description}</p>
                <div className='mt-3'>
                  <p className='text-xl font-bold text-green-600'>
                    ${product.price}
                    <span className='text-sm text-gray-500 font-normal'> / piece</span>
                  </p>
                  <p className='text-sm text-gray-600'>Min. order: 1 piece</p>
                </div>
                <p className='text-sm text-blue-600 mt-2'>Brand: {product.brand}</p>
                <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
                  Contact supplier
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home
