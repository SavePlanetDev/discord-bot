import '../styles/globals.css'
import "@rainbow-me/rainbowkit/styles.css"
import {getDefaultWallets, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {chain, configureChains, createClient, WagmiConfig} from "wagmi";
import {publicProvider} from "wagmi/providers/public";
import { bitkubchain, avalancheChain } from '../blockchain/chain.id';



const {chains, provider} = configureChains(
          [chain.mainnet, chain.polygon, bitkubchain, chain.arbitrum, avalancheChain],
          [publicProvider()]
);

const {connectors} = getDefaultWallets({
          appName: "Whos-Hodl",
          chains,
});

const wagmiClient = createClient({
          autoConnect: true,
          connectors,
          provider,
});

function MyApp({ Component, pageProps }) {
  return (
          <WagmiConfig client = {wagmiClient}>
                    <RainbowKitProvider chains={chains}>
                              <Component {...pageProps}/>
                    </RainbowKitProvider>
          </WagmiConfig>
  );
}

export default MyApp
