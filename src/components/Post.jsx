import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/v2/D4D03AQGVtbT-vbMupw/profile-displayphoto-shrink_800_800/B4DZdloV81G8Ac-/0/1749756765321?e=1755129600&v=beta&t=lyssfu5vo383WWLYQMkJ3u_L3Elz8o4NHeKLnoIcTMs"/>
                    <div className={styles.authorInfo}>
                        <strong>Vitor Gabriel</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='12 de Junho às 11:22' dateTime="2025-06-12 11:22:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto </a>
                    <a href="">#nlw </a>
                    <a href="">#rocketseat </a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}