'use client'
import { useRouter } from 'next/navigation'
import { ParticleBackground } from "@/components/home/particle-bg"
import { X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from 'react'

interface BondModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'create' | 'withdraw'
}

export function BondModal({ isOpen, onClose, type }: BondModalProps) {
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [sliderValue, setSliderValue] = useState([50])

  if (!isOpen) return null

  const handleSubmit = () => {
    if (type === 'create') {
      // Handle create bond logic
      console.log('Creating bond:', { address, amount })
    } else {
      // Handle withdraw bond logic
      console.log('Withdrawing bond:', { address, amount })
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      
      {/* Modal - Centered and not blurred */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-lg mx-4">
          <div className="bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] rounded-xl shadow-xl overflow-hidden">
            <div className="relative h-[600px]">
              {/* Particle Background */}
              <div className="absolute inset-0">
                <ParticleBackground />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                {/* Close button */}
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-primary-foreground hover:opacity-70 transition-opacity"
                >
                  <X size={24} />
                </button>

                <h2 className="text-3xl font-bold text-primary-foreground mb-12 text-center">
                  {type === 'create' ? 'Create Bond' : 'Withdraw Bond'}
                </h2>

                <div className="w-full max-w-[380px] mx-auto space-y-6">
                  {/* ENS Domain Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-foreground">
                      ENS Domain or Address
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter ENS domain or address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-white bg-opacity-20 border-none text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>

                  {/* Amount Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-foreground">
                      Amount
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-white bg-opacity-20 border-none text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>

                  {/* Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-primary-foreground">
                      <span>Amount</span>
                      <span>Max amount: {sliderValue[0]}%</span>
                    </div>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                      className="my-4"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    className="w-full py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors mt-8"
                    size="lg"
                  >
                    {type === 'create' ? 'Create Bond' : 'Withdraw Bond'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}