"use client"
import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';


type Product = {
  id: number;
  title: string;
  content: string;
};

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchItems = async () => {
    try {
      
      // 检查缓存是否存在
      const cachedData = localStorage.getItem('productsCache');
      const cacheTimestamp = localStorage.getItem('productsCacheTimestamp');
      const now = new Date().getTime();
      
      // 如果缓存存在且未过期(24小时内)
      if (cachedData && cacheTimestamp && (now - parseInt(cacheTimestamp)) < 24 * 60 * 60 * 1000) {
        setProducts(JSON.parse(cachedData));
      } else {
        // 如果没有缓存或缓存已过期,发送请求
        const res = await axios.get('/api/supabase');
        setProducts(res.data);
      // 存储数据到缓存
        localStorage.setItem('productsCache', JSON.stringify(res.data));
        localStorage.setItem('productsCacheTimestamp', new Date().getTime().toString());
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearItems = () => {
    setProducts([]);
    // 清除缓存
    localStorage.removeItem('productsCache');
    localStorage.removeItem('productsCacheTimestamp');
  }


  return (
    <div className="grid gap-y-3">
      <div className=" bg-background/80 flex justify-center items-center h-[250px]">
        <Button 
        onClick={fetchItems}
        variant="outline"
        >获取数据</Button>
        <Button 
        onClick={clearItems}
        variant="outline"
        >删除数据</Button>
      </div>
      <div className="bg-background/80 flex justify-center items-center h-[250px]">
        <ul>
          {products.length > 0 ? products.map(p => (
            <li key={p.id} className='font-semibold text-foreground'>{p.title} -{p.content}</li>
          )) : <h3 className='font-semibold text-foreground '>没有产品</h3>}
        </ul>
      </div>
    </div>
  )
}
