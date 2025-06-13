import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>
        <Header />
        
        <div className={styles.wrapper}>
            <Sidebar />
            
            <main>
                <Post 
                  author="Vitor Gabriel"
                  content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis delectus itaque perspiciatis saepe doloribus sapiente iusto quisquam adipisci cupiditate beatae recusandae, quas perferendis officiis modi! Nam recusandae error eaque."
                />

                <Post
                  author="Gabriel Buzzi"
                  content="Um novo post"
                />
            </main>
        </div>
              
    </div>
 
  )
}

