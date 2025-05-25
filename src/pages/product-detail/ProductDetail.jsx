import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { RingLoader } from 'react-spinners'

const ProductDetail = () => {
  const { id } = useParams()
  const [data, detData] = useState(null)
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => {
        detData(res.data)
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
          src={data?.images[index]}
          alt='Main product'
          className='w-full h-96 object-contain border rounded-lg shadow'
        />
        <div className='flex mt-4 space-x-3 overflow-x-auto'>
          {data?.images?.map((item, indexx) => (
            <img
              key={indexx}
              src={item}
              onClick={() => setIndex(indexx)}
              alt=""
              className={"w-20 h-20 object-cover rounded-md mt-1 mb-2 cursor-pointer transition-transform duration-200 hover:scale-105 "}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-between'>
        <h1 className='text-2xl font-bold mb-2'>{data?.title}</h1>
        <p className='text-gray-700 mb-4'>{data?.description}</p>
        <p className='text-xl text-green-600 font-semibold mb-2'>${data?.price}</p>
        <p className='text-sm text-gray-500 mb-4'>Brand: {data?.brand}</p>
        <button className='mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'>
          Contact Supplier
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
