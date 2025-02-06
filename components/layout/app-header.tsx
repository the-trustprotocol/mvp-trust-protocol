import React from 'react'
import { Button } from '../ui/button'
import { Trophy, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AppHeader() {
  return (
     <header className="sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] w-full">
     <div className="container mx-auto flex h-[70px] items-center justify-between ">
     <div className="flex items-center space-x-2">
          <Image src="/unn_finance.webp" width={40} height={40} alt="Trust Protocol" />
          <Link href="/" className="text-xl md:text-2xl font-serif text-primary font-bold tracking-wider">
            TRUST
          </Link>
        </div>
       <div className="flex items-center gap-4">
         <Button variant="outline" className="gap-2">
           <Trophy className="h-4 w-4" />
           Leaderboard
         </Button>
         <Button variant="outline" className="gap-2">
           <Wallet className="h-4 w-4" />
           Wallet
         </Button>
       </div>
     </div>
   </header>
  )
}
