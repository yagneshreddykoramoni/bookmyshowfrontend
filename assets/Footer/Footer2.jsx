import styles from './Footer2.module.css'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GiTicket } from "react-icons/gi";
import { SiGooglenews } from "react-icons/si";

const Footer2 = () =>{
    return(
        <div className={styles.total}>
            <div className={styles.line}>
                <div className={styles.customer}>
                    <div className={styles.image}><TfiHeadphoneAlt size={45}/></div>
                    <div className={styles.name}>24/7 CUSTOMER CARE</div>
                </div>
                <div className={styles.resend}>
                    <div className={styles.image}><GiTicket size={45}/></div>
                    <div className={styles.name}>RESEND BOOKING CONFIRMATION</div>
                </div>
                <div className={styles.subscribe}>
                    <div className={styles.image}><SiGooglenews size={45}/></div>
                    <div className={styles.name}>SUBSCRIBE TO THE NEWSLETTER</div>
                </div>
            </div>
        </div>
    )
}

export default Footer2