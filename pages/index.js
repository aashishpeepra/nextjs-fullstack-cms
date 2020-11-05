import Head from 'next/head'
import styles from '../styles/Home.module.css'

import PostPreview from "../components/postpreview/postpreview"

export default function Home() {
  return (
    <div className={styles.container}>
     
      <div className={styles.home_image}>
        <img src="/images/ian-image.jpg" alt="Cristian Escobar"/>
      </div>
      <section className={styles.posts} id="trending-posts">
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
      </section>
    </div>
  )
}
