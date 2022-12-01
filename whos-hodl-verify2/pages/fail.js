import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Headerpage from '../componance/header.page'
import style from '../styles/Plan.module.scss'
import Link from 'next/link'



export default function Fail() {
const css = {  maxWidth: '30%', height: 'auto'}
  return (
    <div className={styles.container}>
      <Headerpage/>
      <div>
          
          <div className={style.plans2}>
                    
              <div className={style.planbox}>
                    <div className={style.planoptions}>
                    
                    <div className={style.headername}>Verify failed! </div>
                    <hr className={style.hr}/>
                    
                    <p className={style.verifiedinfofail}>Not found NFT in your wallet. Please recheck wheter you connect to the right one.</p>
                    <button className={style.buttonnewconnect} type="submit" value="Submit" ><Link href={'/'}>connect new wallet</Link></button>
                    </div>
              
              
              
              </div>
              
              
          </div>
          
      </div>
    </div>
  )
}
