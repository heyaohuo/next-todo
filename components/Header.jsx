"use client"

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 gap-4">
        <div className="flex items-center gap-x-[20px]">
            <Link href="/">
              <Image src="/imgs/modal.jpg" style={{width:'auto', height:'auto'}} priority={false} width={40} height={40} className="rounded-full" alt="s" />
            </Link>
            <Link className="hidden lg:block" href="/products">产品</Link>
            <Link className="hidden lg:block" href="/pricing">价格</Link>
            <Link className="hidden lg:block" href="/dashboard">教程</Link>
            <Link className="hidden lg:block" href="/help">帮助</Link>
        </div>
        <div>
        <Link className="" href="/manager">
          免费尝试
        </Link>
        </div>
    </div>
  )
}

export default Header