import { ReactNode, FC } from 'react';
import Head from "next/head";
import { NavBar } from "../ui/NavBar";

type Props = {
  title?: string;
  children?: ReactNode;
};

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title = "Pokemon app" }) => {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Yorest" />
        <meta name="description" content="Informacion sobre pokemon" />
        <meta name="keywords" content="pokemon, pokedex" />
        <meta
          property="og:title"
          content={`info about ${title}`}
        />
        <meta
          property="og:description"
          content= {`This is the page with relevant information about ${title}`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>

      <NavBar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
