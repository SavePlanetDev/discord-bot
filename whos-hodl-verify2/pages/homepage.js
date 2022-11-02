import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";
import verify from "../styles/Verify.module.scss";
import { useRouter } from 'next/router';
import axios from "axios";


export default function Homepage() {
          const { address } = useAccount()
          const router = useRouter()
          const { discordId, guildId } = router.query;

          const verifyHolder = async (discordId, guildId, address) => {
                    try {
                              const response = await axios.post(
                                        `http://68.183.176.4:3000/v1/holder/verify`,
                                        {
                                                  walletAddress: address,
                                                  discordId: discordId,
                                                  discordGuildId: guildId,
                                        }
                              );
                              router.push("/success")
                    } catch (e) {
                              const walletaddress = JSON.stringify(address)
                              const discordid = JSON.stringify(discordId)
                              return alert("Address: " + (walletaddress) + " is not NFT! " + " OR " + " Discord Id " + (discordid) + " is already!");
                    }


          };

          return <div>
                    <div className={styles.container}>
                              <Header />
                              <main className={styles.main}>
                                        <Body />

                                        <div>
                                                  <ConnectButton label="Connect web3" accountStatus={"full"} />
                                        </div>
                                        

                                        <div class={verify.container}>
                                        <a class={verify.button} onClick={() => verifyHolder(discordId, guildId, address)} > Verify</a>
                                        </div> 
                              </main>

                              <Footer />
                    </div>
          </div>
          
}
