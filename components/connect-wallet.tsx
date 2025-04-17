"use client"

import type React from "react"

import { useState, useEffect, createContext, useContext } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Copy, Check, ExternalLink, LogOut } from "lucide-react"

// Создаем контекст для хранения состояния кошелька
type WalletContextType = {
  isConnected: boolean
  address: string | null
  balance: string | null
  chainId: number | null
  connect: (walletType: string) => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType>({
  isConnected: false,
  address: null,
  balance: null,
  chainId: null,
  connect: async () => {},
  disconnect: () => {},
})

// Хук для использования контекста кошелька
export const useWallet = () => useContext(WalletContext)

// Провайдер контекста кошелька
export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)
  const [chainId, setChainId] = useState<number | null>(null)

  // Проверяем, есть ли сохраненное состояние кошелька при загрузке
  useEffect(() => {
    const savedWallet = localStorage.getItem("wallet")
    if (savedWallet) {
      const walletData = JSON.parse(savedWallet)
      setIsConnected(true)
      setAddress(walletData.address)
      setBalance(walletData.balance)
      setChainId(walletData.chainId)
    }
  }, [])

  // Функция подключения кошелька
  const connect = async (walletType: string) => {
    // Имитация подключения кошелька
    try {
      // Генерируем случайный адрес и баланс
      const randomAddress = `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join(
        "",
      )}`

      const randomBalance = (Math.random() * 10).toFixed(4)

      // Устанавливаем состояние
      setIsConnected(true)
      setAddress(randomAddress)
      setBalance(randomBalance)
      setChainId(1) // Ethereum Mainnet

      // Сохраняем в localStorage
      localStorage.setItem(
        "wallet",
        JSON.stringify({
          address: randomAddress,
          balance: randomBalance,
          chainId: 1,
          walletType,
        }),
      )

      return { success: true }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      return { success: false, error }
    }
  }

  // Функция отключения кошелька
  const disconnect = () => {
    setIsConnected(false)
    setAddress(null)
    setBalance(null)
    setChainId(null)
    localStorage.removeItem("wallet")
  }

  return (
    <WalletContext.Provider value={{ isConnected, address, balance, chainId, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  )
}

// Компонент для отображения адреса кошелька
function TruncatedAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const truncatedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
          {truncatedAddress}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border-gray-700">
        <DropdownMenuItem onClick={copyToClipboard} className="flex items-center gap-2 cursor-pointer">
          {copied ? <Check size={16} /> : <Copy size={16} />}
          {copied ? "Copied!" : "Copy address"}
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
          <ExternalLink size={16} />
          <a href={`https://etherscan.io/address/${address}`} target="_blank" rel="noopener noreferrer">
            View on Etherscan
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// Основной компонент для подключения кошелька
export function ConnectWallet() {
  const { isConnected, address, balance, connect, disconnect } = useWallet()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleConnect = async (walletType: string) => {
    await connect(walletType)
    setIsDialogOpen(false)
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2 bg-purple-500/10 px-3 py-1 rounded-md text-purple-300">
          <span>{balance} ETH</span>
        </div>
        <div className="flex items-center gap-2">
          <TruncatedAddress address={address} />
          <Button variant="ghost" size="icon" onClick={disconnect} className="text-gray-400 hover:text-white">
            <LogOut size={18} />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>Connect your wallet to participate in blind auctions</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="flex justify-between items-center"
            onClick={() => handleConnect("metamask")}
          >
            <span>MetaMask</span>
            <img src="/placeholder.svg?height=24&width=24" alt="MetaMask" className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="flex justify-between items-center"
            onClick={() => handleConnect("walletconnect")}
          >
            <span>WalletConnect</span>
            <img src="/placeholder.svg?height=24&width=24" alt="WalletConnect" className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            className="flex justify-between items-center"
            onClick={() => handleConnect("coinbase")}
          >
            <span>Coinbase Wallet</span>
            <img src="/placeholder.svg?height=24&width=24" alt="Coinbase Wallet" className="h-6 w-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
