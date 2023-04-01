import styles from "../styles/Header.module.css";
import TopHeader from "./TopHeader";
import MainHeader from './MainHeader'
const Header = () =>{
    return(
        <>
            <header className={styles.header} > 
                <TopHeader/>
                <MainHeader/>
            </header>
        </>
    )
}

export default Header;