import Head from "next/head";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Dr. William Donaldson</title>

        <meta name="title" content="William Donaldson" />
        <meta
          name="description"
          content="Medical practitioner  with over 10 years of professional experience."
        />
        <meta
          name="keywords"
          content="william donaldson, doctor, California doctor"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      {children}

      <Footer />
    </>
  );
};

export default Layout;
