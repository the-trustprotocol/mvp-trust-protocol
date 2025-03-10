// contracts.ts
// == Logs ==
//   bondFactory Token deployed at: 0xA4DE1d466F4E3d24b681EF404d4c9236d299dE9b
//   YieldProviderService deployed at: 0xeD720b5476DAF3b995dc1059002b193BE06df79e
//   UserFactorySettings deployed at: 0x4a3b9f0088Bc1078BbA8a01648Fc990cc53FCf77
//   UserSettings deployed at: 0x15Bb232c6121A9EF9F5eB487660B412beEB9c6Bc
//   Registry deployed at: 0x9e05c6B12A0Fb65785083a79e575D735FcE837Cf
//   IdentityRegistry deployed at: 0x55DDEA578b0a1A7fB6A2dC3c73C709bAae0CE28C
//   UserFactory deployed at: 0xF84B8aB13f6Fe0F6aA72Fbd8Bd7F20d3A4a152Ee


// == Logs ==
//   bondFactory Token deployed at: 0xae8b9251F8d94AF41654F5b41e973ffcD5B45A89
//   YieldProviderService deployed at: 0x7145340054C406e139f8B4BCB69EEDeE749b9BBA
//   UserFactorySettings deployed at: 0xbA7bBF596b20FaaE6FcC1F5F069e5d3Be2908dc5
//   UserSettings deployed at: 0x804dbe3582df3ba70e4f8f59156ecEa38B7A7BF4
//   Registry deployed at: 0x0F9beb188F3Be063aD4EF17A5F773c2a4aC78E2b
//   IdentityRegistry deployed at: 0x0c13aF9FC91e5B50fcba966E2a7981646CDDA03E
//   UserFactory deployed at: 0xA2E8a27423e0f69D7F4faa293206a310577029eD

import { getChainId } from "wagmi/actions";
import { config } from "./wagmi-config";

// ## Setting up 1 EVM.


export const CONTRACT_ADDRESSES = {
  11155111:{
    BOND_FACTORY_TOKEN: '0xae8b9251F8d94AF41654F5b41e973ffcD5B45A89' as const,
    YIELD_PROVIDER_SERVICE: '0x7145340054C406e139f8B4BCB69EEDeE749b9BBA' as const,
    USER_FACTORY_SETTINGS: '0xbA7bBF596b20FaaE6FcC1F5F069e5d3Be2908dc5' as const,
    USER_SETTINGS: '0x804dbe3582df3ba70e4f8f59156ecEa38B7A7BF4' as const,
    REGISTRY: '0x0F9beb188F3Be063aD4EF17A5F773c2a4aC78E2b' as const,
    IDENTITY_REGISTRY: '0x0c13aF9FC91e5B50fcba966E2a7981646CDDA03E' as const,
    USER_FACTORY: '0xA2E8a27423e0f69D7F4faa293206a310577029eD' as const,
    DEFAULT_ASSET_ADDRESS_ERC20: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8" as const,
  },
  8453: {
    BOND_FACTORY_TOKEN: '0xdB190e7Eb6411a01BD0Ea91941385e04c36C8dD4' as const,
    YIELD_PROVIDER_SERVICE: '0x7e65d10Db5cb7895494a5b3154Be38f309aDad23' as const,
    USER_FACTORY_SETTINGS: '0x27B9044F7a744914B4df51b2e99b113Cc4EF8c9a' as const,
    USER_SETTINGS: '0x52B2A5571765f9a2539915AE7eD39E02Bc2D47A2' as const,
    REGISTRY: '0xdD4C224a015501295b4752234CF4A6A186Cd9080' as const,
    IDENTITY_REGISTRY: '0xaD6828cAd23540D1941f73265c2B21dD14B24830' as const,
    USER_FACTORY: '0x2dE9bE0aB68b598e70476729Fe8EC98299E1b404' as const,
    DEFAULT_ASSET_ADDRESS_ERC20: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as const,
  }
} as const;
export type ContractName = keyof typeof CONTRACT_ADDRESSES;
export type ContractAddress = (typeof CONTRACT_ADDRESSES)[ContractName];
export const NULL_ADDRESS ="0x0000000000000000000000000000000000000000" as const; 
export const DEFAULT_DECIMALS = 6 as const;

export type ValidChainType = keyof typeof CONTRACT_ADDRESSES;

export const CHAIN_ID = typeof window!=="undefined" ? (getChainId(config) ?? 11155111) as keyof typeof CONTRACT_ADDRESSES : 11155111 as keyof typeof CONTRACT_ADDRESSES;
// export const CHAIN_ID = Number.parseInt(process.env.NEXT_PUBLIC_CHAIN_ID ?? "11155111"
// ) as keyof typeof CONTRACT_ADDRESSES;