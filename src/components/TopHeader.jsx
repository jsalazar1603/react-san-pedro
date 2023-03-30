import styles from '../styles/TopHeader.module.css'
import InformativeSection from './InformativeSection'
import SocialNetwork from './SocialNetwork'

const TopHeader = () => {
  return (
        <>
            <div className={styles.container} >
                <div className={styles.content}>
                    <InformativeSection/>
                    <SocialNetwork name='facebook'/>
                </div>
            </div>
        </> 
  )
}

export default TopHeader