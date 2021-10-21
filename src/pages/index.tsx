import type { NextPage } from 'next'
import Head from 'next/head'
import TodoList from '../containers/todos/TodoList'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Redux Saga Starter Kit</title>
        <meta name="description" content="Next.js Redux Saga Starter Kit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodoList />
    </div>
  )
}

export default Home
