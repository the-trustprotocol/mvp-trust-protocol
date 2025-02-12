import { createConfig, http } from 'wagmi'
import { base, mainnet, sepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

export const config = getDefaultConfig({
  appName: 'TRUST PROTOCOL MVP',
  projectId: 'cbf531fe6f23024fad7a176403e566d5',
  chains: [base],
  transports:{
    [base.id]:http("https://base-mainnet.g.alchemy.com/v2/i0VnxDFKRiL1F8qF5HdtVo0OcILLv73d")
  },
  // transports: {
  //   base: http(),
  // },
  ssr: true, // If your dApp uses server side rendering (SSR)
});