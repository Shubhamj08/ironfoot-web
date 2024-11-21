import '../scss/global.scss';
import Script from "next/script";
import Head from "next/head";
import { useEffect } from "react";
import { Open_Sans } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const OpenSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
    return (
      <main className={OpenSans.className} style={OpenSans.style}>
        <Component {...pageProps} />
      </main>
    )
  }