"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "工作区" },
    { href: "/products", label: "产品" },
    { href: "/pricing", label: "价格" },
    { href: "/blogs", label: "博客" },
    { href: "/help", label: "帮助" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-x-[20px]">
          <Link href="/">
            <Image 
              src="/imgs/modal.jpg" 
              width={40} 
              height={40} 
              className="rounded-full hover:opacity-80 transition-opacity" 
              alt="logo" 
            />
          </Link>
          
          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className={`hover:text-blue-600 transition-colors ${
                  pathname === link.href ? "text-blue-600 font-medium" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/manager"
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            免费尝试
          </Link>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 hover:text-blue-600 transition-colors ${
                pathname === link.href ? "text-blue-600 font-medium" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header; 