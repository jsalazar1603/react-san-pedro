import styles from '../styles/InformativeSection.module.css'
import InformativeItem from './InformativeItem'
const SIZE = 15;

const InformativeSection = () => {
  return (
    <>
        <div className={styles.container}>
            <InformativeItem name="phone"/>
            <InformativeItem name="mail-opened"/>
            <InformativeItem name="alarm"/>
        </div>
    </>
  )
}

export default InformativeSection