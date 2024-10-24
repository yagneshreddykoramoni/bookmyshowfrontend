import styles from './Premiere.module.css'

const Premiere = () =>{
    return(
        <div className={styles.total}>
            <div className={styles.top}>
                <img src={'/src/images/premiere_head.jpg'} alt="premiere logo" height={105} width={1248} />
            </div>
            <div className={styles.head}>
                <div className={styles.prem}>Premieres</div>
                <div className={styles.brand}>Brand new releases every Friday</div>
            </div>
            <div className={styles.pics}>
                <div className={styles.pic}>
                    <img src={'/src/images/forge.jpg'} alt="The Forge" height={335} width={225}/>
                    <div className={styles.Mname}>The Forge</div>
                    <div className={styles.lang}>English</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/afraid.jpg'} alt="Afraid(Preview)" height={335} width={225}/>
                    <div className={styles.Mname}>Afraid (Preview)</div>
                    <div className={styles.lang}>English</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/ripple.jpg'} alt="Ripple" height={335} width={225}/>
                    <div className={styles.Mname}>Ripple</div>
                    <div className={styles.lang}>Danish</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/harold.jpg'} alt="Viswam" height={335} width={225}/>
                    <div className={styles.Mname}>Harold and the Purple Crayon (Preview)</div>
                    <div className={styles.lang}>English</div>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/hijack.jpg'} alt="Hijack 1971" height={335} width={225}/>
                    <div className={styles.Mname}>Hijack 1971</div>
                    <div className={styles.lang}>Korean</div>
                </div>
            </div>
        </div>
    )
}

export default Premiere