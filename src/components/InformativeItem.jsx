import { Phone, MailOpened, Alarm } from "iconoir-react";
import styles from "../styles/InformativeItem.module.css";

const SIZE = 15;

const InformativeItem = ({ name }) => {
  return (
    <>
      {name == "phone" && (
        <div className={styles.container}>
            <>
            <a href="" className={styles.icon}>
                <Phone width={SIZE} height={SIZE} />
            </a>
            <p className={styles.info}>+51 955 261 681</p>
            </>
        </div>    
      )}
      {name == "mail-opened" && (
        <div className={styles.container}>
            <>
            <a href="" className={styles.icon}>
                <MailOpened width={SIZE} height={SIZE} />
            </a>
            <p className={styles.info}>soporte@sanpedro.com</p>
            </>
        </div>
      )}
      {name == "alarm" && (
        <div className={styles.container}>
            <>
          <a href="" className={styles.icon}>
            <Alarm width={SIZE} height={SIZE} />
          </a>
          <p className={styles.info}>Lun-Vie: 09:00-15:00</p>
        </>
        </div>
      )}
    </>
  );
};

export default InformativeItem;
