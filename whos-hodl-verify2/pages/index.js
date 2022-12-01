import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Headerpage from '../componance/header.page'
import style from '../styles/Plan.module.scss'
import Link from 'next/link'


export default function Home() {
const css = {  maxWidth: '30%', height: 'auto'}
  return (
    <div className={styles.container}>
      <Headerpage/>
      <div>
          
          <div className={style.plans2}>
                    
              <div className={style.planbox}>
                    <div className={style.planoptions}>
                    <Image className={style.headerbaner} src="/banner2.png" alt="Header" style={css} width="250" height={200}></Image>    
                    <Image className={style.logoprofile} src="/ellipse.png" alt="Logo" style={css} width="250" height={200}/>
                    <div className={style.headername}>Oppa Bear Gen.1 </div>
                    <hr className={style.hr}/>
                    <div className={style.nftaddress}>NFT Address: <br/>0x2dsa.......d </div>
                    <div className={style.roleverify}>Your Verified Role: <br/>Mod </div>
                    <div className={style.balance}>Your Balance: <br/><h2>1 ETH</h2></div>
                    <button className={style.button} type="submit" value="Submit" ><Link href={'/success'}>Verify</Link></button>
                    </div>
              
              
              
              </div>
              
              
          </div>
          
      </div>
    </div>
  )
}
