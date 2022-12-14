
import Head from 'next/head';
import { FC } from 'react';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

export const MainLayout: any = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="about" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
