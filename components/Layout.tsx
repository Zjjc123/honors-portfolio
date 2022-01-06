import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
import { Footer } from "./Footer";
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
      <Footer />
    </div>
  );
};

export default Layout;
