// import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#cdffd8] to-[#94b9ff]">
    <div className="text-center px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-primary mb-4">
        TRUST PROTOCOL
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-primary-foreground font-light">Programmable onchain trust primitive</p>
    </div>
  </div>
  );
}
