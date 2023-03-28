import styles from "../styles/Header.module.css";
import TopHeader from "./TopHeader";
const Header = () =>{
    return(
        <>
            <header className={styles.header} > 
                <TopHeader/>
                <p>Main Header</p>
            </header>
        </>
    )
}

export default Header;