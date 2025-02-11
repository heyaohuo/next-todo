"use client"

import React from 'react'
import { Button } from '@/components/ui/button'

const PricingCard = ({ title, price, features, isPopular }: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) => (
  <div className={`p-6 rounded-lg shadow-lg ${isPopular ? 'border-2 border-primary scale-105' : 'border border-border'} bg-card`}>
    <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
    <div className="text-center mb-6">
      <span className="text-3xl font-bold">{price}</span>
      <span className="text-muted-foreground">/月</span>
    </div>
    <ul className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <Button className="w-full" variant={isPopular ? "default" : "outline"}>
      立即开始
    </Button>
  </div>
)

const Page: React.FC = () => {
  const pricingPlans = [
    {
      title: "基础版",
      price: "￥99",
      features: [
        "基础AE表达式支持",
        "标准客服支持",
        "基础教程访问",
        "每月5个项目"
      ]
    },
    {
      title: "高阶版",
      price: "￥199",
      features: [
        "高级AE表达式支持",
        "优先客服支持",
        "完整教程访问",
        "每月15个项目",
        "自定义模板"
      ],
      isPopular: true
    },
    {
      title: "终极版",
      price: "￥299",
      features: [
        "全部AE表达式支持",
        "24/7专属客服",
        "专家一对一指导",
        "无限项目使用",
        "自定义模板",
        "API访问权限"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">选择适合您的计划</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  )
}

export default Page 