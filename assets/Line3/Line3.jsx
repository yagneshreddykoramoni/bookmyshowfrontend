import styles from './Line3.module.css'
import { PiGreaterThanBold } from "react-icons/pi";

const Line3 = () =>{
    return(
        <div className={styles.total}>
            <div className={styles.head}>
                <div className={styles.rec}>Recommended Movies</div>
                <div className={styles.see}>See All <PiGreaterThanBold size={8}/></div>
            </div>
            <div className={styles.pics}>
                <div className={styles.pic}>
                    <img src={'/src/images/jigra.jpg'} alt="Jigra" height={380} width={225}/>
                    <div className={styles.Mname}>Jigra</div>
                    <div className={styles.genre}>Action/Drama/Thriller</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/vettaiyan.jpg'} alt="Vettaiyan" height={380} width={225}/>
                    <div className={styles.Mname}>Vettaiyan - The Hunter</div>
                    <div className={styles.genre}>Action/Drama</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/devara.jpg'} alt="Devara" height={380} width={225}/>
                    <div className={styles.Mname}>Devara - Part 1</div>
                    <div className={styles.genre}>Action/Drama/Thriller</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/vishwam.jpg'} alt="Viswam" height={380} width={225}/>
                    <div className={styles.Mname}>Viswam</div>
                    <div className={styles.genre}>Action/Comedy/Drama</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/janaka.jpg'} alt="Janaka Aithe Ganaka" height={380} width={225}/>
                    <div className={styles.Mname}>Janaka Aithe Ganaka</div>
                    <div className={styles.genre}>Comedy/Drama</div>
                </div>
            </div>
            <div className={styles.ad}>
                <img src={'/src/images/ad.jpg'} alt="ad" width={1245}/>
            </div>
        </div>
    )
}

export default Line3