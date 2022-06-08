import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import React, { useState, useEffect } from "react";
import { Layout } from "../components";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script 
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Z9SZ2SQ11X`}
      />
      <Script 
        strategy="lazyOnload"
      >
  {window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-Z9SZ2SQ11X');}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
