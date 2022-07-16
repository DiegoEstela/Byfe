import "../styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-JTFE210TZD`}
      />

      <Script strategy="lazyOnload" id="3841364461">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-JTFE210TZD'); `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
