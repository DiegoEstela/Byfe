import "../styles/globals.css";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-WX483N8GER`}
      />

      <Script strategy="lazyOnload" id="232877750">
        {`
      window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-WX483N8GER'); `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
