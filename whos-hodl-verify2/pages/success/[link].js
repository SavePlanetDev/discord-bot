import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Headerpage from "../../componance/header.page";
import style from "../../styles/Plan.module.scss";
import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  const { link } = router.query;
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
              <div className={style.headername}>Oppa Bear Gen.1 </div>
              <hr className={style.hr} />

              <div className={style.verified}>
                <h2>You’re verified!</h2>
              </div>
              <p className={style.verifiedinfo}>
                You can get back to your NFT community discord to check your
                verified role and reach to any exclusive parts
                <Link href={link}>
                  {" "}
                  <span>go to discord</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
