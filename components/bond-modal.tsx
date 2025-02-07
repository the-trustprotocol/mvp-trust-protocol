'use client'
import { useRouter } from 'next/navigation'
import { ParticleBackground } from "@/components/home/particle-bg"
import { X, AlertTriangle } from 'lucide-react'
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
  const [confirmBreak, setConfirmBreak] = useState(false)

  if (!isOpen) return null

  const handleSubmit = () => {
    if (type === 'break' && !confirmBreak) {
      setConfirmBreak(true)
      return
    }

    if (type === 'create') {
      showTransactionToast('123223232323')
      console.log('Creating bond:', { address, amount })
    } else if (type === 'withdraw') {
      console.log('Withdrawing bond:', { address, amount })
    } else if (type === 'break') {
      console.log('Breaking bond:', { address, amount })
    }
    onClose()
    setConfirmBreak(false)
  }

  const modalTitle = {
    create: 'Create Bond',
    withdraw: 'Withdraw Bond',
    break: 'Break Bond'
  }[type]

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

                <h2 className={`text-3xl font-bold mb-12 text-center ${
                  type === 'break' ? 'text-red-600' : 'text-primary-foreground'
                }`}>
                  {modalTitle}
                </h2>

                <div className="w-full max-w-[380px] mx-auto space-y-6">
                  {type === 'break' && (
                    <div className={`p-4 rounded-lg ${
                      confirmBreak ? 'bg-red-100 border-2 border-red-500' : 'bg-yellow-100'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className={confirmBreak ? 'text-red-500' : 'text-yellow-500'} />
                        <span className={`font-semibold ${
                          confirmBreak ? 'text-red-700' : 'text-yellow-700'
                        }`}>
                          {confirmBreak ? 'Final Warning' : 'Warning'}
                        </span>
                      </div>
                      <p className={`text-sm ${
                        confirmBreak ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {confirmBreak 
                          ? 'Breaking this bond will result in a 10% penalty and permanent reputation loss. This action cannot be undone.'
                          : 'Are you sure you want to break this bond? This action will have consequences on your reputation.'}
                      </p>
                    </div>
                  )}

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

                  {/* Slider - Only show for create and withdraw */}
                  {type !== 'break' && (
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
                    className={`w-full py-6 text-lg font-semibold transition-colors mt-8 ${
                      type === 'break'
                        ? confirmBreak
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : 'bg-yellow-600 hover:bg-yellow-700 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                    size="lg"
                  >
                    {type === 'break'
                      ? confirmBreak
                        ? 'Confirm Break Bond'
                        : 'Break Bond'
                      : modalTitle}
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