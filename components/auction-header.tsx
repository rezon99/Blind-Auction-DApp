"use client"

import { useState } from "react"
import { ConnectWallet } from "@/components/connect-wallet"
import { Menu, X } from "lucide-react"

export function AuctionHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="font-bold text-white">BS</span>
            </div>
            <span className="font-bold text-xl">BlindSpot</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Auctions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              My Bids
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              How It Works
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              About ZK Proofs
            </a>
          </nav>

          <div className="hidden md:block">
            <ConnectWallet />
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition py-2">
              Auctions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition py-2">
              My Bids
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition py-2">
              How It Works
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition py-2">
              About ZK Proofs
            </a>
            <ConnectWallet />
          </nav>
        )}
      </div>
    </header>
  )
}
