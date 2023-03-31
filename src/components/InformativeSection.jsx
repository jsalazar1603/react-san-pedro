import styles from '../styles/InformativeSection.module.css'
import InformativeItem from './InformativeItem'
const SIZE = 15;

const InformativeSection = () => {
  return (
    <>
        <div className={styles.container}>
            <InformativeItem name="phone" text="+51 955 261 681"/>
            <InformativeItem name="mail-opened" text="soporte@sanpedro.com"/>
            <InformativeItem name="alarm" text="Lun-Vie: 09:00-15:00"/>
        </div>
    </>
  )
}

export default InformativeSection