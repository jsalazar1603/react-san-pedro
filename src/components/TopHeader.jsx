import styles from '../styles/TopHeader.module.css'
import SocialNetwork from './SocialNetwork'

const TopHeader = () => {
  return (
        <>
            <div className={styles.container} >
                <div className={styles.content}>
                    <p>Seccion Contactos</p>
                    <SocialNetwork name='facebook'/>
                </div>
            </div>
        </> 
  )
}

export default TopHeader