"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ArrowRight } from "lucide-react"

const MOCK_AUCTIONS = [
  {
    id: 1,
    name: "Bored Ape #2142",
    image: "/placeholder.svg?height=100&width=100",
    timeLeft: "2d 4h",
    minBid: "1.2 ETH",
    totalBids: 18,
  },
  {
    id: 2,
    name: "Azuki #8765",
    image: "/placeholder.svg?height=100&width=100",
    timeLeft: "14h 22m",
    minBid: "0.8 ETH",
    totalBids: 32,
  },
  {
    id: 3,
    name: "Doodle #4231",
    image: "/placeholder.svg?height=100&width=100",
    timeLeft: "3d 12h",
    minBid: "0.5 ETH",
    totalBids: 7,
  },
]

const MOCK_PAST_AUCTIONS = [
  {
    id: 101,
    name: "CryptoPunk #3542",
    image: "/placeholder.svg?height=100&width=100",
    winner: "0x1a2b...3c4d",
    finalPrice: "2.4 ETH",
  },
  {
    id: 102,
    name: "Moonbird #9876",
    image: "/placeholder.svg?height=100&width=100",
    winner: "0x5e6f...7g8h",
    finalPrice: "1.8 ETH",
  },
]

export function CurrentAuctions() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle>Auctions</CardTitle>
        <CardDescription>Current and past NFT auctions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active">
          <TabsList className="bg-gray-900 mb-4">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="space-y-4">
              {MOCK_AUCTIONS.map((auction) => (
                <div key={auction.id} className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg">
                  <img
                    src={auction.image || "/placeholder.svg"}
                    alt={auction.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{auction.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock size={14} />
                      <span>{auction.timeLeft}</span>
                      <span>•</span>
                      <span>{auction.totalBids} bids</span>
                    </div>
                    <p className="text-sm">Min: {auction.minBid}</p>
                  </div>
                  <Button size="sm" variant="outline" className="border-purple-500 text-purple-400">
                    Bid <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-4">
              {MOCK_PAST_AUCTIONS.map((auction) => (
                <div key={auction.id} className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg">
                  <img
                    src={auction.image || "/placeholder.svg"}
                    alt={auction.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{auction.name}</h3>
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-400">Winner: {auction.winner}</span>
                      <span>Final Price: {auction.finalPrice}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-green-500/20 text-green-300 border-green-500">
                    Completed
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
