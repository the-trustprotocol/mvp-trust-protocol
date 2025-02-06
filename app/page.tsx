import Image from "next/image";
import { Button } from "@/components/ui/button";
import Features from "@/components/home/features";
import HowItWorks from "@/components//home/how-it-works";
import UseCases from "@/components/home/use-cases";
import Footer from "@/components/layout/footer";
import { ParticleBackground } from "@/components/home/particle-bg";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] z-10">
      <div style={{ zIndex: -10 }} className="overflow-hidden">
        <ParticleBackground />
      </div>
      <div className="container mx-auto px-4">
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
            Programmable onchain trust primitive
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-primary-foreground font-light mb-8">
            Trust protocol is an open-source layer zero for trust.
          </p>
          <div className="flex items-center w-full justify-center space-x-4">
            <Button
              type="submit"
              className="h-12 rounded-lg text-base whitespace-nowrap w-full sm:w-auto text-white"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="text-lg text-white bg-primary-foreground"
            >
              White paper
            </Button>
          </div>
        </div>

        <Features />
        <HowItWorks />
        <UseCases />
      </div>
      <Footer />
    </div>
  );
}
