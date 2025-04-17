"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ConnectWallet, useWallet } from "@/components/connect-wallet"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export function BidForm() {
  const [bidAmount, setBidAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { isConnected, balance } = useWallet()

  // Если кошелек не подключен, показываем сообщение
  if (!isConnected) {
    return (
      <Card className="bg-gray-800/50 border-gray-700 mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="text-purple-400" size={20} />
            Place a Blind Bid
          </CardTitle>
          <CardDescription>Connect your wallet to place a bid</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-8">
          <p className="text-gray-400 mb-4">You need to connect your wallet to place a bid</p>
          <ConnectWallet />
        </CardContent>
      </Card>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Проверка достаточного баланса
    if (balance && Number.parseFloat(bidAmount) > Number.parseFloat(balance)) {
      toast({
        title: "Insufficient balance",
        description: `Your bid amount exceeds your wallet balance of ${balance} ETH`,
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Симуляция отправки ставки с генерацией ZK доказательства
    setTimeout(() => {
      setIsLoading(false)
      setBidAmount("")

      toast({
        title: "Bid submitted successfully!",
        description: "Your blind bid has been submitted with a ZK proof.",
        action: <ToastAction altText="View">View</ToastAction>,
      })
    }, 2000)
  }

  return (
    <Card className="bg-gray-800/50 border-gray-700 mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="text-purple-400" size={20} />
          Place a Blind Bid
        </CardTitle>
        <CardDescription>Your bid amount is hidden using ZK proofs</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bid-amount" className="flex items-center gap-2">
                Bid Amount (ETH)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info size={16} className="text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-900 border-gray-700">
                      <p className="max-w-xs">
                        Your bid amount will be hidden using Zero-Knowledge proofs. Only you will know the actual amount
                        until the auction ends.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="bid-amount"
                type="number"
                step="0.01"
                min="0.01"
                placeholder="0.00"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                className="bg-gray-900 border-gray-700"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm text-gray-300">
                I agree to lock my funds until the auction ends
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            disabled={isLoading}
          >
            {isLoading ? "Generating ZK Proof..." : "Submit Blind Bid"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="border-t border-gray-700 text-xs text-gray-400 flex justify-center">
        <p>Gas fees will apply to your transaction</p>
      </CardFooter>
    </Card>
  )
}
