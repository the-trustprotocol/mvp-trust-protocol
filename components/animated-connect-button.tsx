"use client"

import { useRef, useEffect, useState, useMemo } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { X } from "lucide-react"

const ForceGraph2D = dynamic(() => import("react-force-graph-2d"), { ssr: false })

const AnimatedWalletConnect = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const graphRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
          <button className="absolute top-4 right-4" onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </button>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-xl">
            <div className="p-8 text-center w-full">
              <h1 className="text-4xl font-bold text-gray-800 mb-8">Connect Wallet</h1>
              <ConnectButton label="Connect Now" />
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedWalletConnect;
