import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useUser } from '@/services/UserContext';

export default function Home() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main className={styles.main}>
          <h1>This is the main page</h1>
          <p>{user && "You are signed in"}</p>
        </main>
        <footer>
          
        </footer>
      </div>
    </>
  );
}
