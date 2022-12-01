
import styles from '../styles/Home.module.css'
import Headerpage from '../componance/header.page'
import Subplant from '../componance/subplant.page'
import Plan from '../componance/plan.page'

export default function Home() {
  return ( <div>
          <div>
          <div className={styles.container}>
          <Headerpage/>
          <Plan/>
          {/* <Subplant/> */}
          
          </div>
          </div>
          
  </div>
    
  )
}
