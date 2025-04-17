"use client"

import { AuctionHeader } from "@/components/auction-header"
import { AuctionInfo } from "@/components/auction-info"
import { BidForm } from "@/components/bid-form"
import { CurrentAuctions } from "@/components/current-auctions"
import { HowItWorks } from "@/components/how-it-works"
import { WalletProvider } from "@/components/connect-wallet"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <WalletProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <AuctionHeader />
        <main className="container mx-auto px-4 py-8">
          <section className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Blind Spot Auction
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A decentralized blind auction platform using Zero-Knowledge proofs to ensure bid privacy. Place bids
              without revealing your amount and win NFTs with complete transparency.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AuctionInfo />
              <CurrentAuctions />
            </div>
            <div>
              <BidForm />
              <HowItWorks />
            </div>
          </div>
        </main>
        <Toaster />
      </div>
    </WalletProvider>
  )
}
