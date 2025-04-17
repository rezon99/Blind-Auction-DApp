import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Award } from "lucide-react"

export function HowItWorks() {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="text-purple-400" size={20} />
          How It Works
        </CardTitle>
        <CardDescription>Understanding blind auctions with ZK proofs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Eye className="text-purple-400" size={16} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Private Bidding</h3>
              <p className="text-sm text-gray-400">
                Place bids without revealing your bid amount to other participants.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Lock className="text-purple-400" size={16} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Zero-Knowledge Proofs</h3>
              <p className="text-sm text-gray-400">
                ZK proofs verify your bid is valid without revealing the actual amount.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Award className="text-purple-400" size={16} />
            </div>
            <div>
              <h3 className="font-medium mb-1">Winner Determination</h3>
              <p className="text-sm text-gray-400">
                When the auction ends, the highest bidder wins and can claim the NFT.
              </p>
            </div>
          </div>

          <a href="#" className="block text-center text-sm text-purple-400 hover:text-purple-300 mt-4">
            Learn more about ZK proofs
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
