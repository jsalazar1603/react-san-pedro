import { Phone, MailOpened, Alarm } from "iconoir-react";
import styles from "../styles/InformativeItem.module.css";

const SIZE = 15;

const InformativeItem = ({name,text }) => {
  return (
    <>
        <div className={styles.container}>
            <>
            <a href="" className={styles.icon}>
            {name=="phone" && <Phone width={SIZE} height={SIZE} />}
            {name=="mail-opened" && <MailOpened width={SIZE} height={SIZE} />}
            {name=="alarm" && <Alarm width={SIZE} height={SIZE} />}
            </a>
              <p className={styles.info}>{text}</p>
            </>
        </div>
    </>
  );
};

export default InformativeItem;
