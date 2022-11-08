import { useRouter } from "next/router";
import axios from "axios";
import styles from "../styles/checkdata.module.scss";
import { Header } from "../component/header";
import { Bodys } from "../component/bodys";
import { Footer } from "../component/footer";
import Link from "next/link";

export default function Succ() {
  const router = useRouter();
  const {
    nftAddress,
    ownerDiscordId,
    discordGuildId,
    ownerWalletAddress,
    projectName,
    totalSupply,
    symbol,
    website,
    facebook,
    twitter,
    discordInviteLink,
    etherscan,
    planId,
    roles,
  } = router.query;
  const verifyHolder = async (
    nftAddress,
    ownerDiscordId,
    discordGuildId,
    ownerWalletAddress,
    projectName,
    totalSupply,
    symbol,
    website,
    facebook,
    twitter,
    discordInviteLink,
    etherscan,
    planId,
    roles
  ) => {
    try {
      const response = await axios.post(
        // `http://157.245.152.83:3003/v1/subscription/subscribe`,
        `http://localhost:3003/v1/subscription/subscribe`,
        {
          nftAddress: nftAddress,
          ownerDiscordId: ownerDiscordId,
          discordGuildId: discordGuildId,
          ownerWalletAddress: ownerWalletAddress,
          projectName: projectName,
          totalSupply: totalSupply,
          symbol: symbol,
          website: website,
          facebook: facebook,
          twitter: twitter,
          discordInviteLink: discordInviteLink,
          etherscan: etherscan,
          planId: planId,
          roles: roles,
        }
      );
      router.push("/success");
    } catch (e) {
      const guild = JSON.stringify(discordGuildId);
      return alert("GuildId: " + guild + " is already!");
    }
  };
  return (
    <>
      <div>
        <Header />
        <main>
          <Bodys />

          <div className={styles.outerdiv}>
            <div className={styles.innerdiv}>
              <div className={styles.front}>
                <div className={styles.front__bkgphoto}></div>
                <div className={styles.front__facephoto}></div>
                <div className={styles.front__text}>
                  <h3 className={styles.front__textheader}>{projectName}</h3>
                  <h1 className={styles.front__textheader}>{totalSupply}</h1>
                  <h3 className={styles.front__textheader}>
                    Guild ID {discordGuildId}
                  </h3>
                  <p className={styles.front__textpara}>
                    Discord ID {ownerDiscordId}
                  </p>
                </div>
              </div>
              <div className={styles.back}>
                <p className={styles.front__textpara}>
                  nft Address : {nftAddress}
                </p>
                <p className={styles.front__textpara}>
                  ownerWalletAddress: {ownerWalletAddress}{" "}
                </p>
                <p className={styles.front__textpara}>symbol: {symbol} </p>
                <p className={styles.front__textpara}>website: {website} </p>
                <p className={styles.front__textpara}>facebook: {facebook} </p>
                <p className={styles.front__textpara}>twitter: {twitter} </p>
                <p className={styles.front__textpara}>
                  discordInviteLink: {discordInviteLink}{" "}
                </p>
                <p className={styles.front__textpara}>
                  etherscan: {etherscan}{" "}
                </p>
                <p className={styles.front__textpara}>roles: {roles} </p>
              </div>
            </div>
          </div>

          <div>
            <a
              className="verify-button"
              onClick={() =>
                verifyHolder(
                  nftAddress,
                  ownerDiscordId,
                  discordGuildId,
                  ownerWalletAddress,
                  projectName,
                  totalSupply,
                  symbol,
                  website,
                  facebook,
                  twitter,
                  discordInviteLink,
                  etherscan,
                  planId,
                  roles
                )
              }
            >
              {" "}
              Verify
            </a>
            <Link href="/register" className="back-button">
              Back
            </Link>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
