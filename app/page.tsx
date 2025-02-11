export const runtime = 'edge';
import { createClient } from '@/utils/supabase/server'
export const revalidate = 60 

// 创建一个简单的内存缓存
const blogCache = new Map<string, { data: any, timestamp: number }>()

async function getBlogs() {
  const cacheKey = 'blogs'
  const oneWeekInMilliseconds =24 * 60 * 60 * 1000
  
  // 检查缓存中是否有数据
  if (blogCache.has(cacheKey)) {
    const cached = blogCache.get(cacheKey)
    if (cached && (Date.now() - cached.timestamp < oneWeekInMilliseconds)) {
      console.log('从缓存中获取数据')
      return cached.data
    }
  }

  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('blog')
      .select('*')
    
    if (error) {
      console.error('Supabase error:', error)
      return []
    }
    
    // 将数据和当前时间戳存入缓存
    blogCache.set(cacheKey, { data: data || [], timestamp: Date.now() })
    return data || []
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export default async function Page () {

  const blogs = await getBlogs()
  return (
    <div className="grid gap-y-2">
      <div className=" bg-background/80 flex justify-center items-center h-[100px]">
        <h3>CardA——main界面概览</h3>
      </div>
      <div className=" bg-background/80 flex justify-center items-center h-[100px]">
        <h3>CardB——AE表达式</h3>
      </div>
      <div className=" bg-background/80 flex justify-center items-center h-[100px]">
      {blogs.map((b:any) => (
        <li key={b.id}>{b.title} -{b.content}</li>
      ))}

      </div>
      <div className=" bg-background/80 flex justify-center items-center h-[100px]">
        <h3>CardD——AE聊天机器人</h3>
      </div>
      <div className=" bg-background/80 flex justify-center items-center h-[100px]">
        <h3>CardE——AI ChatGPT 4驱动</h3>
      </div>
      <div className=" bg-background/80 flex justify-center items-center h-[100px]">
        <h3>CardF——加入群聊+获取</h3>
      </div>
    </div>
  )
}

