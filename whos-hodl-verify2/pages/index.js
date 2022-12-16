import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Headerpage from "../componance/header.page";
import style from "../styles/Plan.module.scss";
import { useEffect, useState } from "react";

import { verifyHolder } from "../handlers/verifyHolder";

import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useGetProjectData } from "../handlers/getProjectData";

export default function Home() {
  const { address } = useAccount();
  const router = useRouter();
  const { discordId, guildId } = router.query;
  const project = useGetProjectData(guildId);

  async function verifyHolderHandler(discordId, guildId, address) {
    const result = await verifyHolder(discordId, guildId, address);
    !result
      ? alert("Verification Failed", result.data)
      : router.push({
          pathname: "/success/[link]",
          query: { link: project.discordInviteLink },
        });
  }

  const css = { maxWidth: "30%", height: "auto" };
  return (
    <div className={styles.container}>
      <Headerpage />
      <div>
        <div className={style.plans2}>
          <div className={style.planbox}>
            <div className={style.planoptions}>
              <Image
                className={style.headerbaner}
                src="/banner2.png"
                alt="Header"
                style={css}
                width="250"
                height={200}
              />
              <Image
                className={style.logoprofile}
                src="/ellipse.png"
                alt="Logo"
                style={css}
                width="250"
                height={200}
              />
              <div className={style.headername}>
                {project ? (
                  <Link href={project.website}>{project.projectName}</Link>
                ) : (
                  "n/a"
                )}
              </div>
              <hr className={style.hr} />
              <div className={style.nftaddress}>
                NFT Address: <br />
                {`${project ? project.nftAddress.slice(0, 6) : "0x0000"}...${
                  project ? project.nftAddress.slice(38) : "0000"
                } `}
              </div>
              <div className={style.nftaddress}>
                Your Address: <br />
                {`${address ? address.slice(0, 6) : "0x0000"}...${
                  address ? address.slice(38) : "0000"
                } `}
              </div>
              <div className={style.roleverify}>
                Your Verified Role: <br />
                {project ? project.roles : "n/a"}
              </div>
              <div className={style.balance}>
                Your Balance: <br />
                <h2>{`${1} ${project ? project.projectName : "n/a"}`}</h2>
              </div>
              <button
                className={style.button}
                type="button"
                onClick={() => verifyHolderHandler(discordId, guildId, address)}
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
