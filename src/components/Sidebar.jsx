import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <img className = {styles.avatar} src="https://media.licdn.com/dms/image/v2/D4D03AQGVtbT-vbMupw/profile-displayphoto-shrink_800_800/B4DZdloV81G8Ac-/0/1749756765321?e=1755129600&v=beta&t=lyssfu5vo383WWLYQMkJ3u_L3Elz8o4NHeKLnoIcTMs" />


                <strong>Vitor Gabriel</strong>
                <span>Web Developer</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </div>
        </aside>
    );
}