import styles from './Footer1.module.css'
import { GiBarracksTent } from "react-icons/gi";

const Footer1 = () =>{
    return(
        <div className={styles.total}>
            <div className={styles.line}>
                <div className={styles.hut}><GiBarracksTent size={30}/></div>
                <div className={styles.list}>List your Show</div>
                <div className={styles.matter}>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</div>
                <button>Contact today!</button>
            </div>
        </div>
    )
}

export default Footer1