'use client'
import { useRouter } from 'next/navigation'
import { ParticleBackground } from "@/components/home/particle-bg"
import { X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from 'react'
import { showTransactionToast } from '@/components/showTransactionToast'

export interface BondModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'create' | 'withdraw' | 'break'
}

export function BondModal({ isOpen, onClose, type }: BondModalProps) {
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [sliderValue, setSliderValue] = useState([50])
  const [isLoading, setIsLoading] = useState(false) // Loading state

  if (!isOpen) return null

  const handleSubmit = async () => {
    setIsLoading(true) // Start loading

    // Artificial delay of 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000))

    if (type === 'create') {
      showTransactionToast('Bond created successfully!')
      console.log('Creating bond:', { address, amount })
    } else if (type === 'withdraw') {
      showTransactionToast('Bond withdrawn successfully!')
      console.log('Withdrawing bond:', { address, amount })
    } else if (type === 'break') {
      showTransactionToast('Bond broken successfully!')
      console.log('Breaking bond')
    }

    setIsLoading(false) // Stop loading
    onClose() // Close modal after processing
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
                  {type === 'create'
                    ? 'Create Bond'
                    : type === 'withdraw'
                    ? 'Withdraw Bond'
                    : 'Break Bond'}
                </h2>

                <div className="w-full max-w-[380px] mx-auto space-y-6">
                  {type === 'break' ? (
                    <>
                      {/* Confirmation text */}
                      <p className="text-sm text-red-600 text-center">Are you sure?</p>
                      {/* Big red confirmation button */}
                      <Button
                        onClick={handleSubmit}
                        className="w-full py-6 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors mt-8"
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading ? 'Processing...' : 'Confirm break bond'}
                      </Button>
                    </>
                  ) : (
                    <>
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
                      {type === 'withdraw' && (
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
                      )}

                      {/* Submit Button */}
                      <Button
                        onClick={handleSubmit}
                        className="w-full py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors mt-8"
                        size="lg"
                        disabled={isLoading}
                      >
                        {isLoading
                          ? 'Processing...'
                          : type === 'create'
                          ? 'Create Bond'
                          : 'Withdraw Bond'}
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
