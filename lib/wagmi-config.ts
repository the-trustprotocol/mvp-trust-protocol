import { createConfig, http } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, sepolia, base],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id] : http()
  },
  connectors: [
    injected({ target: 'metaMask' }) // Explicitly target MetaMask
  ]
})