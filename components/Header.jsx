
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 gap-4">
        <div className="flex gap-x-[20px]">
            <Link href="/">LOGO图像</Link>
            <Link className="hidden lg:block" href="/products">产品</Link>
            <Link className="hidden lg:block" href="/pricing">价格</Link>
            <Link className="hidden lg:block" href="/dashboard">教程</Link>
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