

export const bitkubchain = {
          id: 96,
          name: 'Bit Kub',
          network: 'bitkubchain',
          nativeCurrency: {
                    decimals: 18,
                    name: 'Bit Kub',
                    symbol: 'KUB',
                  },
          rpcUrls: {
                    default: 'https://rpc.bitkubchain.io'
          },
          blockExplorers: {
                    default: { name: 'BKCScan', url: 'https://bkcscan.com' },
                  },
          testnet: false,
};

export const avalancheChain = {
          id: 43_114,
          name: 'Avalanche',
          network: 'avalanche',
          nativeCurrency: {
            decimals: 18,
            name: 'Avalanche',
            symbol: 'AVAX',
          },
          rpcUrls: {
            default: 'https://api.avax.network/ext/bc/C/rpc',
          },
          blockExplorers: {
            default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
          },
          testnet: false,
        }
