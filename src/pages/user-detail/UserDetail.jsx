import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { RingLoader } from 'react-spinners'

const UserDetail = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    api
      .get(`https://dummyjson.com/users/${id}`)
      .then(res => {
        setUser(res.data)
        setError(null)
      })
      .catch(err => {
        setError('User not found or error occurred')
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[400px]">
        <RingLoader color="#3b82f6" size={60} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 text-xl mt-10">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-md mt-10 flex gap-6">
      <img
        src={user.image}
        alt={`$ {user.firstName} ${user.lastName}`}
        className="w-48 h-48 object-cover rounded-full shadow-md"
      />
      <div>
        <h1 className="text-3xl font-bold mb-6">{user.firstName} {user.lastName}</h1>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Address:</strong> {user.address.address}, {user.address.city}, {user.address.state}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Company:</strong> {user.university}</p>
      </div>
    </div>
  )
}

export default UserDetail
