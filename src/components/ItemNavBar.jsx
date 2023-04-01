import styles from '../styles/ItemNavBar.module.css'

const ItemNavBar = ({text}) => {
  return (
    <>
        <a href="" className={styles.item}>{text}</a>
    </>
  )
}

export default ItemNavBar