"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Page: React.FC = () => {
  const router = useRouter()

  // 定义博客列表数据
  const blogs = [
    { id: 1, title: 'Blog 1', description: 'Description for Blog 1' },
    { id: 2, title: 'Blog 2', description: 'Description for Blog 2' },
    { id: 3, title: 'Blog 3', description: 'Description for Blog 3' },
  ]

  // 处理博客点击事件
  const handleBlogClick = (id: number) => {
    router.push(`/blogs/${id}`)
  }

  return (
    <div className="grid gap-y-3">
      {blogs.map(blog => (
        <div
          key={blog.id}
          className="bg-slate-100 flex justify-center items-center h-[250px] cursor-pointer"
          onClick={() => handleBlogClick(blog.id)}
        >
          <h3>{blog.title}——{blog.description}</h3>
        </div>
      ))}
    </div>
  )
}

export default Page 