import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const Layout: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Jason Zhang Honors Portfolio</title>
        <meta name="description" content="Honors Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="min-h-screen flex flex-col py-16 px-4 lg:px-8">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
