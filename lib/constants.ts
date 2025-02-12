// contracts.ts
export const CONTRACT_ADDRESSES = {
    BOND_FACTORY_TOKEN: '0xdB190e7Eb6411a01BD0Ea91941385e04c36C8dD4' as const,
    YIELD_PROVIDER_SERVICE: '0x7e65d10Db5cb7895494a5b3154Be38f309aDad23' as const,
    USER_FACTORY_SETTINGS: '0x27B9044F7a744914B4df51b2e99b113Cc4EF8c9a' as const,
    USER_SETTINGS: '0x52B2A5571765f9a2539915AE7eD39E02Bc2D47A2' as const,
    REGISTRY: '0xdD4C224a015501295b4752234CF4A6A186Cd9080' as const,
    IDENTITY_REGISTRY: '0xaD6828cAd23540D1941f73265c2B21dD14B24830' as const,
    USER_FACTORY: '0x2dE9bE0aB68b598e70476729Fe8EC98299E1b404' as const,
  } as const;
  export type ContractName = keyof typeof CONTRACT_ADDRESSES;
  export type ContractAddress = (typeof CONTRACT_ADDRESSES)[ContractName];
export const NULL_ADDRESS ="0x0000000000000000000000000000000000000000" as const; 
export const DEFAULT_ASSET_ADDRESS_ERC20 = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const DEFAULT_DECIMALS = 6 as const;
