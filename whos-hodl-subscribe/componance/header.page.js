import { ConnectButton } from '@rainbow-me/rainbowkit';
import style from '../styles/Header.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Headerpage(){
          return <div>
                   <div className={style.logocontaner}>
                    
                    <Link href="/"><Image src="/holdseeds.png" alt="Logo" width={97} height={97}/>
                   <Image className={style.whosholdtext} src="/whoshold.png" alt="Logo" width={260} height={28}/>
                   </Link>
                   
                   <div className={style.buttonconnect}><ConnectButton /></div>
                   </div>
                    
                   
                 
          
          
          </div>
}