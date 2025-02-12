'use client'
import { useRouter } from 'next/navigation'
import { ParticleBackground } from "@/components/home/particle-bg"
import { X, AlertTriangle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { useState } from 'react'
import { showTransactionToast } from '@/components/showTransactionToast'
import { CreateBondForm } from './dashboard/create-bond-form'
import { StakeBondForm } from './dashboard/stake-form'
import { NULL_ADDRESS } from '@/lib/constants'
import { BreakBondForm } from './dashboard/break-bond-form'
import { WithdrawBondForm } from './dashboard/withdraw-form'

export interface BondModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'create' | 'withdraw' | 'break' | 'stake',
  bondAddress?: string

  
}

export function BondModal({ isOpen, onClose, type ,bondAddress}: BondModalProps) {
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [sliderValue, setSliderValue] = useState([50])
  const [isLoading, setIsLoading] = useState(false) // Loading state

  if (!isOpen) return null

  function handleModal(type: 'create' | 'withdraw' | 'break' | 'stake') {
    switch (type) {
      case 'create':
        return <CreateBondForm/>
       
      case 'withdraw':
        // Withdraw bond
        return <WithdrawBondForm  bondAddress={bondAddress ?? NULL_ADDRESS} />
       
      case 'break':
        return <BreakBondForm bondAddress={bondAddress ?? NULL_ADDRESS} />
  
      case 'stake':
        
        return <StakeBondForm bondAddress={bondAddress ?? NULL_ADDRESS} />
        
    }
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
                {handleModal(type)}
      

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
