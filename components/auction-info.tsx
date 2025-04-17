"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Zap } from "lucide-react"

export function AuctionInfo() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  const [progress, setProgress] = useState(65)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="bg-gray-800/50 border-gray-700 mb-8">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">Crypto Punk #4269</CardTitle>
            <CardDescription>Current Featured Auction</CardDescription>
          </div>
          <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500">
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="aspect-square max-w-xs mx-auto mb-6 rounded-lg overflow-hidden">
          <img src="/placeholder.svg?height=400&width=400" alt="NFT Image" className="w-full h-full object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col items-center">
            <Clock className="mb-2 text-purple-400" />
            <p className="text-gray-400 text-sm">Time Remaining</p>
            <p className="text-xl font-mono">
              {timeLeft.hours.toString().padStart(2, "0")}:{timeLeft.minutes.toString().padStart(2, "0")}:
              {timeLeft.seconds.toString().padStart(2, "0")}
            </p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col items-center">
            <Users className="mb-2 text-purple-400" />
            <p className="text-gray-400 text-sm">Total Bids</p>
            <p className="text-xl font-mono">24</p>
          </div>

          <div className="bg-gray-900/50 p-4 rounded-lg flex flex-col items-center">
            <Zap className="mb-2 text-purple-400" />
            <p className="text-gray-400 text-sm">Minimum Bid</p>
            <p className="text-xl font-mono">0.5 ETH</p>
          </div>
        </div>

        <div className="mb-2 flex justify-between text-sm">
          <span>Auction Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2 bg-gray-700" />
      </CardContent>
    </Card>
  )
}
