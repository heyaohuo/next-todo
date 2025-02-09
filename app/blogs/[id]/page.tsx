"use client"

import React from 'react'
import { useParams } from 'next/navigation'

const BlogDetail: React.FC = () => {
  const params = useParams()
  const id = params.id

  // 模拟获取博客详情数据
  const blogDetails = {
    1: { title: 'Blog 1', content: 'Content for Blog 1' },
    2: { title: 'Blog 2', content: 'Content for Blog 2' },
    3: { title: 'Blog 3', content: 'Content for Blog 3' },
  }

  const blog = blogDetails[Number(id) as 1 | 2 | 3]

  if (!blog) {
    return <div>博客未找到</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.content}</p>
    </div>
  )
}

export default BlogDetail 