'use client'

import React from 'react'

import { signOut } from 'next-auth/react'
import PostCard from '../components/PostCard'
import usePosts from '../hooks/usePosts'
import { Post } from '@prisma/client'

const page = () => {

  const {data: homePosts, isLoading, error, mutate:mutateHomePosts} = usePosts()
  return (
    <div className='border-l border-gray-800 h-full overflow-y-scroll'>
      {homePosts.map((item:Post) => (
        <PostCard 
            key={item.id}
            item={item}
        />
      ))}
    </div>
  )
}

export default page