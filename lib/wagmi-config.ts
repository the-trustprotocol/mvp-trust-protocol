import { createConfig, http } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'TRUST PROTOCOL MVP',
  projectId: 'cbf531fe6f23024fad7a176403e566d5',
  chains: [base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});