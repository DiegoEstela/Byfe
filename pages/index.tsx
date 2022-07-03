import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navBar";
import TabBar from "../components/tabBar";
import MainMobile from "../components/mainMobile";



const Home: NextPage = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Head>
        <title>Byfe | Consultora digital</title>
        <meta
          name="google-site-verification"
          content="_3h0DQ916hXdTNP6QyMHOMdG7rsT6PuMNX1xDshYAm0"
        />
        <meta name="byfe consultora" content="servicios digitales" />
        <meta
          name="descripción"
          content="Desarrollo web, Diseño grafico, Social media, SEO y mucho mas."
        />
        <link rel="icon" href="/logoByFe.png" />
      </Head>
      <NavBar Active={active} setActive={setActive} />
      <MainMobile />
      <TabBar />
      <main className={styles.main} onClick={() => setActive(true)}>
        <h1 className={styles.title}>Byfe Consultora digital </h1>
        <h2>
          Somos un equipo joven que busca profesionalizar su trabajo tanto a
          nivel local como internacional. Nos caracterizamos por ser seres
          activos, creativos, que buscan día a día superarse y que desean que
          sus clientes se lleven la mejor de las experiencias trabajando con
          nosotros
        </h2>
      </main>

      <footer className={styles.footer}>
        <a href="https://by-fe.com" target="_blank" rel="noopener noreferrer">
          Powered by
          <span>Diego Estela</span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
