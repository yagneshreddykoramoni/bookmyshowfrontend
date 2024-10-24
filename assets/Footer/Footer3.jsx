import styles from './Footer3.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer3 = () =>{
    return(
        <div className={styles.total}>
            <div className={styles.matter}>
                <div className={styles.set}>
                    <div className={styles.title}>MOVIES NOW STREAMING IN HYDERABAD</div>
                    <div className={styles.name}><span>Venom: The Last Dance </span>|<span> Devara - Part 1 </span>|<span> Viswam </span>|<span> Vettaiyyan - The Hunter </span>|<span> Janaka Aithe Ganaka </span>|<span> Laggam </span>|<span> Pottel </span>|<span> The Wild Robot </span>|<span> Mr.Perfect </span>|<span> Jigra </span></div>
                </div>
                <div className={styles.set}>
                    <div className={styles.title}>UPCOMING MOVIES IN HYDERABAD</div>
                    <div className={styles.name}><span>Kundannoorile kulsitha Lahala </span>|<span> Nassab </span>|<span> Dhaya Bharathi </span>|<span> Happy Birthday Luci </span>|<span> Deepavali Bonus </span>|<span> Chor Dil </span>|<span> Roti Kapda Romance </span>|<span> Daitya </span>|<span> Thrayam </span>|<span> Tha Ka Sai Aa </span></div>
                </div>
                <div className={styles.set}>
                    <div className={styles.title}>MOVIES BY GENRE</div>
                    <div className={styles.name}><span>Drama Movies </span>|<span> Action Movies </span>|<span> Thriller Movies </span>|<span> Comedy Movies </span>|<span> Horror Movies </span>|<span> Romance Movies </span>|<span> Adventure Movies </span>|<span> Animation Movies </span>|<span> Suspense Movies </span>|<span> Period Movies </span></div>
                </div>
                <div className={styles.set}>
                    <div className={styles.title}>MOVIES BY LANGUAGE</div>
                    <div className={styles.name}><span>Movies in English </span>|<span> Movies in Telugu </span>|<span> Movies in Hindi </span>|<span> Movies in Tamil </span>|<span> Movies in Malayalam </span>|<span> Movies in Bengali </span>|<span> Movies in Sindhi </span>|<span> Movies in Bhojpuri </span>|<span> Movies in Chattisgarhi </span>|<span> Movies in Portuguese </span></div>
                </div>
                <div className={styles.set}>
                    <div className={styles.title}>MOVIES NOW SHOWING</div>
                    <div className={styles.name}><span>Venom: The Last Dance </span>|<span> Devara - Part 1 </span>|<span> Viswam </span>|<span> Vettaiyyan - The Hunter </span>|<span> Hahacar </span>|<span> Black </span>|<span> Pottel </span>|<span> The Wild Robot </span>|<span> Mr.Perfect </span>|<span> Jigra </span></div>
                </div>
                <div className={styles.set}>
                    <div className={styles.title}>COUNTRIES</div>
                    <div className={styles.name}><span>Indonesia </span>|<span> Singapur </span>|<span> UAE </span>|<span> Sri Lanka </span>|<span> West Indies </span></div>
                </div>
                <div className={styles.set}>
                    <div className={styles.title}>HELP</div>
                    <div className={styles.name}><span>About Us </span>|<span> Contact Us </span>|<span> Current Opening </span>|<span> Press Release </span>|<span> Press Coverage </span>|<span> Sitemap </span>|<span> FAQs </span>|<span> Terms And Conditions </span>|<span> Privacy Policy </span></div>
                </div>
                <div className={styles.set}>
                    <div className={styles.title}>BOOKMYSHOW EXCLUSIVES</div>
                    <div className={styles.name}><span>Lollapalooza India </span>|<span> Superstar </span>|<span> BookAChance </span>|<span> Corporate Vouchers </span>|<span> Gift Cards </span>|<span> List My Show </span>|<span> Offers </span>|<span> Stream </span>|<span> Trailers </span></div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.image}>
                <img src={'./src/images/footerlogo.png'} alt="BookMyShow" />
            </div>
            <div className={styles.logos}>
                <div className={styles.logo}> <FaFacebookF size={20}/> </div>
                <div className={styles.logo}> <FaTwitter size={20}/> </div>
                <div className={styles.logo}> <FaInstagram size={20}/></div>
                <div className={styles.logo}> <FaYoutube size={20}/> </div>
                <div className={styles.logo}> <FaPinterestP size={20}/> </div>
                <div className={styles.logo}> <FaLinkedinIn size={19}/> </div>
            </div>
            <div className={styles.last}>
                Copyright 2024 © Bigtree Entertainments Pvt. Ltd. All Rights Reserved. <br></br>
                The content and images used on this site are copyright protected and copyrights 
                vests with the respective owners. The usage of the content and images on this 
                website is intended to promote the works and no endorsement of the artist shall be implied. 
                Unauthorized use is prohibited and punishable by law.
            </div>
        </div>
    )
}

export default Footer3