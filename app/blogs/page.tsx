"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Select, SelectItem, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select'
import { SelectGroup } from '@radix-ui/react-select'

const Page: React.FC = () => {
  const router = useRouter()
  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('all')

  // 轮播图数据
  const carouselItems = [
    { id: 1, title: '特色博客 1', image: '/blog1.jpg', description: '精选内容展示 1' },
    { id: 2, title: '特色博客 2', image: '/blog2.jpg', description: '精选内容展示 2' },
    { id: 3, title: '特色博客 3', image: '/blog3.jpg', description: '精选内容展示 3' },
  ]

  // 博客数据
  const blogs = [
    { id: 1, title: '博客使用服务器端获取', description: '描述 1', category: 'tech' },
    { id: 2, title: '动态消息通过API获取', description: '描述 2', category: 'life' },
    { id: 3, title: '博客 3', description: '描述 3', category: 'tech' },
    // ... 更多博客数据
  ]

  // 处理博客点击
  const handleBlogClick = (id: number) => {
    router.push(`/blogs/${id}`)
  }

  // 过滤博客
  const filteredBlogs = blogs.filter(blog => {
    const matchesFilter = blog.title.toLowerCase().includes(filter.toLowerCase()) ||
                         blog.description.toLowerCase().includes(filter.toLowerCase())
    const matchesCategory = category === 'all' || blog.category === category
    return matchesFilter && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 轮播区域 */}
      {/* <section className="mb-12">
        <Carousel items={carouselItems} className="h-[400px] md:h-[500px]" />
      </section> */}

      {/* 筛选区域 */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="搜索博客..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="md:w-[300px]"
          />
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择分类" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">所有分类</SelectItem>
                <SelectItem value="tech">技术</SelectItem>
                <SelectItem value="life">生活</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* 博客网格 */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map(blog => (
          <article
            key={blog.id}
            onClick={() => handleBlogClick(blog.id)}
            className="group bg-card hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden cursor-pointer"
          >
            <div className="aspect-video bg-muted" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {blog.title}
              </h3>
              <p className="text-muted-foreground">{blog.description}</p>
              <div className="mt-4">
                <span className="inline-block px-3 py-1 text-sm bg-secondary rounded-full">
                  {blog.category}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Page 