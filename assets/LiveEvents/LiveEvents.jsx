import styles from './LiveEvents.module.css'

const LiveEvents = () =>{
    return(
        <div className={styles.total}>
            <div className={styles.head}>
                <div className={styles.live}>The Best Of Live Events</div>
            </div>
            <div className={styles.pics}>
                <div className={styles.pic}>
                    <img src={'/src/images/live1.jpg'} alt="park" height={223} width={225}/>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/live2.jpg'} alt="workshops" height={223} width={225}/>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/live3.jpg'} alt="kids" height={223} width={225}/>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/live4.jpg'} alt="comedy shows" height={223} width={225}/>
                </div>
                <div className={styles.pic}>
                    <img src={'/src/images/live5.jpg'} alt="music shows" height={223} width={225}/>
                </div>
            </div>
        </div>
    )
}

export default LiveEvents