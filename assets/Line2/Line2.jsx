import styles from "./line2.module.css";
const Line2 = () =>{
    return(
        <div className={styles.line2}>
            <ul className={styles.left}>
                <li>Movies</li>
                <li>Stream</li>
                <li>Events</li>
                <li>Plays</li>
                <li>Sports</li>
                <li>Activities</li>
            </ul>
            <ul className={styles.right}>
                <li>ListYourShow</li>
                <li>Corporates</li>
                <li>Offers</li>
                <li>Gift Cards</li>
            </ul>
        </div>
    );
};

export default Line2;