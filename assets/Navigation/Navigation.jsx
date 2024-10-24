import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styles from './Navigation.module.css'
const Navigation = () =>{
    return(
        <nav className={styles.head}>
            <img className={styles.logo} src={'/src/images/BMS-logo.png'} alt='book-my-show-logo' />
            <div className={styles.search}>
                <IoSearchOutline className={styles.search_icon}/>
                <input name='search' type='text' placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
            </div>
            <a href="">Hyderabad <MdOutlineKeyboardArrowDown className={styles.down}/></a>
            <div className={styles.profile}>
                <CgProfile className={styles.profile_pic} />
                <div className={styles.guest}>Hi,Guest</div>
            </div>
        </nav>
    )
}

export default Navigation;