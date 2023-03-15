import styles from '../styles/Button.module.css';

const Button = ({content}) =>{
    return(
        <>
            <button className={styles.content}>{content}</button>
        </>
    )
}

export default Button