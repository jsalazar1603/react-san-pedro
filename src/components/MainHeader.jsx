import styles from '../styles/MainHeader.module.css'
import Logo from './Logo'
import Navbar from './NavBar'
import Option from './Option'
const MainHeader = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.content}>
               <Logo/>
               <Navbar/>
               <Option/>
            </div>
        </div>
    
    </>
  )
}

export default MainHeader