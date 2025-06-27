import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/VitorVGDev.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='12 de Junho às 11:22' dateTime="2025-06-12 11:22:30">Cerca de 1h atrás</time>
                        </div>
                        
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    
                    <p>Muito bom Devon, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}