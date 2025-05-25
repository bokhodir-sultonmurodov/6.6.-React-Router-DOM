import React, { useEffect, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { RingLoader } from 'react-spinners';
import { api } from '../../api';
import { useNavigate } from 'react-router-dom';


function MyComponent({ isLoading }) {
  return isLoading ? (
    <RingLoader color="#007bff" size={50} />
  ) : (
    <p>Data loaded!</p>
  );
}


const Contact = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    api
      .get("/users")
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return (
      <div className='text-center text-4xl text-red-700'>
        <p>Something went wrong</p>
      </div>
    )
  }

  return (
    <div className='mt-11'>
      {loading ? (
        <div className='flex justify-center my-10'>
          <MyComponent isLoading={loading} />
        </div>
      ) : (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {data?.users?.map(user => (
            <div key={user.id} className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <div className='relative'>
                <img 
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className='w-full h-60 object-cover'
                />
                <div onClick={()=> navigate(`/user/${user.id}`)}  className='cursor-pointer absolute bottom-0 w-full bg-gray-900 text-white px-4 py-2 flex items-center gap-2'>
                  <FaUser />
                  <button className='text-sm font-medium '>Focusing</button>
                </div>
              </div>
              <div className='p-5'>
                <h2 className='text-xl font-semibold text-gray-900 mb-1'>{user.firstName} {user.lastName}</h2>
                <p className='text-gray-700 mb-3 text-sm'>
                  Full Stack maker & UI / UX Designer, love hip hop music. Author of Building UI.
                </p>
                <div className='flex items-center gap-2 text-sm text-gray-600 mb-1'>
                  <RiTeamLine />
                  <span>{user.company.name}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600 mb-1'>
                  <CiLocationOn />
                  <span>{user.address.city}</span>
                </div>
                <div className='flex items-center gap-2 text-sm text-gray-600'>
                  <IoMail />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Contact
