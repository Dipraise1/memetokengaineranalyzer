module.exports = {
    // Solana Network
    SOLANA_RPC_URL: process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
  
    // API Endpoints for Token Prices (e.g., CoinGecko or Serum)
    COINGECKO_API_URL: 'https://api.coingecko.com/api/v3',
    
    // Common Messages
    MESSAGES: {
      INVALID_WALLET: 'Invalid wallet address provided.',
      GENERAL_ERROR: 'An unexpected error occurred. Please try again later.',
    },
  
    // Token Configuration
    MEME_TOKEN_LIST: [
      'MINT_ADDRESS_1', // Replace with actual Solana token mint addresses
      'MINT_ADDRESS_2',
      'MINT_ADDRESS_3',
    ],
  
    // Application Configuration
    APP_NAME: 'Solana Meme Gains Calculator',
    DEFAULT_PORT: 3000,
  };
  