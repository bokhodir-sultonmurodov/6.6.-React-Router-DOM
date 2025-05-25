import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'
import { RingLoader } from 'react-spinners'

const PostDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    api
      .get(`/posts/${id}`)
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[400px]'>
        <RingLoader color="#ec4899" size={60} />
      </div>
    )
  }

  if (error) {
    return (
      <div className='text-center text-red-600 text-xl mt-10'>
        <p>Something went wrong.</p>
      </div>
    )
  }

  return (
    <div className='container mx-auto p-6 max-w-3xl'>
      <div className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-2xl shadow-lg p-8'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='w-14 h-14 rounded-full bg-white text-indigo-600 font-bold flex items-center justify-center shadow-md'>
            {`U${post.userId}`}
          </div>
          <div>
            <h3 className='text-lg font-semibold'>User {post.userId}</h3>
            <p className='text-sm text-white/80'>Post ID: {post.id}</p>
          </div>
        </div>

        <h1 className='text-2xl font-bold mb-4'>{post.title}</h1>
        <p className='text-white/90 text-base mb-6'>{post.body}</p>

        <span>Views: {post.views}</span>
       
      </div>
    </div>
  )
}

export default PostDetail
