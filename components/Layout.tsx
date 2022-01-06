import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { Navbar } from "./Navbar";

const Layout: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jason Zhang Honors Portfolio</title>
        <meta name="description" content="Honors Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props.children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Layout;
