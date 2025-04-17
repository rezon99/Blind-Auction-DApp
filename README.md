# Blind-Auction-DApp
Blind Auction DApp: A decentralized app for private Ethereum auctions. Users bid with multiple addresses to conceal total bidding power. Features a two-phase process: commitment and reveal. Offers customizable settings for NFT auctions. Built with a modern frontend using v0.dev/chat. A key advancement in privacy-preserving blockchain auctions

# Blind Auction DApp

## Overview
This project implements a Blind Auction DApp where users can participate in an auction while maintaining their privacy by submitting bids with multiple addresses.

## Features
- **Multiple Addresses**: Users can create and use multiple addresses, each containing a specific amount of Ether for bidding.
- **Auction Configuration**: The auction generator contract allows setting parameters such as batch value, auction duration, reveal time, Token ID, and NFT contract address.
- **Commitment Phase**: Users pay 1 Ether with each address to create commitments during the commitment phase.
- **Reveal Phase**: Users reveal their commitments to show their bids during the reveal phase.
- **End of Auction**: The auction concludes after the reveal phase. The highest bidder receives the NFT, and losers can refund their bids.

## User Journey
1. **Creating Addresses**: Users create multiple addresses with specific Ether amounts. For example, User 1 creates 1 main address and 3 mock addresses, each with 1 Ether. User 2 creates 2 addresses with 1 Ether each.
2. **Auction Setup**: The auction is configured with parameters like batch value, auction duration, reveal time, Token ID, and NFT contract address.
3. **Commitment Phase**: Users pay 1 Ether with each address to create commitments.
4. **Starting Reveal Phase**: Call `startRevealTime` to begin the revealing phase.
5. **Revealing Bids**: Users reveal their commitments during the reveal duration.
6. **Ending Auction**: Call `endAuction` to finalize the auction. The highest bidder receives the NFT, and losers can refund their bids.

## Getting Started
To run the Blind Auction DApp:
1. Clone the repository
2. Install dependencies:
