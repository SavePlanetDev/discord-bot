import { ConnectButton } from '@rainbow-me/rainbowkit';
import style from '../styles/Header.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function Headerpage(){
          return <div>
                   <div className={style.logocontaner}>
                    
                    <Link href="/" ><Image src="/holdseeds.png" alt="Logo" className={style.imagelogo} width="100" height={100} />
                   <Image className={style.whosholdtext} src="/whoshold.png"  width="550" height={200} />
                   </Link>
                   
                   <div className={style.buttonconnect}><ConnectButton /></div>
                   
                   </div>
                    
                   
                 
          
          
          </div>
}