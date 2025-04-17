# 🎭 Blind Spot Auction

demo https://v0-blind-spot-z62cdk.vercel.app/

> A decentralized blind auction platform to ensure bid privacy.

## 🚀 Overview

Blind Spot Auction is a Web3 application that enables users to participate in blind auctions for NFTs. Unlike traditional auctions where bids are visible to all participants, Blind Spot uses Zero-Knowledge proofs to keep bid amounts private until the auction ends, ensuring a fair and transparent process.

### ✨ Key Features

- **Blind Bidding**: Place bids without revealing your amount to other participants
- **Zero-Knowledge Proofs**: Cryptographic verification without revealing sensitive information
- **Wallet Integration**: Seamless connection with popular Web3 wallets
- **Responsive Design**: Fully optimized for both desktop and mobile devices
- **Real-time Updates**: Stay informed about auction progress and results

## 🛠️ Technologies

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Web3**: Custom wallet integration (with plans to add ethers.js/web3.js)
- **UI Components**: shadcn/ui
- **Authentication**: Web3 wallet-based authentication
- **Styling**: Tailwind CSS with custom gradient designs

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- A modern web browser with Web3 wallet extension (MetaMask recommended)

## 🔧 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/blind-spot-auction.git
   cd blind-spot-auction
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

\`\`\`
blind-spot-auction/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── auction-header.tsx    # Header with navigation
│   ├── auction-info.tsx      # Current auction details
│   ├── bid-form.tsx          # Bidding interface
│   ├── connect-wallet.tsx    # Wallet connection
│   ├── current-auctions.tsx  # List of active auctions
│   └── how-it-works.tsx      # Explanation of blind auctions
├── public/               # Static assets
└── README.md             # Project documentation
\`\`\`

## Smart contracts
reed me https://github.com/rezon99/Blind-Spot-use-ZK-proof-

## 🔍 How It Works

1. **Connect Wallet**: Users connect their Web3 wallet to the platform
2. **Browse Auctions**: View available NFT auctions and their details
3. **Place Blind Bid**: Submit a bid with the amount hidden by ZK proofs
4. **Auction End**: When the auction ends, the highest bidder wins the NFT
5. **Claim NFT**: The winner can claim their NFT after the auction concludes

## 🔒 Zero-Knowledge Proofs

Blind Spot Auction uses Zero-Knowledge proofs to enable:

- Bidders to prove they have sufficient funds without revealing the exact amount
- Verification that bids are valid without exposing bid values
- Transparent winner determination without compromising privacy

## 🛣️ Roadmap

- [ ] Integration with real blockchain networks (Ethereum, Polygon)
- [ ] Implementation of actual ZK proof generation and verification
- [ ] Smart contract development for on-chain auction management
- [ ] Multi-chain support
- [ ] User profiles and bid history
- [ ] Auction creation interface for NFT owners
- [ ] Mobile app development

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact

Project Link: [https://github.com/yourusername/blind-spot-auction](https://github.com/yourusername/blind-spot-auction)

---

<p align="center">Made with ❤️ for the Web3 community</p>
