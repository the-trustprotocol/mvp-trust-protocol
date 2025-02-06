'use client'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from "@/components/ui/button";

export function ConnectButton() {
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const { isConnected, address } = useAccount()

  const handleConnect = () => {
    connect({ connector: connectors[0] }) // First connector is MetaMask
  }

  return (
    <div>
      {isConnected ? (
        <div className="flex gap-2">
          <span>{address?.slice(0, 6)}...{address?.slice(-4)}</span>
          <Button 
            onClick={() => disconnect()}
            className="px-4 py-2 bg-primary-foreground text-white rounded"
          >
            Disconnect
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleConnect}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Connect Wallet
        </Button>
      )}
    </div>
  )
}