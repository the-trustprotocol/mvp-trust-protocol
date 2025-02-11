'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Features from "@/components/home/features";
import HowItWorks from "@/components//home/how-it-works";
import UseCases from "@/components/home/use-cases";
import Footer from "@/components/layout/footer";
import { ParticleBackground } from "@/components/home/particle-bg";
import { ArrowRight } from "lucide-react";
import { WalletModal } from "@/components/wallet-modal";
import { useState } from "react";
import Header from "@/components/layout/header";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] z-10">
      <div className="fixed inset-0 z-0">
        {/* <ParticleBackground />s */}
      </div>
      <Header />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center py-16">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/trust-hero.png"
              width={400}
              height={400}
              alt="Trust Protocol"
              className="w-[50%] "
            />
          </div>
          <h1 className="text-2xl lg:text-5xl text-muted-foreground font-bold tracking-wider mb-2">
            Programmable Onchain Trust Primitive
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-primary-foreground font-light mb-8 pt-2">
            Trust protocol is an open-source layer zero for trust.
          </p>
          <div className="flex items-center w-full justify-center space-x-4">
          

          <Button asChild>
             <Link href="/dashboard" className="text-white">Goto App</Link>
           </Button>
           
          </div>
        </div>

          <Features />
          <HowItWorks />
          <UseCases />
        </div>
        <Footer />
      </div>
    
    </>
  );
}