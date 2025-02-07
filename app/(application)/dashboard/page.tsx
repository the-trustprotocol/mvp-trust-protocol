'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  PlusIcon,
  MinusIcon,
  UserIcon,
  HandshakeIcon,
  CurrencyIcon,
  StarIcon,
  WalletIcon,
  SettingsIcon
} from "lucide-react"
import { BondModal } from "@/components/bond-modal"

import { useState } from 'react'

export default function Dashboard() {

  const [isBondModalOpen, setIsBondModalOpen] = useState(false)
  const [bondModalType, setBondModalType] = useState<'create' | 'withdraw'>('create')
  // Mock data
  const bonds = [
    {
      user: 'user2.eth',
      yourStake: '1.5 ETH',
      counterpartyStake: '0.5 ETH',
      type: 'Two-Way',
      initiated: '2024-02-06',
      status: 'Active'
    },
    {
      user: 'user3.eth',
      yourStake: '2.0 ETH',
      counterpartyStake: '0.0 ETH',
      type: 'One-Way',
      initiated: '2024-02-05',
      status: 'Active'
    },
    {
      user: 'user4.eth',
      yourStake: '1.0 ETH',
      counterpartyStake: '1.0 ETH',
      type: 'Two-Way',
      initiated: '2024-02-04',
      status: 'Broken',
      brokenDate: '2024-02-07'
    },
  ]

  return (
    <div className="min-h-screen bg-background bg-gradient-to-r from-[#cdffd8] to-[#94b9ff] ">
      <main className="container mx-auto p-4 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#94b9ff]">
            Trust Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Track and manage your on-chain trust relationships
          </p>
        </div>

        {/* Metrics and Actions Container */}
        <div className="flex flex-col gap-8 flex-shrink-0">
          {/* Metrics Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <CurrencyIcon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Value Locked
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.00</div>
                <p className="text-xs text-muted-foreground mt-1">+0.00% from last month</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <HandshakeIcon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Active Bonds
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-1">1 broken bond</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <StarIcon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Reputation Score
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.0</div>
                <p className="text-xs text-muted-foreground mt-1">Global rank: #-</p>
              </CardContent>
            </Card>
          </div>

          {/* Centered Bond Management */}
          <div className="grid gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-gray-900">Bond Actions</h3>
                <p className="text-sm text-gray-600">Manage your active bonds</p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button 
                  className="h-12 px-6 text-base whitespace-nowrap w-full sm:w-auto bg-[#0066FF] hover:bg-[#0052CC] text-white"
                  onClick={() => {
                    setBondModalType('create')
                    setIsBondModalOpen(true)
                  }}
                >
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Add Funds
                </Button>
                <Button 
                  variant="destructive"
                  className="h-12 px-6 text-base whitespace-nowrap w-full sm:w-auto"
                >
                  <MinusIcon className="mr-2 h-4 w-4" />
                  Withdraw Funds
                </Button>
              </div>
            </div>
          </div>
          <BondModal
            isOpen={isBondModalOpen}
            onClose={() => setIsBondModalOpen(false)}
            type={bondModalType}
          />
</div>

        {/* Scrollable Table Container */}
        <div className="mt-8 flex-1 overflow-hidden min-h-[400px] ">
          <Card className="h-full flex flex-col">
            <CardHeader className="border-b">
              <h2 className="text-xl font-semibold">Active Bonds</h2>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-auto">
              <Table>
                <TableHeader className="bg-secondary/50 sticky top-0">
                  <TableRow>
                    <TableHead>Counterparty</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Your Stake</TableHead>
                    <TableHead>Their Stake</TableHead>
                    <TableHead>Initiated</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bonds.map((bond, index) => (
                    <TableRow key={index} className="hover:bg-secondary/30">
                      <TableCell className="font-medium flex items-center gap-2">
                        <span className="bg-primary/10 p-1 rounded-full">
                          <UserIcon className="w-4 h-4 text-primary" />
                        </span>
                        {bond.user}
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          bond.type === 'Two-Way' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {bond.type}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <WalletIcon className="w-4 h-4 text-muted-foreground" />
                          {bond.yourStake}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <WalletIcon className="w-4 h-4 text-muted-foreground" />
                          {bond.counterpartyStake}
                        </div>
                      </TableCell>
                      <TableCell>{bond.initiated}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          bond.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {bond.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        {bond.status === 'Active' ? (
                          <Button variant="ghost" size="sm" className="gap-2">
                            <SettingsIcon className="w-4 h-4" />
                            Manage
                          </Button>
                        ) : (
                          <span className="text-muted-foreground text-sm">
                            Broken on {bond.brokenDate}
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}