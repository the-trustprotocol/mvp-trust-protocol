"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BondLoadingModal } from "@/components/bond-loading-modal";
import Image from "next/image";
import { toast } from "sonner";
import { showTransactionToast } from "../showTransactionToast";
import { useAccount, useReadContract } from "wagmi";
import { createPublicClient, erc20Abi, formatUnits, http, parseUnits } from "viem";
import {
  CONTRACT_ADDRESSES,
  DEFAULT_ASSET_ADDRESS_ERC20,
  NULL_ADDRESS,
} from "@/lib/constants";
import {

  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { config } from "@/lib/wagmi-config";
import { USER_FACTORY_ABI } from "@/abi/user-factory";
import { createBond } from "@/lib/calls";
import { isAddress } from "viem";
import { useUserWalletFromRegistry } from "@/hooks/use-protocol";
import { getEnsAddress, getEnsName } from "viem/actions";
import { mainnet } from "viem/chains";
import { normalize } from 'viem/ens'
export function CreateBondForm() {
  const { address } = useAccount();

  const [formData, setFormData] = useState<{
    user2: string;
    amount: string;
  }>({
    user2: "",
    amount: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const { data: approvedAmount } = useReadContract({
    abi: erc20Abi,
    address: DEFAULT_ASSET_ADDRESS_ERC20,
    functionName: "allowance",
    args: [address ?? NULL_ADDRESS, CONTRACT_ADDRESSES.USER_FACTORY],
  });
  const {data:userWallet} = useUserWalletFromRegistry(address ?? NULL_ADDRESS)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (createUser: boolean) => {
    setIsLoading(true);
    try {
      let finalAddress = formData.user2;
      if (!address) {
        toast.error("No address found");
        throw new Error("No address found");
      }
      if(!userWallet){
        toast.error("No wallet found")
        throw new Error("No wallet found")
      }
      if (!isAddress(formData.user2)) {
        const client = createPublicClient({
          chain: mainnet,
          transport: http(),
  })
        const returnEns = await getEnsAddress(client, {
          name: normalize(formData.user2),
        })
        if (!returnEns) {
          toast.error("Invalid ENS name");
          setIsLoading(false);
          return;
        }
        finalAddress = returnEns;
      }
      // Parse the input amount from the form
      const inputAmountParsed = parseFloat(formData.amount);
      if (isNaN(inputAmountParsed)) {
        toast.error("Invalid amount, Please enter a valid number.");
        setIsLoading(false);
        return;
      }

      // Format the approved amount from the ERC20 allowance (using 6 decimals for USDC)
      const approvedAmountFormatted = Number(
        formatUnits(approvedAmount || BigInt(0), 6)
      );
      
      // If the approved amount is lower than or equal to the input, run the approve transaction.
      if (approvedAmountFormatted < inputAmountParsed) {
        const approvalHash = await writeContract(config, {
          abi: erc20Abi,
          address: DEFAULT_ASSET_ADDRESS_ERC20,
          functionName: "approve",
          args: [
            userWallet,
            parseUnits(inputAmountParsed.toString(), 6),
          ],
        });
        await waitForTransactionReceipt(config, {
          hash: approvalHash,
        });

        console.log("Approval transaction would run here");
      }
      const hash = await createBond(
        address,
        finalAddress as `0x${string}`,
        parseUnits(formData.amount, 6)
      );
      await waitForTransactionReceipt(config, {
        hash: hash,
      });
      showTransactionToast(hash)
    } catch (error) {
      toast.error((error as Error).message);
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#cdffd8] to-blue-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 rounded-xl shadow-lg backdrop-blur-md bg-white bg-opacity-20 border border-white border-opacity-30"
        style={{ backgroundColor: "rgba(148, 185, 255, 0.2)" }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Create Bond 
        </h2>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-blue-900 mb-1"
            >
              Ethereum Address or ENS Name
            </label>
            <Input
              id="user2"
              name="user2"
              placeholder="0x... or example.eth"
              value={formData.user2}
              onChange={handleInputChange}
              className="w-full bg-white bg-opacity-50 border-blue-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-blue-900 mb-1"
            >
              Amount in USDC
            </label>
            <div className="relative">
              <Input
                id="amount"
                name="amount"
                type="number"
                placeholder="0.00"
                value={formData.amount}
                onChange={handleInputChange}
                className="w-full bg-white bg-opacity-50 border-blue-300 focus:border-blue-500 focus:ring-blue-500 pl-10"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Optionally add an icon or label here */}
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button
              onClick={() => handleSubmit(true)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Create User with Bond
            </Button>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>{isLoading && <BondLoadingModal />}</AnimatePresence>
    </div>
  );
}
