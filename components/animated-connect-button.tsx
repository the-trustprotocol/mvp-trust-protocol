"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import dynamic from "next/dynamic"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false })

const AnimatedWalletConnect = () => {
  const graphRef = useRef<any>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const graphData = useMemo(() => {
    const nodes = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      group: Math.floor(i / 20),
    }))
    const links = []
    for (let i = 0; i < nodes.length; i++) {
      const numLinks = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < numLinks; j++) {
        links.push({
          source: i,
          target: (i + Math.floor(Math.random() * 20) + 1) % nodes.length,
        })
      }
    }
    return { nodes, links }
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#cdffd8] to-[#94b9ff] overflow-hidden">
      <div className="absolute inset-0">
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          nodeColor={(node) => ["#cdffd8", "#b4e4ff", "#94b9ff", "#9ea1d4", "#a8d5e2"][node.group]}
          nodeRelSize={4}
          linkColor={() => "rgba(255,255,255,0.2)"}
          linkWidth={1}
          backgroundColor="rgba(0,0,0,0)"
          width={dimensions.width}
          height={dimensions.height}
          d3AlphaDecay={0.01}
          d3VelocityDecay={0.08}
          cooldownTime={Number.POSITIVE_INFINITY}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
          <div className="p-8 text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 tracking-tight">Connect Wallet</h1>
            <div className="mx-auto"><ConnectButton  label="Connect Now"/></div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AnimatedWalletConnect

