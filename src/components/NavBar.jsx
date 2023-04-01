import Itemnavbar from "./ItemNavBar";
import styles from '../styles/NavBar.module.css'
const NavBar = () => {
  return (
    <>
      <div className={styles.container}>
        <Itemnavbar text="Inicio" />
        <Itemnavbar text="Contacto" />
        <Itemnavbar text="Nosotros" />
        <Itemnavbar text="Ubícanos" />
      </div>
    </>
  );
};

export default NavBar;
