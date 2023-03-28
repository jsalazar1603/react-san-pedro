import { Facebook,Instagram } from 'iconoir-react';
import styles from '../styles/SocialNetwork.module.css'

const SIZE = 15;
const links = {
    'facebook' : "https://www.facebook.com/",
    'instagram' : "https://www.instagram.com/"
}

const SocialNetwork = ({name}) => {
  return (
    <>
        <a className={styles.icon} href={links[name]} target="_blank">
            {name=="facebook" && <Facebook width={SIZE} height={SIZE} />}
            {name=="instagram" && <Instagram width={SIZE} height={SIZE} />}
        </a>
    </>
  )
}

export default SocialNetwork