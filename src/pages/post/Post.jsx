import React, { useEffect, useState } from 'react'
import { RingLoader } from 'react-spinners'
import { api } from '../../api'
import { useNavigate } from 'react-router-dom'

const Post = () => {
  const navigate = useNavigate()

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    api
      .get("https://dummyjson.com/posts")
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
    <div className="mt-11">
      {loading ? (
        <div className="flex justify-center my-10">
          <RingLoader color="#ec4899" size={60} />
        </div>
      ) : (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.posts?.map((post) => (
            <div 
              key={post.id}
              className="rounded-xl p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-white text-indigo-600 font-bold flex items-center justify-center shadow-md">
                  {`U${post.userId}`}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">User {post.userId}</h3>
                  <p className="text-sm text-white/80">Post ID: {post.id}</p>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-2 line-clamp-1">{post.title}</h2>

              <p className="text-white/90 text-sm line-clamp-3 mb-4">{post.body}</p>

              <button onClick={()=> navigate(`/post/${post.id}`)} className="mt-auto text-sm font-semibold px-4 py-2 rounded-full bg-white text-pink-600 hover:bg-pink-100 transition cursor-pointer">
                Read More →
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Post
