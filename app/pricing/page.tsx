"use client"

import React, { useEffect } from 'react'

const Page: React.FC = () => {

  useEffect(() => {
    const url = "https://heyaoyue.app.n8n.cloud/webhook-test/fd2cf024-7dd4-49be-b801-c5edd6e49634/pase/5";
    const test = async () => {
      try {
        const response = await fetch(url, {
          "mode": "cors"
        });
        const contentType = response.headers.get('content-type');
        console.log(contentType)
        const js = await response.json();
        console.log(js);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('An unknown error occurred');
        }
      }
    }
    test();
  }, [])

  return (
    <div className="grid gap-y-3">
      <div className=" bg-slate-100 flex justify-center items-center h-[250px]">
        <h3>CardA——价格说明</h3>
      </div>
      <div className=" bg-slate-100 flex justify-center items-center h-[250px]">
        <h3>CardA——对比免费和付费价格</h3>
      </div>
      <div className=" bg-slate-100 flex justify-center items-center h-[250px]">
        <h3>CardA——对比免费和付费功能</h3>
      </div>
      <div className=" bg-slate-100 flex justify-center items-center h-[250px]">
        <h3>CardA——付费问答</h3>
      </div>
      <div className=" bg-slate-100 flex justify-center items-center h-[250px]">
        <h3>CardA——Footer</h3>
      </div>
    </div>
  )
}

export default Page 