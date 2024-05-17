import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://img.freepik.com/fotos-gratis/codificacao-de-programa-de-computador-na-tela_53876-138060.jpg" alt="" />

            <div className={styles.profile}>
                <img 
                    className={styles.avatar} 
                    src="https://github.com/fabiano-franca.png" alt="" 
                />

                <strong>Fabiano França</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}