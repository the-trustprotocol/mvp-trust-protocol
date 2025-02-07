import { toast } from "sonner"

export function showTransactionToast(txHash: string) {
  toast.success(
    <div>
      <p className="font-semibold mb-1">Transaction Submitted!</p>
      <a
        href={`https://basescan.org/tx/${txHash}`}
        className="text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on BaseScan
      </a>
    </div>,
    {
      duration: 30_000, // Toast stays for 30 seconds
    }
  )
}
