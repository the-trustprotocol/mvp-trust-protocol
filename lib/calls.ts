import { readContract, readContracts, writeContract } from "wagmi/actions";
import { config } from "./wagmi-config";
import { REGISTRY_ABI } from "@/abi/registry";
import { CONTRACT_ADDRESSES, DEFAULT_ASSET_ADDRESS_ERC20, NULL_ADDRESS } from "./constants";
import { USER_FACTORY_ABI } from "@/abi/user-factory";
import { USER_ABI } from "@/abi/user";
import { BOND_ABI } from "@/abi/bond";
export async function 
export async function getUserWalletFromRegistry(user:`0x${string}`) : Promise<`0x${string}`> {
    const address =await readContract(config,{
        abi:REGISTRY_ABI,
        functionName:"addressToUserContracts",
        args:[user],
        address:CONTRACT_ADDRESSES.REGISTRY
    })
    return address
}
export async function getOppositeBondUserAddress(bondAddress:`0x${string}`,user:`0x${string}`) : Promise<`0x${string}`> {
    const userWallet = await getUserWalletFromRegistry(user)
    const [_,user1,user2] =await readContract(config,{
        abi:BOND_ABI,
        functionName:"bond",
        address:bondAddress
    })
    if(user1 === userWallet){
        return user2
    }
    else if (
        user2 === userWallet
    ){
        return user1
    }
    
    return NULL_ADDRESS
    
}
export async function getApprovalAddressForCreateBonds(user1:`0x${string}`,user2:`0x${string}`) : Promise<`0x${string}`> {
    const user1Wallet = await getUserWalletFromRegistry(user1)
    const user2Wallet = await getUserWalletFromRegistry(user2)
    if(user1Wallet === NULL_ADDRESS){
        return CONTRACT_ADDRESSES.USER_FACTORY; 
    }
    return user1Wallet
    
}

export async function getUserDetails(user:`0x${string}`) {
    const userWallet = await getUserWalletFromRegistry(user)
    // const [] = await readContracts(config,{
    //     contracts:[
    //         {
    //             abi:USER_ABI,
    //             address:userWallet,
    //             functionName:"user"
    //         },
    //         {
    //             abi:USER_ABI,
    //             address:userWallet,
    //             functionName:"bond"
    //         }
    //     ]
    // })
}
export async function createBond(user1:`0x${string}`,user2:`0x${string}`,initialAmount:bigint) : Promise<`0x${string}`> {
   const user1Wallet = await getUserWalletFromRegistry(user1)
   const user2Wallet = await getUserWalletFromRegistry(user2)
   let hash:`0x${string}` | undefined;
   if(user1Wallet === NULL_ADDRESS){
    hash =await writeContract(config,{
        abi:USER_FACTORY_ABI,
        address:CONTRACT_ADDRESSES.USER_FACTORY,
        functionName:'createUserWithBond',
        args:[user1,user2,initialAmount,CONTRACT_ADDRESSES.BOND_FACTORY_TOKEN,CONTRACT_ADDRESSES.YIELD_PROVIDER_SERVICE]
    })
   }
   if(user1Wallet !== NULL_ADDRESS){

    hash =await writeContract(config,{
        abi:USER_ABI,
        address:user1Wallet,
        functionName:'createBond',
        args:[user2,DEFAULT_ASSET_ADDRESS_ERC20,CONTRACT_ADDRESSES.YIELD_PROVIDER_SERVICE,initialAmount,CONTRACT_ADDRESSES.BOND_FACTORY_TOKEN]
    })
   }



   if(!hash){
         throw new Error("User type is not resolved")
   }
   return hash
}