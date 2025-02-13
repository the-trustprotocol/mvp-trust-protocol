"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] w-full h-[70px] md:flex md:justify-center relative">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between w-full md:w-[70%]">
        <div className="flex items-center space-x-2">
          <Image src="/unn_finance.webp" width={40} height={40} alt="Trust Protocol" />
          <Link href="/" className="text-xl md:text-2xl font-serif text-primary font-bold tracking-wider">
            TRUST
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 font-semibold">
          <a href="https://www.overleaf.com/read/zyhmdxynwxgt#a050e6" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline">
            Whitepaper
          </a>
          <a href="https://t.me/+e2_TcJOoNO80MzA9" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline">
            Telegram
          </a>
          <a href="https://x.com/_trustprotocol" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline">
            Twitter
          </a>
          <a href="https://github.com/the-trustprotocol" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline">
            Github
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <ConnectButton showBalance accountStatus={"address"}/>
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        fixed inset-0 bg-black/0 backdrop-blur-0 md:hidden transition-all duration-500
        ${isMenuOpen ? 'visible bg-black/20 backdrop-blur-sm' : 'invisible'}
      `} onClick={toggleMenu}>
        <nav className={`
          absolute right-0 top-[70px] w-[80%] max-w-[320px] h-[calc(100vh-70px)]
          bg-gradient-to-br from-[#cdffd8]/95 to-[#94b9ff]/95 backdrop-blur-md
          transform transition-all duration-500 ease-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col px-4 py-6 space-y-4
          border-l border-white/20 shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.1)]
        `}>
          <div className="flex flex-col space-y-4">
            {[
              { href: "https://www.overleaf.com/read/zyhmdxynwxgt#a050e6", icon: "📄", label: "Whitepaper" },
              { href: "https://t.me/+e2_TcJOoNO80MzA9", icon: "💬", label: "Telegram" },
              { href: "https://x.com/_trustprotocol", icon: "🐦", label: "Twitter" },
              { href: "https://github.com/the-trustprotocol", icon: "📚", label: "Github" }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-3 rounded-xl bg-white/20 hover:bg-white/30 
                  transition-all duration-300 transform hover:translate-x-2
                  text-primary font-medium"
                onClick={toggleMenu}
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 
                  group-hover:bg-white/30 transition-colors duration-300">
                  {item.icon}
                </span>
                <span className="text-primary-foreground hover:underline">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}