import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://img.freepik.com/fotos-gratis/codificacao-de-programa-de-computador-na-tela_53876-138060.jpg"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/fabiano-franca.png" />

        <strong>Fabiano França</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
