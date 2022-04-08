import { FC, PropsWithChildren, } from 'react';
import Head from 'next/head'
import { NavBar } from "../NavBar";
import styles from "./MainLayout.module.css";

type Props = {};

export const MainLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Disble</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}